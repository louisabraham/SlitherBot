import math

from AI import BaseAI
from Interface import Driver
from Geometry import *
from Data import *

# Snake = namedtuple('Snake',['id', 'nick', 'ang', 'head', 'body'])
# Point = namedtuple('Point',['x','y'])
# Food = namedtuple('Food', ['id', 'p', 'size'])
# Inputs = namedtuple('Inputs', ['left', 'right', 'acceleration'])


d = Driver()



*hist, = range(20)
target = None
def test(snake: Snake, snakes: [Snake], foods: [Food]) -> Inputs:
    
    global target, hist
    head = snake.head
    ang = snake.ang
    choice = lambda c: (lambda f: f.size * math.exp(-(dist(head, f.p)/100)) * math.exp(-abs(direction(head, f.p, ang)**3)))(c[1])
    if hist[0]!=(0,0,0) and all(e==hist[0] for e in hist):
        print("Cycle break !")
        *hist, = range(20)
        i,target = max(((i,f) for i,f in enumerate(foods) if f.id != target.id),
        key = choice)
        try:
            d.exe('foods[%i].rad=10'%i)
        except Exception:
            pass
        print("New target")
    elif not target or not target.id in [f.id for f in foods if f]:
        i, target = max(enumerate(foods),
        key = choice)
        try:
            d.exe('foods[%i].rad=10'%i)
        except Exception:
            pass
        print("New target")
    direc = direction(head, target.p, ang)
    if direc < - .55:        
        r =  (1,0,0)
    elif direc > .55:
        r = (0,1,0)
    else:
        r = (0,0,0)
    hist = hist[1:]+[r]
    return r
    
    


while True:
    ai = BaseAI(d.io, test)
    d.start()
    ai.start()
    ai.join()
