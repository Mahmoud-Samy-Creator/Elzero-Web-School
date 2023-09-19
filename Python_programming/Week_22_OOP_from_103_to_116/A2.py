#!/usr/bin/python3

class User:
    # Write Class Content
    def __init__(self, first_name, last_name, age, gender):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.gender = gender

    def full_details(self):
        if self.gender == "Male":
            return f"Hello Mr {self.first_name} {self.last_name[0]}. [{(40 - self.age):02d}] Years to reach 40"
        elif self.gender == "Female":
            return f"Hello Mrs {self.first_name} {self.last_name[0]}. [{(40 - self.age):02d}] Years to reach 40"


user_one = User("Osama", "Mohamed", 38, "Male")
user_two = User("Eman", "Omar", 25, "Female")

print(user_one.full_details()) # Hello Mr Osama M. [02] Years To Reach 40
print(user_two.full_details()) # Hello Mrs Eman O. [15] Years To Reach 40
