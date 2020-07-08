import numpy as np
from pdb import set_trace

def run_exp(fnc, w0, qs, lrs, momentums = None, dampings = None, iter = 100):
    w_alls = []; l_alls = []; w_mins = []; w_maxs = []
    dv_prev = None
    if momentums is None: 
        momentums = np.zeros(len(qs))
    if dampings is None: 
        dampings = np.zeros(len(qs))
        
    for q, lr, m, damp in zip(qs, lrs, momentums, dampings):
        w = w0.copy()
        w_all = [w.copy()]
        v = 0 
        for _ in range(iter):
            loss, err, jac = fnc(w)
            dv, d = update_w(w, err, jac, q=q, damping = damp) 
            
#             if dv_prev is not None: 
#                 temp = (dv @ dv_prev).sum()/np.linalg.norm(dv)/ np.linalg.norm(dv_prev)
#                 if temp < 0.9:
# #                     set_trace()
#                     print(q, d[1], w)
#             dv_prev = dv
            
            v =  m * v + (1-m) * dv
            w -= lr * v
            w_all.append(w.copy())

        w_all = np.stack(w_all,axis=1)
        l_all, _, _ = fnc(w_all)
        w_alls.append(w_all);        l_alls.append(l_all);        w_mins.append(w_all.min(axis=1));        w_maxs.append(w_all.max(axis=1))
        
    return l_alls, w_alls, (w_mins, w_maxs)



def update_w(w, err, jac, damping, q=0):
    if w.shape[0] == 1:                # 1-d update
        update = (jac ) ** (1 - 2*q) * err
    elif w.shape[0] == 2:              # 2-d update
#         U, d, V = svd_2d(jac)
        U, d, V = np.linalg.svd(jac)
        d_ = d+ damping
#         update = U * ( (d+ damping) ** (1 - 2*q) * (1 + damping)**q) @ V @ err
#         update = U * ( d /(d ** 2 + damping) **q) @ V @ err
        update = U * ( d * ((1 + damping)/(d ** 2 + damping)) **q) @ V @ err
            
    return update, d



### Custom SVD

def svd_2d(M):   #   SVD of 2x2 matrix M:  U and V are orthogonal, D is diagonal, and A=U*D@V
    U = get_orth_matrix(M @ M.T)
    V = get_orth_matrix(M.T @ M)
    d = np.diag(U.T @ M @ V)
    
    # sign correction
    V = np.sign(d) * V
    d = np.abs(d)    
    return U, d, V.T

def get_orth_matrix(S):
    theta   = 0.5*np.arctan2(S[0,1]+S[1,0], S[0,0]-S[1,1])   
    Cos, Sin = np.cos(theta), np.sin(theta)
    return np.array([[Cos, -Sin], [Sin, Cos]])
    