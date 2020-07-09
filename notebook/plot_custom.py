import numpy as np
from fastai.vision import plt
from matplotlib import cm, animation, rc
from update_2d import update_w, update_w_all

from pdb import set_trace

def plot_all (fnc, l_alls, w_alls, w_range, legend, q = None, damping = None): #, plot_type=None):
#     plt.figure(); 
    fig0, axes = plt.subplots(nrows=1, ncols=2, figsize=(14,6)) #, sharey=False, sharex=True)
    plt.subplot(axes[0])
    plot_loss_profile(l_alls, legend);                         
    plt.legend(legend)
    plt.subplot(axes[1]);
    x_grid, y_grid = get_plot_grid(w_range, n_grid = 101)
    plot_background(axes[1], fnc, x_grid, y_grid);     #plt.legend(legend)
    
    if w_alls is not None:
        plot_trajectory(axes[1], w_alls)
#         animate_trajectory(fig, ax, w_all)   ## Doesn't work!  I'd like to see animation!!!
    
    if q is not None:
        x_grid, y_grid = get_plot_grid(w_range, n_grid = 21)
        plot_quiver(axes[1], fnc, x_grid, y_grid, q, damping)
        
    plt.show()


def get_plot_grid(w_range, n_grid = 101):
    w_mins, w_maxs = w_range
    w_min, w_max = np.stack(w_mins,axis=1).min(axis=1), np.stack(w_maxs,axis=1).max(axis=1)
    cent = (w_max + w_min) / 2 
    dif = (w_max - w_min).max() / 2 *1.5
    
    x_grid = np.linspace(cent[0]-dif,cent[0]+dif, n_grid)
    y_grid = np.linspace(cent[1]-dif,cent[1]+dif, n_grid)
    return x_grid, y_grid

def plot_loss_profile(l_alls, legend):
    for l in l_alls:
        plt.semilogy(l); 
        

def plot_background(ax, fnc,  x0, y0 = None, plot_type = 'imshow', zlim = None,):
    if y0 is None:
        y0 = x0
        
    x, y = np.meshgrid(x0, y0); nx = len(x0); ny = len(y0)
    xy = np.concatenate((x.reshape([1,nx*ny]),y.reshape([1,nx*ny])),axis=0)

    loss, err, jac = fnc(xy)
        
    z = loss.reshape([ny,nx])
    z_ = np.log(1+z) 
#     z_ = z
    
    if plot_type == 'imshow':
        h_= plt.imshow( z_, cmap=cm.hot, interpolation='bicubic', extent=[x0[0], x0[-1], y0[0], y0[-1]], origin='lower')
        h = plt.contour(x,y,z_, 40, cmap=cm.cool, alpha=0.2) #, colors='black'
    
    elif plot_type == 'contour':
        h = plt.contour(x,y,z_, 50, cmap=cm.hot)
        
#     elif plot_type == 'surface_3d':
#         ax = plt.axes(projection='3d')
#         h = ax.plot_surface(x,y,np.sqrt(np.log(1+z)), rstride=5, cstride=5, cmap=cm.hot,  linewidth=0, antialiased=False)

#     plt.clabel(h, inline=True, fontsize=8)
#     fig.colorbar(h, shrink=0.5, aspect=5)      # Add a colorbar
        


def plot_quiver(ax, fnc,  x0, y0, q, damping):
    if y0 is None:
        y0 = x0
        
    x, y = np.meshgrid(x0, y0); nx = len(x0); ny = len(y0)
    xy = np.concatenate((x.reshape([1,nx*ny]),y.reshape([1,nx*ny])),axis=0)

    loss, err, jac = fnc(xy)
    if True: #q is not None:
        
        dv = update_w_all(err, jac, q=q, damping = damping)   # for SGD:     dv = np.einsum('ijk,jk->ik', jac,err)
        dv = dv / np.sqrt((err ** 2).sum(axis=0))   # normalized update
    plt.quiver(x,y,-dv[0,:],-dv[1,:])
    
    


def plot_trajectory(ax, w_alls):
    for w_all in w_alls:
        ax.plot(w_all[0,:], w_all[1,:],'-'); ax.plot(w_all[0,-1], w_all[1,-1],'k.') 
    
### DOESNT work yet!!!
def animate_trajectory(fig, ax, w_alls):
    lines = []
    T = w_alls[0].shape[1]
    for _ in range(len(w_alls)):
        line, = ax.plot([], [], lw=2)
        lines.append(line)

    def init():
        for line in lines:
            line.set_data([], [])
        return (lines,)

    def animate(i):
        for line, w_all in zip(lines,w_alls):
            line.set_data(w_all[0,:i+1], w_all[1,:i+1])
        return (lines,)

    anim = animation.FuncAnimation(fig, animate, init_func=init,
                                   frames=T, interval=20, 
                                   blit=True)