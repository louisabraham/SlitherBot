from collections import namedtuple

Snake = namedtuple('Snake', 'id, nick, ang, head, body')
Point = namedtuple('Point', 'x, y')
Food = namedtuple('Food', 'id, p, size')
Inputs = namedtuple('Inputs', 'left, right, acceleration')