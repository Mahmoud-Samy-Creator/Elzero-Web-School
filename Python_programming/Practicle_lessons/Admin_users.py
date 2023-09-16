#!/usr/bin/python3

admin_list = ["Mahmoud", "Adham", "Samy", "Omar", "Asmaa"]

print("#" * 40)
print(" Welcome to admin program ".center(40, "#"))
print("#" * 40)
print("\n")
name = input("Enter your name: ").strip().capitalize()

if name in admin_list:
    print("You are an admin...")
    choose = input("Choose an action to do:\n[1] Delete\n[2] Update\nChoose by numbers: ")

    if choose == "1":
        admin_list.remove(name)
        print("Successfully removed")
        print(admin_list)
    elif choose == "2":
        new_name = input("=> Enter your name: ")
        admin_list[admin_list.index(name)] = new_name
        print("Successfully updated")
        print(admin_list)
    else:
        print("Invalid choise")

else:
    print("You are not an admin")
    choose = input("Would you like to be added?\n[1] Yes\n[2] No\nChoose by numbers: ")
    if choose == "1":
        admin_list.append(name)
        print("Successfully added")
        print(admin_list)