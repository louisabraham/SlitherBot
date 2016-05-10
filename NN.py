import numpy as np, numpy.random as rnd
from itertools import islice
from collections import namedtuple


MUTATION_PARAM = 5

def sigmoid(x):
    return 1/(1+np.exp(-x))
def threshold(x):
    return x>0


class SimpleNN(namedtuple("SimpleNN", 'W, C')):
    
    def __new__(cls, *args):
        if len(args)==1:
            layers, = args
            W = [rnd.standard_normal((i,j)) for i, j in zip(layers[:-1], layers[1:])]
            C = rnd.standard_normal(len(layers)-1)
        else:
            W, C = args
        return super().__new__(cls, W, C)

    def evaluate(self, inp, binary_output=False):
        for w ,c in zip(*self):
            inp = sigmoid(np.dot(inp, w) + c)
        return threshold(inp-0.5) if binary_output else inp
    
    @staticmethod
    def aux_reproduce(a, b, MUTATION_PARAM):
        assert a.shape==b.shape
        shape = a.shape
        mean = (a+b).flatten()/2
        cov = np.diag(np.abs(a-b).flatten()*MUTATION_PARAM)
        return np.reshape(rnd.multivariate_normal(mean, cov), shape)

    def reproduce(a, b, MUTATION_PARAM=MUTATION_PARAM):
        assert len(a.W)==len(b.W)
        W = [SimpleNN.aux_reproduce(wa, wb, MUTATION_PARAM) for wa,wb in zip(a.W, b.W)]
        C = SimpleNN.aux_reproduce(a.C, b.C, MUTATION_PARAM)
        return SimpleNN(W, C)

if __name__=='__main__':

    from itertools import product
    from time import time
    
    MUT = 6

    dbt= time()

    X = np.array([ [0,0,1],[0,1,1],[1,0,1],[1,1,1] ])

    y = np.array([[0,1,1,0]])

    def fit(nn):
        return -((y-nn.evaluate(X).T)**2).sum()

    l = [SimpleNN([3,4,1]) for i in range(100)]

    for _ in range(20):

        l.sort(key=fit, reverse = True)
        pool = l[:10]
        l=[]
        for i,j in product(pool, repeat=2):
            l.append(i.reproduce(j, MUT))


    l.sort(key=fit, reverse = True)
    print(time()-dbt)
    print(MUT, fit(l[0]),l[0].evaluate(X))