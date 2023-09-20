#!/usr/bin/python3

class A:
	def __init__(self, one):
		self.one = one

class B:
	def __init__(self, two):
		self.two = two

class C:
	def __init__(self, three):
		self.three = three

# Write The Class Called "Text" Here
class Text(A, B, C):
    def __init__(self, one, two, three):
        super().__init__(one)
        self.two = two
        self.three = three

    def show_name(self):
        return f"The name is {self.one}{self.two}{self.three}"

the_name = Text("El", "ze", "ro")

print(the_name.show_name())

# Ouput
# The Name Is Elzero
