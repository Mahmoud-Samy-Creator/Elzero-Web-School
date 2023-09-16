#!/usr/bin/python3
my_num = [15, 81, 5, 17, 20, 21, 13]
success_list = []
order = 1

for num in my_num:
    if num % 5 == 0:
        success_list.append(num)

success_list.sort(reverse=True)

for num in success_list:
    print(f'"{order} => {num}"')
    order += 1
print('"All numbers are printed"')