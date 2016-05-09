CLOCK_CYCLE = 0.1
DEBUG_COMPUTATION_TIME = 50

import threading, time

class BaseAI(threading.Thread):
    def __init__(self, io, ai=None):
        self.io = io
        if ai!= None:
            self.ai = ai
        super().__init__()
        
    def start(self):
        self.active = True
        while not self.io.alive:
            time.sleep(CLOCK_CYCLE)
        super().start()
    
    def stop(self):
        self.active = False
        
    def run(self):
        t = time.time()
        n=0
        while self.active and self.io.alive:
            n+=1
            if DEBUG_COMPUTATION_TIME and n%DEBUG_COMPUTATION_TIME==0:
                print('Computation time : %.3f'%(time.time()-t))
            time.sleep(max(0, t + CLOCK_CYCLE - time.time()))
            t = time.time()
            try:
                self.io.left, self.io.right, self.io.acceleration = self.ai(self.io.snake, self.io.snakes, self.io.foods)
            except ValueError as e:
                #add the selenium exception
                print(e)
                time.sleep(0.2)
                break
        if not self.io.alive:
            print('DEAD !')