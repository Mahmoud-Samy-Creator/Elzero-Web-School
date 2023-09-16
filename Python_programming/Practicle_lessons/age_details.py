#!/usr/bin/python3

age = int(input("What is your age?: "))

age_in_years = age
age_in_month = age_in_years * 12
age_in_weeks = age_in_month * 4
age_in_days = age_in_years * 365
age_in_min = age_in_weeks * 7 * 24
age_in_sec = age_in_min * 60

print ("Choose unit to calculate according to it: ")
print("[1] Month\n[2] Weeks\n[3] Days\n[4] Minutes\n[5] Seconds")
choose = input("Your choise: ").strip()

if choose == "1":
    print(f"You are {age_in_month:,} in months")
elif choose == "2":
    print(f"You are {age_in_month:,} in weeks")
elif choose == "3":
    print(f"You are {age_in_days:,} in days")
elif choose == "4":
    print(f"You are {age_in_min:,} in min")
elif choose == "5":
    print(f"You are in {age_in_sec:,} seconds")
else:
    print("Invalid choice")
