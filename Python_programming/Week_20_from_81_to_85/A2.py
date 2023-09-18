#!/usr/bin/python3

# Create Your Decorator Here

def Decoretor(function):
    def nested_function():
        print("Suger added from decorator")
        function()
        print("#" * 20)
    return nested_function

@Decoretor
def make_tea():
    print("Tea Created")

@Decoretor
def make_coffe():
    print("Coffe Created")

make_tea()
make_coffe()

# Needed Output

"Sugar Added From Decorators"
"Tea Created"
"####################"
"Sugar Added From Decorators"
"Coffe Created"
"####################"