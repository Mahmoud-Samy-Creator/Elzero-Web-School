#!/usr/bin/python3

my_friends = []
max_friends = 4

while max_friends > 0:
    friend = input("Enter your friend's name: ").strip()

    if friend.isupper():
        print("Invalid name")

    else:
        if friend[0].isupper():
            my_friends.append(friend)
            print(f"Your friend's name {friend} is added succesfully..")
        else:
            friend = friend.capitalize()
            my_friends.append(friend)
            print(f"Your friend's name {friend} is capitalized")
            print(f"Your friend's name {friend} is added succesfully..")
    max_friends -= 1
else:
    print("List is completed")