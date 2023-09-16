#!/usr/bin/python3

age = int(input("What is your age?: ").strip())

if age > 10 and age < 100:
    age_in_years = age
    age_in_month = age_in_years * 12
    age_in_weeks = age_in_month * 4
    age_in_days = age_in_years * 365
    age_in_min = age_in_weeks * 7 * 24
    age_in_sec = age_in_min * 60


    print(f"You are {age_in_month:,} in months")
    print(f"You are {age_in_month:,} in weeks")
    print(f"You are {age_in_days:,} in days")
    print(f"You are {age_in_min:,} in min")
    print(f"You are in {age_in_sec:,} seconds")
else:
    print("Age is out of range")
    exit