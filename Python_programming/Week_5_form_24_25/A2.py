#!/usr/bin/python3
print("-------")
print("Task 2")
print("-------")
friends = ("Osama", "Ahmed", "Sayed")
friends = list(friends)
friends[0] = "Elzero"
friends = tuple(friends)
print(friends)
print(type(friends))
print(len(friends))