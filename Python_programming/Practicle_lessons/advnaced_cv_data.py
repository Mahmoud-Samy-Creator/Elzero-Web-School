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

# print(people["Mahmoud"]["HTML"])

for name in people:
    print(f"{name}'s skills & progress:")
    for skill in people[name]:
        print(f"{skill} => {people[name][skill]}")

    print('-' * 50)