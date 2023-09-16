#!/usr/bin/python3

people = {
    "Mahmoud":{
        "HTML":"90%",
        "CSS":"80%",
        "JS":"70%",
        "Python":"50%"
    },
    "Adham":{
        "HTML":"100%",
        "CSS":"90%",
        "JS":"80%",
        "Python":"100%"
    },
    "Samy":{
        "HTML":"100%",
        "CSS":"100%",
        "JS":"50%",
        "Python":"20%"
    },
    "Omar":{
        "HTML":"90%",
        "CSS":"70%",
        "JS":"60%",
        "Python":"100%"
    }
}

print("Printing skills with method [1]")
print(40 * "-")

for name in people:
    print(f"{name}'s skills & progress:")
    for skill in people[name]:
        print(f"{skill} => {people[name][skill]}")

    print('-' * 50)

print("\n")

print("Printing skills with method [2]")
print(40 * "-")

for main_key, main_value in people.items():
    print(f"{main_key}:")
    for key, value in main_value.items():
        print(f"- {key} => {value}")
    print("\n")