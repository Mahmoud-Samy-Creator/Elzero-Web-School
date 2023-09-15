#!/usr/bin/python3

my_set = {1, 2, 3}
letters = {"A", "B", "C"}

print(my_set)
my_set.clear()
print(my_set)
my_set.update(letters)
my_set.discard("C")
print(my_set)
my_set.discard("C")