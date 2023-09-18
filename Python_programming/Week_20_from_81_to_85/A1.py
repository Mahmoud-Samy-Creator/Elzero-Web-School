#!/usr/bin/python3

def reverse_string(my_string):
    my_string = my_string[-1: -len(my_string) -1 : -1]
    for i in my_string:
        yield i


# Reverse The String
for c in reverse_string("Elzero"):
    print(c)
