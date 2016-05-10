import numpy as np, numpy.random as rnd
from itertools import islice
from collections import namedtuple



MUTATION_PARAM = .1



def sigmoid(x):
    return 1/(1+np.exp(-x))
def threshold(x):
    return x>0


SimpleNN = namedtuple("SimpleNN", ['W', 'C'])

def NN_new(layers):
    W = [rnd.standard_normal((i,j)) for i, j in zip(layers[:-1], layers[1:])]
    C = rnd.standard_normal(len(layers)-1)
    return SimpleNN(W, C)

def NN_evaluate(n, inp):
    for w ,c in zip(W, C):
        inp = sigmoid(np.dot(inp, w) - c)
    return threshold(inp-0.5)

def reproduce(a, b, MUTATION_PARAM=MUTATION_PARAM):
    assert a.shape==b.shape
    shape = a.shape
    mean = (a+b).flatten()/2
    cov = numpy.diag(np.abs(a-b)*MUTATION_PARAM)
    return np.reshape(rnd.multivariate_normal(mean, cov), shape)

def NN_reproduce(a, b, MUTATION_PARAM=MUTATION_PARAM):
    assert len(a.W)==len(b.W)
    W = [reproduce(wa, wb, MUTATION_PARAM) for wa,wb in zip(a.W, b.W)]
    C = reproduce(a.C, b.C)
    return SimpleNN(W, C)