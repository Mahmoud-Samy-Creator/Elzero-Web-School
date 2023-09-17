#!/usr/bin/python3

import my_mod

print(my_mod.say_hello("Mahmoud"))
print(my_mod.say_welcome("Mahmoud"))

from my_mod import say_welcome
print (say_welcome("Mahmoud"))
