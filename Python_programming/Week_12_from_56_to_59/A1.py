#!/usr/bin/python3

def calculate (num_1, num_2, op = "add"):
    op = op.lower().strip()
    op_list = ['multiply', 'subtract', 'add', 'a', 's', 'm']
    if op in op_list:
        if op == "add" or op == "a":
            return num_1 + num_2
        if op == "subtract" or op == "s":
            return num_1 - num_2
        if op == "multiply" or op == "m":
            return num_1 * num_2
    else:
        print("Invalid operator")
        return None


# Tests
print(calculate(10, 20)) # 30
print(calculate(10, 20, "AdD")) # 30
print(calculate(10, 20, "a")) # 30
print(calculate(10, 20, "A")) # 30

print(calculate(10, 20, "S")) # -10
print(calculate(10, 20, "subTRACT")) # -10

print(calculate(10, 20, "Multiply")) # 200
print(calculate(10, 20, "m")) # 200