#!/usr/bin/python3

friends = ["Mohamed", "Shady", "ahmed", "eman", "Sherif"]
un_capitalized = 0
for friend in friends:
    if friend[0].isupper():
        print(friend)
    else:
        un_capitalized += 1

print(f"{un_capitalized} friends ignored")
