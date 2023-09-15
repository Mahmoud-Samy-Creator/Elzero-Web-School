#!/usr/bin/python3

email = input("What's your email?: ")
email = email.strip().lower()

name = email[:email.index("@")]
email_service = email[email.index("@") + 1:email.index(".")]
top_level_domain = email[email.index(".") + 1:]
print(f"Your name is {name}")
print(f"Email service is {email_service}")
print(f"Your top level domain is {top_level_domain}")

