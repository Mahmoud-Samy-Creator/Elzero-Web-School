#!/usr/bin/python3

age = int(input("What is your age?: "))

age_in_years = age
age_in_month = age_in_years * 12
age_in_weeks = age_in_month * 4
age_in_days = age_in_years * 365
age_in_min = age_in_weeks * 7 * 24
age_in_sec = age_in_min * 60

print(f"You lived {age:,} in years\n{age_in_month:,} in months\
    \n{age_in_weeks:,} in weeks\n{age_in_min:,} in min\n{age_in_sec:,} in second ")