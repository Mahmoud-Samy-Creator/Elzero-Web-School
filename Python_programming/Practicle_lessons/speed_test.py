#!/usr/bin/python3

# -------------------------
# -- Decorators => Intro --
# -------------------------
# [1] Sometimes Called Meta Programming
# [2] Everything in Python is Object Even Functions
# [3] Decorator Take A Function and Add Some Functionality and Return It
# [4] Decorator Wrap Other Function and Enhance Their Behaviour
# [5] Decorator is Higher Order Function (Function Accept Function As Parameter)
# ----------------------------------------------------------------------

from time import time

def speed_test(func):
    def count_time(num1, num2):
        start = time()
        func(num1, num2)
        end = time()
        print(f"Time consumed: {(end - start):.2f} sec")
    return count_time

@speed_test
def counter(num1, num2):
    for num in range(num1, num2 + 1):
        print(num)

counter(1, 40000)