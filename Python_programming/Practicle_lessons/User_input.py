#!/usr/bin/python3

first_name = input("What's your first name: ")
middle_name = input("What's your middle name: ")
last_name = input("What's your last name: ")

first_name = first_name.strip().capitalize()
middle_name = middle_name.strip().capitalize()
last_name = last_name.strip().capitalize()

print(f"Hello {first_name} {middle_name} {last_name}, Nice to meet you")