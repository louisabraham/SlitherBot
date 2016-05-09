import math

def dist(p1,p2):
    return math.hypot(p1.x-p2.x,p1.y-p2.y)
def angle(p1, p2):
    return math.atan2(p2.y-p1.y,p2.x-p1.x)

def direction(head, target, ang):
    """Returns an angle in radians, positive for right"""
    return (angle(head,target) - ang + math.pi)%(2*math.pi) - math.pi