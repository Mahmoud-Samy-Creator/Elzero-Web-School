#!/usr/bin/python3

my_list = [1, 5, 4, 3, 3, 2, 1]

unique_list = set(my_list)
unique_list = list(unique_list)
print(unique_list)
print(type(unique_list))
unique_list.pop()
print(unique_list)