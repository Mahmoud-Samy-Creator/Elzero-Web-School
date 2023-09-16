#!/usr/bin/python3

countries = ["Egypt", "Palestine", "Syria", "Yemen", "KSA", "USA", "Bahrain", "England"]
price = 100
discount = 30

print("#" * 50)
print(" Welcome to my course CLI Page ".center(50, "#"))
print("#" * 50)
print("\n")
print("==> Now you can get a specialized discountbased on your country")
print("-" * 65)
choose = input("Where are you from?: ").strip().capitalize()

if choose in countries:
    print(f"You have a discount..\nYour fees now: {price - discount}$")
else:
    print(f"Your Country Not Eligible For Discount And The Price Is {price}$")

