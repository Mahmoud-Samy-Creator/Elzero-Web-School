#!/usr/bin/python3

file = None
tries = 5

while tries > 0:
    try:
        print(f"You have {tries} tries")
        file_name = input("Enter a file name to open: ").strip()
        file = open(file_name, "r")
        break
    except FileNotFoundError:
        print("There is no file named like that")
        tries -= 1

    except:
        print("There is an error occured")
        tries -= 1

    finally:
        if file is not None:
            print(file.read())

else:
    print("There is no tires left")