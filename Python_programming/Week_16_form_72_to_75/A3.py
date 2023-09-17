#!/usr/bin/python3

from functools import reduce

nums = [2, 4, 6, 2]

print(reduce(lambda num1, num2 : num1 * num2, nums))
# Output
# 96