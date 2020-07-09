import numpy as np
import sympy as sym
from pdb import set_trace

def landscape(xy, freq = None, amp = None, py = np,  eps=0, seed = None):
    if freq is None:
        n = 4
        freq = np.exp(np.linspace(-1,0,n))    #    freq = np.exp(np.linspace(-2,1,n))  
        amp = 1/freq 
    if seed is None:
        if len(xy.shape)>1:
            eps = 0
    else:
        np.random.seed(seed)
        
    err, Jacobian = landscape_core(xy, freq, amp, py, eps)  #xy[0,:], xy[1,:]
    err = sym.Array(err) if py == sym else py.array(err)  
    loss = (err ** 2).sum(axis=0)/2
    return loss, err, Jacobian

def landscape_core(x, freq, a, py,  eps):
    array = sym.Matrix if  py == sym else py.array
    sin, cos, pi = py.sin, py.cos, py.pi
    
    def layer1(xs, eps):
        x1, x2 = xs
        
        y1,  y2  = x1 + 0, x2 + 0     #  y1, y2 = x1.copy(), x2.copy()        
        dy1, dy2 = 0, 0
        
        for i in range(len(freq)):
            theta1 = freq[i]*x1 #+ 2*pi*eps*np.random.randn(1)[0]   
            theta2 = freq[i]*x2 #+ 2*pi*eps*np.random.randn(1)[0]
            
            y1  += a[i]        * sin(theta2) ;      y2  += a[i]         *  cos(theta1) 
            dy1 += a[i]*freq[i]* cos(theta2) ;      dy2 += a[i]*freq[i] * -sin(theta1) 
            
        ones = np.ones(dy1.shape)
        return array([y1, y2]), array([[ones, dy1], [dy2, ones]])
    
#     #### 3 layer architecture 
#     def layer1(xs, eps):
#         x1, x2 = xs
        
#         y1,  y2  = x1 + 0, x2 + 0     #  y1, y2 = x1.copy(), x2.copy()        
#         dy1, dy2 = 1, 1
        
#         for i in range(len(freq)):
#             theta1 = freq[i]*x1 + 2*pi*eps * np.random.randn(1)[0]   
#             theta2 = freq[i]*x2 + 2*pi*eps * np.random.randn(1)[0]
            
#             y1  += a[i]        * sin(theta2) ;      y2  += a[i]         *  cos(theta1) 
#             dy1 += a[i]*freq[i]* cos(theta2) ;      dy2 += a[i]*freq[i] * -sin(theta1) 
            
#         zeros = np.zeros(dy1.shape)
#         return array([y1, y2]), array([[dy1, zeros], [zeros,dy2]])

    def layer2(ys,  eps):
        y1,y2 = ys
        
        c1,  s1,  c2,  s2  = 0, 0, 0, 0 
        dc1, ds1, dc2, ds2 = 0, 0, 0, 0
        
        for i in range(len(freq)):
            
            theta1 = freq[i]*y1 + 2*pi*eps * np.random.randn(1)[0]   
            theta2 = freq[i]*y2 + 2*pi*eps * np.random.randn(1)[0]
            
            s01 = sin(theta1);                 c01 = cos(theta1)
            s02 = sin(theta2);                 c02 = cos(theta2)
            
            s1 += a[i] * s01 ;                 c1 += a[i] * c01 
            s2 += a[i] * s02 ;                 c2 += a[i] * c02
            
            # derivatives 
            ds1 += a[i]*freq[i] * c01 ;        dc1 += a[i]*freq[i] * -s01
            ds2 += a[i]*freq[i] * c02 ;        dc2 += a[i]*freq[i] * -s02
            
        zeros = np.zeros(ds1.shape)
        sc = array([s1, s2, c1, c2])
        sc_y = array([[ds1, zeros], [zeros, ds2], [dc1, zeros], [zeros, dc2]])
        return sc,  sc_y
    
    def layer3(ys, sc):
        y1,y2 = ys;                
        s1, s2, c1, c2 = sc
        z1    = y1 * s2 + c1 * y2;   
        z2    = s1 * y2 + y1 * c2 
        
        # derivatives 
        z1_dy  = [s2, c1];            z2_dy  = [c2, s1]; 
        z1_dsc = [ np.zeros(y2.shape), y1, y2, np.zeros(y2.shape)];     z2_dsc = [y2, np.zeros(y2.shape), np.zeros(y2.shape), y1]
        return array([z1, z2]), array([z1_dy, z2_dy]), array([z1_dsc, z2_dsc])


    ###### 3 layer architecture 
    
    y,  y_x        = layer1(x, eps = 0)
    sc, sc_y       = layer2(y, eps)
    z,  z_y, z_sc  = layer3(y, sc)
    err = z
    
#     set_trace()
    # Backprop for Jacobian    
    if len(z_y.shape) == 2:
        out_y = z_sc @ sc_y + z_y
        Jacobian = (out_y @ y_x ).T    
    elif len(z_y.shape) == 3:
        out_y = z_y + np.einsum('ijk,jlk->ilk',z_sc,sc_y)
        Jacobian = np.einsum('ijk,jlk->lik',out_y, y_x)   
    
    return err, Jacobian
