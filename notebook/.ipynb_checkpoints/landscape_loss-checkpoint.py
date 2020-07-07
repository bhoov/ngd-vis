import numpy as np
import sympy as sym

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
    
    #### 3 layer architecture 
    def layer1(xs):
        x1,x2 = xs
        y1, y2 = x1 + 0, x2 + 0     #  y1, y2 = x1.copy(), x2.copy()
        
        dy1, dy2 = [1, 0], [0, 1]
        for i in range(len(freq)):
            y1 += a[i]* sin(freq[i]*x2) ;                  y2 += a[i]* cos(freq[i]*x1) 
            
            # derivatives 
            dy1[1] += a[i]*freq[i]* cos(freq[i]*x2) ;      dy2[0] += a[i]*freq[i]* -sin(freq[i]*x1) 
        return (y1, y2), array([dy1, dy2])

    def layer2(ys,  eps):
        y1,y2 = ys
        
        c1,  s1,  c2,  s2  = 0, 0, 0, 0 
        dc1, ds1, dc2, ds2 = [0, 0], [0, 0], [0, 0], [0, 0]
        for i in range(len(freq)):
            
            theta1 = freq[i]*y1 + 2*pi*eps * np.random.randn(1)[0]   
            theta2 = freq[i]*y2 + 2*pi*eps * np.random.randn(1)[0]
            
            s1 += a[i]* sin(theta1) ;                 c1 += a[i]* cos(theta1) 
            s2 += a[i]* sin(theta2) ;                 c2 += a[i]* cos(theta2) 
            
            # derivatives 
            ds1[0] += a[i]*freq[i]* cos(theta1) ;        dc1[0] += a[i]*freq[i]* -sin(theta1) 
            ds2[1] += a[i]*freq[i]* cos(theta2) ;        dc2[1] += a[i]*freq[i]* -sin(theta2) 
        return (s1, s2, c1, c2), array([ds1, ds2, dc1, dc2])
    
    def layer3(ys, sc):
        y1,y2 = ys;                s1, s2, c1, c2 = sc
        z1    = y1 * s2 + c1 * y2;   
        z2    = s1 * y2 + y1 * c2 
        
        # derivatives 
        z1_dy  = [s2, c1];            z2_dy  = [c2, s1]; 
        z1_dsc = [ 0, y1, y2, 0];     z2_dsc = [y2, 0, 0, y1]
        return array((z1, z2)), array([z1_dy, z2_dy]), array([z1_dsc, z2_dsc])


    ###### 3 layer architecture 
    
    y,  y_x        = layer1(x)
    sc, sc_y       = layer2(y, eps)
    z,  z_y, z_sc  = layer3(y, sc)
    output = z

    if len(x.shape) == 1:
        # Backprop for Jacobian
        out_y = z_sc @ sc_y + z_y
        out_x = out_y @ y_x        
        Jacobian = out_x.T
    else:
        Jacobian = None    
    
    return output, Jacobian
