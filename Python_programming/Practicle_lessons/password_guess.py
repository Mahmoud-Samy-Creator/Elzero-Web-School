#!/usr/bin/python3

password = "Mahmoud@9800"
tries = 4

while tries > 0:
    guess = input("Guess the password: ").strip()
    if guess == password:
        print("You guessed right..")
        break
    else:
        print("You guessed wrong, try again")
        print(f"You only have {'last' if tries == 0 else tries - 1} left")
    tries -= 1
else:
    print("You have consumed all the chances")