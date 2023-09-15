#!/usr/bin/python3

skills = {
    "Lang_1":{
        "name":"HTML",
        "Progress":"90%"
    },
    "Lang_2":{
        "name":"CSS",
        "Progress":"80%"
    },
    "Lang_3":{
        "name":"Python",
        "Progress":"30%"
    },
}
print(skills["Lang_1"])
print(skills["Lang_2"])
print(skills["Lang_3"])

skill_4 = {
    "Lang_4": {
        "name":"AI",
        "Progress":"20%"
    }
}

skills.update(skill_4)
print(skills["Lang_4"])

