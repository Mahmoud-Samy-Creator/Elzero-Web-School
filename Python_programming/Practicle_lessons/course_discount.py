#!/usr/bin/python3

discount_50 = ["USA", "Itali", "Germany"]
discount_80 = ["Egypt", "Soudia Arabia", "Kuaite"]

print("#" * 50)
print(" Welcome to my course CLI Page ".center(50, "#"))
print("#" * 50)
print("\n")
print("==> Now you can get a specialized discountbased on your country")
print("-" * 65)
print("Type your country as typed here:")
print("Choose yours:\n[1] USA\n[2] Itali\n[3] Germany")
print("[4] Egypt\n[5] Soudia Arabia\n[6] Kuaite")
print("Type your country as typed here:")

choose = input("Your choice: ").strip()

if choose in discount_50:
    print("You have a coupone of '50%' dicount")
if choose in discount_80:
    print("You have a coupone of '80%' dicount")

