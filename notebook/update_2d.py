import numpy as np
from fastai.vision import plt
from scipy.integrate import odeint
from pdb import set_trace

def get_dyn(loss_fnc, update, rotate = False, Block_diag = False):
    def f(w, t, lr, q, damp, eps, normalize = False):
        loss, err, jac = loss_fnc(w)
        dv = update(err, jac, q=q, damping = damp, eps = eps, Block_diag = Block_diag)    #    dv, jac_d, V 
        if normalize:
            dv /= np.sqrt((err ** 2).sum(axis=0))   # normalized update
        if rotate:
            dv = rotate_90(dv)
        return - lr * dv 
    return f

def rotate_90(v):
    R = np.array([[0, 1], [-1, 0]])
    return R @ v

def solver_euler(dyn, w0, t_all, args):
    w = w0.copy();   w_all = [];
    iter = len(t_all);    dt = t_all[1] - t_all[0]
    
    for t in range(iter):
        w_all.append(w.copy())
        w += dyn(w, t, *args) * dt
        
    return np.stack(w_all,axis=1).T

def run_exp(loss_fnc, w0, qs = None, lrs = None, epss = None, dampings = None, OED_solver = None, Block_diag = False, iter = 100):
    w_alls = []; l_alls = []; w_mins = []; w_maxs = []
    
    if OED_solver is None: 
        OED_solver = solver_euler
    elif OED_solver == 'odeint':
        OED_solver = odeint
    if qs is None:         qs = [0.0, 1.0, 0.5]
    if lrs is None:        lrs = np.array([0.0016, 0.01, 0.03])/4                
    if epss is None:       epss = np.array([100, 0.1, 10])              
    if dampings is None:   dampings = [0, 10, 0.01]
       
    t_all = np.linspace(0,iter,iter+1) 
    
    for q, lr, damp, eps in zip(qs, lrs, dampings, epss):
        dyn = get_dyn(loss_fnc, qNGD_update, Block_diag = Block_diag )
        w_all = OED_solver(dyn, w0, t_all, args=(lr, q, damp, eps)).T
        l_all, _, _ = loss_fnc(w_all)
        w_alls.append(w_all);        l_alls.append(l_all);        w_mins.append(w_all.min(axis=1));        w_maxs.append(w_all.max(axis=1))
        
#         print('V', V, 'err', err, 'V @ err', V @ err, 'j_d', jac_d, 'j_d @  V @ err', jac_d @  V @ err)
    return l_alls, w_alls, (w_mins, w_maxs)


def qNGD_update(err, jac, damping, q, eps, Block_diag = False): 
    if Block_diag:
        factor = ((1 + damping)/(jac ** 2 + damping)) #.clip(max = eps) 
        jac_q = jac * (factor ** q)
        update = jac_q @ err
    else:
        U, d, V = np.linalg.svd(jac)               
        factor = ((1 + damping)/(d ** 2 + damping)).clip(max = eps) 
        d_q =  d * (factor ** q)
        k= d_q.shape[0]
        update = U[:,:k] * d_q @ V[:k,:] @ err
    return update 

def qNGD_update_all(err, jac, damping, q, eps, Block_diag = False):
    if Block_diag:
        factor = ((1 + damping)/(jac ** 2 + damping)) #.clip(max = eps) 
        jac_q = jac * (factor ** q)
        update = np.einsum('ajk,jk->ak', jac_q, err)
    else:
        U, d, V = svd_2d(jac)   #  np.linalg.svd(jac)
        d_ =  d * ((1 + damping)/(d ** 2 + damping)).clip(max = eps)  **q
        k= d.shape[0]
    #     update = U[:,:k] * d_q @ V[:k,:] @ err
    #     set_trace()
        update = np.einsum('aik, ik,ijk,jk->ak', U[:,:k,:], d_, V[:k,:,:], err)
    return update 



### Custom SVD

def svd_2d(M):   #   SVD of 2x2 matrix M:  U and V are orthogonal, D is diagonal, and A=U*D@V
    if len(M.shape) == 2:
        U = get_orth_matrix(M @ M.T)
        V = get_orth_matrix(M.T @ M)
        d = np.diag(U.T @ M @ V)
        # sign correction
        V = (np.sign(d) * V).T
        d = np.abs(d)    
    elif len(M.shape) == 3:
        MMT = np.einsum('ijk,ljk->ilk',M,M)
        MTM = np.einsum('jik,jlk->ilk',M,M)
        U = get_orth_matrix(MMT)
        V = get_orth_matrix(MTM)
        D = np.einsum('jik,jlk,lmk->imk',U,M,V)
        d = np.diagonal(D, axis1=0, axis2=1).T
    
        # sign correction
        V = np.einsum('ijk -> jik', np.sign(d)*V)
        d = np.abs(d)    
    
    return U, d, V

def get_orth_matrix(S):
    # S: symmetric matrix
    if S.shape[0] == 1:
        return np.ones(S.shape)
    else:    
        if len(S.shape) == 2:
            theta   = 0.5*np.arctan2(S[0,1]+S[1,0], S[0,0]-S[1,1])   
        elif len(S.shape) == 3:
            theta   = 0.5*np.arctan2(S[0,1,:]+S[1,0,:], S[0,0,:]-S[1,1,:])   
        Cos, Sin = np.cos(theta), np.sin(theta)
        return np.array([[Cos, -Sin], [Sin, Cos]])
    