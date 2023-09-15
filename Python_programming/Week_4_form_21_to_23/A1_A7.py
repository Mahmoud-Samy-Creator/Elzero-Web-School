#!/usr/bin/python3

friends = ["Osama", "Ahmed", "Sayed", "Ali", "Mahmoud"]

print("-------")
print("Task 1")
print("-------")
print(friends[0])
print(friends.pop(0))

print(friends[-1])
print(friends.pop(-1))

# Needed Output
# "Osama" => Method One
# "Osama" => Method Two
# "Mahmoud" => Method One
# "Mahmoud" => Method Two
print("======================================================")
print("-------")
print("Task 2")
print("-------")
friends = ["Osama", "Ahmed", "Sayed", "Ali", "Mahmoud"]
print(friends[::2])
print(friends[1::2])
# Needed Output
# "Osama", "Sayed", "Mahmoud"
# "Ahmed", "Ali"

print("======================================================")
print("-------")
print("Task 3")
print("-------")
# Task 3
friends = ["Osama", "Ahmed", "Sayed", "Ali", "Mahmoud"]
print(friends[1:4])
print(friends[-2:])
# Needed Output
# "Ahmed", "Sayed", "Ali",
# "Ali", "Mahmoud"
print("======================================================")
print("-------")
print("Task 4")
print("-------")
friends = ["Osama", "Ahmed", "Sayed", "Ali", "Mahmoud"]
friends[-1] = "ELzero"
friends[-2] = "ELzero"
print(friends)
print("======================================================")
print("-------")
print("Task 5")
print("-------")
friends = ["Osama", "Ahmed", "Sayed"]
friends.insert(0, "Nasser")
friends.append("Salem")
print(friends)
# Needed Output
# ["Nasser", "Osama", "Ahmed", "Sayed"]
# ["Nasser", "Osama", "Ahmed", "Sayed", "Salem"]

print("======================================================")
print("-------")
print("Task 6")
print("-------")
friends = ["Nasser", "Osama", "Ahmed", "Sayed", "Salem"]
print(friends)
friends[0:2]= []
friends.pop(-1)
print(friends)
# Needed Output
# ["Ahmed", "Sayed", "Salem"]
# ["Ahmed", "Sayed"]

print("======================================================")
print("-------")
print("Task 7")
print("-------")