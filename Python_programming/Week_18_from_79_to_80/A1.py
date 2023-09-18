#!/usr/bin/python3

import datetime
some_date = datetime.datetime(2021, 6, 25)
print(some_date)

today = datetime.datetime(2021, 8, 10)
# today = datetime.datetime.now()
# print(today)

diff = today - some_date
print(diff.days)