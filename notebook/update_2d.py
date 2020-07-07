import numpy as np

def update_w(w, err, jac, q=0):
    if w.shape[0] == 1:                # 1-d update
        update = jac ** (1 - q) * err
    elif w.shape[0] == 2:              # 2-d update
#         U, d, V = svd_2d(jac)
        U, d, V = np.linalg.svd(jac)
        update = U * (d ** (1 - q)) @ V @ err
    return update

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
    