#!/usr/bin/python3

NUM = input("Add your number: ")

if not NUM.isnumeric():
    raise Exception("Only numbers in allowed")

if len(NUM) > 1:
    raise IndexError ("Only one character Allowed")

if NUM == "0":
    raise ValueError("Number must be greater than 0")
print(f"The number is {NUM}")
