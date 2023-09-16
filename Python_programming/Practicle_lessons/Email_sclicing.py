#!/usr/bin/python3

name = input("What's your name: ")
email = input("What's you email: ")

user_name = email[:email.index("@")]
domain = email[email.index("@") + 1 :]

print(f"Your user name: {user_name}\nYour domain: {domain}")