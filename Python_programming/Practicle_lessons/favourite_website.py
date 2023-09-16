#!/usr/bin/python3

fav_websites = []

max_websites = 6

while max_websites > 0:
    print(f"You have {max_websites} empty places in the stack")
    new_website = input(("Type your new favourite website without https://: ")).strip().lower()
    fav_websites.append(f"https://{new_website}")
    max_websites -= 1

else:
    print("List completed")
    fav_websites.sort()
    print("Your fav list:")
    print(fav_websites)