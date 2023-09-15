#!/usr/bin/python3

nums = {1, 2, 3}
letters = {"A", "B", "C"}

# method 1
print(nums | letters)
print(nums.union(letters))
nums.update(letters)
print(nums)
