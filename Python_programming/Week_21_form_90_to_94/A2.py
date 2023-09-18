#!/usr/bin/python3

try:
    letter = input("Add your letter from A to Z: ")
    if len(letter) > 1 or not letter.isalpha():
        raise ValueError("You must type only one character")
except ValueError as e:
    print(e) 

else:
    print(f"You typed: {letter}")