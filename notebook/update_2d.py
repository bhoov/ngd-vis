import numpy as np
from fastai.vision import plt

from pdb import set_trace

def run_exp(fnc, w0, qs, lrs, momentums = None, dampings = None, iter = 100):
    w_alls = []; l_alls = []; w_mins = []; w_maxs = []
    dv_prev = None
    if momentums is None: 
        momentums = np.zeros(len(qs))
    if dampings is None: 
        dampings = np.zeros(len(qs))
        
    for q, lr, m, damp in zip(qs, lrs, momentums, dampings):
        w = w0.copy();   w_all = [];
        for _ in range(iter):
            w_all.append(w.copy())
            
            loss, err, jac = fnc(w)
            dv = update_w(err, jac, q=q, damping = damp)    #    dv, jac_d, V 
            w -= lr * dv
#                 v =  m * v + (1-m) * dv; w -= lr * v; # Momentum
            
        w_all = np.stack(w_all,axis=1)
        l_all, _, _ = fnc(w_all)
        w_alls.append(w_all);        l_alls.append(l_all);        w_mins.append(w_all.min(axis=1));        w_maxs.append(w_all.max(axis=1))
        
#         err *= lr*10 
#         print('V', V, 'err', err, 'V @ err', V @ err, 'j_d', jac_d, 'j_d @  V @ err', jac_d @  V @ err)
    return l_alls, w_alls, (w_mins, w_maxs)


def update_w(err, jac, damping, q=0):
#     if w.shape[0] == 1:                # 1-d update
#         update = (jac ) ** (1 - 2*q) * err
#     elif w.shape[0] == 2:              # 2-d update

    U, d, V = np.linalg.svd(jac)
    d_ =  d * ((1 + damping)/(d ** 2 + damping)) **q
    update = U * d_ @ V @ err
    return update #, d_, V 

def update_w_all(err, jac, damping, q=0):
    U, d, V = svd_2d(jac)   #  np.linalg.svd(jac)
    d_ =  d * ((1 + damping)/(d ** 2 + damping)) **q
    update = np.einsum('aik, ik,ijk,jk->ak', U, d_, V, err)
    return update #, d_, V 



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
        V = np.sign(d) * V
        V = np.einsum('ijk -> jik',V)
        d = np.abs(d)    
    
    return U, d, V

def get_orth_matrix(S):
    if len(S.shape) == 2:
        theta   = 0.5*np.arctan2(S[0,1]+S[1,0], S[0,0]-S[1,1])   
    elif len(S.shape) == 3:
        theta   = 0.5*np.arctan2(S[0,1,:]+S[1,0,:], S[0,0,:]-S[1,1,:])   
    Cos, Sin = np.cos(theta), np.sin(theta)
    return np.array([[Cos, -Sin], [Sin, Cos]])
    