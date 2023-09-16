#!/usr/bin/python3

for num in range(1, 21):
    if num == 12 or num == 8 or num == 6:
        continue
    print(str(num).zfill(2))

print("All numbers are printed")