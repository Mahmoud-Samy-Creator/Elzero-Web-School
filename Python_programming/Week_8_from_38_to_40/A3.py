#!/usr/bin/python3

first_name = input("What's your first name?: ")
last_name = input("What's your last name?: ")

first_name = first_name.strip().capitalize()
last_name = last_name.strip().capitalize()
print(f"Hello {first_name} {last_name[0]}")