#!/usr/bin/python3

import datetime

my_day = datetime.datetime(2021, 8, 10)

print(my_day)
print(my_day.strftime("%b"), my_day.day, my_day.year)
print(f"{my_day.day}", '-', my_day.strftime("%b"), '-', my_day.year)
print(f"{my_day.day}", '/', my_day.strftime("%b"), '/', my_day.strftime("%y"))
print(f"{my_day.day}", '/', my_day.strftime("%b"), '/', my_day.year)
print(my_day.strftime("%a"), ',', my_day.day,  my_day.strftime("%b"), my_day.year)

"Tue, 10 August 2021"
