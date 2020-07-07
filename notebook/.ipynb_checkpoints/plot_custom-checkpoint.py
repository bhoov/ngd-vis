import numpy as np
import matplotlib.pyplot as plt
from matplotlib import cm, animation, rc


def plot_all (fnc, l_alls, w_alls, w_range, legend, plot_type = 'contour'):
    x_grid, y_grid = get_plot_grid(w_range, n_grid = 101)
#     plt.figure(); 
    fig0, axes = plt.subplots(nrows=1, ncols=2, figsize=(14,6)) #, sharey=False, sharex=True)
    plt.subplot(axes[0])
    plot_losses(l_alls, legend);                         
    plt.legend(legend)
    plt.subplot(axes[1]);
    plot_3d(axes[1], fnc, x_grid, y_grid, w_alls, plot_type);     #plt.legend(legend)
    plt.show()


def get_plot_grid(w_range, n_grid = 101):
    w_mins, w_maxs = w_range
    w_min, w_max = np.stack(w_mins,axis=1).min(axis=1), np.stack(w_maxs,axis=1).max(axis=1)
    cent = (w_max + w_min) / 2 
    dif = (w_max - w_min).max() / 2 *1.5
    
    x_grid = np.linspace(cent[0]-dif,cent[0]+dif, n_grid)
    y_grid = np.linspace(cent[1]-dif,cent[1]+dif, n_grid)
    return x_grid, y_grid

def plot_losses(l_alls, legend):
    for l in l_alls:
        plt.semilogy(l); 
        

def plot_3d(ax, fnc,  x0, y0 = None,  w_all = None, plot_type = None, zlim = None,):
    if y0 is None:
        y0 = x0
        
    x, y = np.meshgrid(x0, y0); nx = len(x0); ny = len(y0)
    xy = np.concatenate((x.reshape([1,nx*ny]),y.reshape([1,nx*ny])),axis=0)

    outputs = fnc(xy)
    z = outputs[0].reshape([ny,nx])
    z_ = np.log(1+z)
#     z_ = np.sqrt(np.log(1+z))
    
    
    if plot_type is None or plot_type == 'contour':
        h = plt.contour(x,y,z_, 50, cmap=cm.hot)
    if plot_type == 'imshow':
        h_= plt.imshow( z_, cmap=cm.hot, interpolation='bicubic', extent=[x0[0], x0[-1], y0[0], y0[-1]], origin='lower')
        h = plt.contour(x,y,z_, 40, cmap=cm.cool, alpha=0.2) #, colors='black'
#         plt.clabel(h, inline=True, fontsize=8)

    elif plot_type == 'surface':
#         ax = plt.axes(projection='3d')
        h = ax.plot_surface(x,y,np.sqrt(np.log(1+z)), rstride=5, cstride=5, cmap=cm.hot,  linewidth=0, antialiased=False)
    
#     ax.set_xlabel('x');ax.set_ylabel('y'); ax.set_zlabel('loss');

#     fig.colorbar(h, shrink=0.5, aspect=5)      # Add a colorbar
    
    if w_all is not None:
        plot_trajectory(ax, w_all)
#         animate_trajectory(fig, ax, w_all)   ## Doesn't work!  I'd like to see animation!!!
    
#     plt.show()    

def plot_trajectory(ax, w_alls):
    for w_all in w_alls:
        ax.plot(w_all[0,:], w_all[1,:]); ax.plot(w_all[0,-1], w_all[1,-1],'k.') 
    
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