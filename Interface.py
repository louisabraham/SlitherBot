from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from Data import *

ADDRESS = "http://slither.io/"
DEFAULT_QUALITY = 'low' # 'high'
DEFAULT_NAME = 'LABOt'


class IOManager():
    
    # food : rx, ry, sz
    # snake : ang,xx,yy,pts[xx,yy], 
    
    def get_left(self):
        return self.inputs['left']
    def set_left(self, v):
        self.inputs['left'] = v
        self.exe('kd_l = %i'%v)
        
    def get_right(self):
        return self.inputs['right']
    def set_right(self, v):
        self.inputs['right'] = v
        self.exe('kd_r = %i'%v)
        
    def get_acceleration(self):
        return self.inputs['acceleration']
    def set_acceleration(self, v):
        self.inputs['acceleration'] = v
        self.exe('kd_u = %i; setAcceleration(%i)'%(v,v))
    
    # JS code that returns only the utile variables of the snake, thus making the program faster because less data is exported
    export_snake = 'function(f){return[f.id,f.nk,f.ang,f.xx,f.yy,f.pts.map(function(p){return[p.xx, p.yy]})]}'
    @staticmethod
    def convert_snake(s):
        i = s[0]
        nick = s[1]
        ang = s[2]
        head = Point(s[3], s[4])
        body = list(Point(p[0], p[1]) for p in s[5])
        return Snake(i, nick, ang, head, body)
    def get_snake(self):
        return self.convert_snake(self.exe('return %s(snake)'%self.export_snake))
    def get_snakes(self):
        return [self.convert_snake(s) for s in
        self.exe('return snakes.map(%s)'%self.export_snake)]
        
    def get_foods(self):
        foods = self.exe('return foods.filter(function(x){return x}).map(function(f){return [f.id, f.rx, f.ry, f.sz]})')
        return [Food(f[0], Point(f[1], f[2]), f[3]) for f in foods]
    
    def get_alive(self):
        return bool(self.exe('return snake'))
    
    
    def __init__(self, exe):
        self.__dict__['inputs'] = {
            'left': 0,
            'right': 0,
            'acceleration': 0,
            'snake': None,
            'snakes': None,
            'foods': None,
            'alive': None
        }
        self.exe = exe
    def __getattr__(self, name):
        if name in self.inputs:
            return self.__getattribute__('get_' + name)()
        raise AttributeError
        
    def __setattr__(self, name, value):
        if name in self.inputs:
            self.__getattribute__('set_' + name)(value)
        else:
            vars(self)[name] = value

class Driver():
    
    def __init__(self, name=DEFAULT_NAME, quality=DEFAULT_QUALITY):
        
        self.driver = webdriver.Chrome()
        self.name = name
        
        self.io = IOManager(self.exe)
        
        self.load(quality)
        self.enter_name()

    def load(self, quality):
        self.driver.get(ADDRESS)
        self.set_quality(quality)
        
    def enter_name(self):
        self.driver.find_element_by_xpath('//*[@id="nick"]').send_keys(self.name)
        
    def start(self):
        self.driver.find_element_by_xpath('//*[@id="nick"]').send_keys(Keys.RETURN)
        
    def set_quality(self, quality):
        if not quality in self.driver.find_element_by_xpath('//*[@id="grqi"]').get_attribute('src'):
            self.driver.find_element_by_xpath('//*[@id="grq"]').click()
            
        assert quality in self.driver.find_element_by_xpath('//*[@id="grqi"]').get_attribute('src')
     
    def exe(self, s):
        return self.driver.execute_script(s)



