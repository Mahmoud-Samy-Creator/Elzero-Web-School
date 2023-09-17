#!/usr/bin/python3


def my_all(my_iterable):
    if False in my_iterable or [] in my_iterable:
        return False
    return True

def my_any(my_iterable):
    for item in my_iterable:
        if item:
            return True
    return False

def my_min(my_iterable):
    min = 0
    for num in my_iterable:
        if type(num) not in [int, float]:
            raise TypeError("All items must be numbers")
        if num < min:
            min = num
    return min

def my_max(my_iterable):
    max = 0
    for num in my_iterable:
        if type(num) not in [int, float]:
            raise TypeError("All items must be numbers")
        if num > max:
            max = num
    return max


# my_all
print(my_all([1, 2, 3])) # True
print(my_all([1, 2, 3, []])) # False

# # my_any
print(my_any([0, 1, [], False])) # True
print(my_any([(), 0, False])) # False

# my_min
print(my_min([10, 100, -20, -100, 50])) # -100
print(my_min((10, 100, -20, -100, 50))) # -100

# my_max
print(my_max([10, 100, -20, -100, 50, 700])) # 700
print(my_max((10, 100, -20, -100, 50, 700))) # 700