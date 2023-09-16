#!/usr/bin/python3

op_list = ["+", "-", "/", "*", "%"]
num1 = int(input("Enter 1st number: ").strip())
num2 = int(input("Enter 2nd number: ").strip())
op = input("Enter the operator: ")

if op in op_list:
    if op == "+":
        print(f"{num1} {op} {num2} = {num1 + num2}")
    if op == "-":
        print(f"{num1} {op} {num2} = {num1 - num2}")
    if op == "*":
        print(f"{num1} {op} {num2} = {num1 * num2}")
    if op == "/":
        print(f"{num1} {op} {num2} = {num1 / num2}")
    if op == "%":
        print(f"{num1} {op} {num2} = {num1 % num2}")
else:
    print("Invalid choice, Try again")



