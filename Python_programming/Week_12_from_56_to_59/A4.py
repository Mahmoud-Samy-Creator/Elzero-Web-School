#!/usr/bin/python3

def say_hello(name = "UNKNOWN", age = "UNKNOWN", country = "UNKNOWN"):
    print(f"Hello {name}, your age is {age}, you live in {country}")



# Input
print(say_hello("Osama", 38, "Egypt"))

# Output
"Hello Osama Your Age Is 38 And You Live In Egypt"

# Input
print(say_hello())

# Output
"Hello Unknown Your Age Is Unknown And You Live In Unknown"