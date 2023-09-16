#!/usr/bin/python3

def addition(*numbers):
    sum = 0

    for number in numbers:
        if number == 10:
            continue
        elif number == 5:
            sum -= number
        else:
            sum += number

    return (sum)



# Tests
print(addition(10, 20, 30, 10, 15)) # 65
print(addition(10, 20, 30, 10, 15, 5, 100)) # 160