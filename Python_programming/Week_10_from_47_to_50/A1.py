#!/usr/bin/python3

number = int(input("Enter a number greater than 0: ").strip())

while number <= 0:
    print("The number is invalid")
    number = int(input("Enter a number greater than 0: ").strip())

else:
    while number > 0:
        print(f"{number}")
        number -= 1
