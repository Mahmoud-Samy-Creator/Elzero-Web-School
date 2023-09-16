#!/usr/bin/python3

skills = {
    "HTML":"90%",
    "CSS":"80%",
    "JS":"70%",
    "Python":"50%"
}

print("Printing skills with method [1]")
print(40 * "-")
for skill in skills:
    print(f"MY progress in lang {skill} => {skills[skill]}")

print("\n")


print("Printing skills with method [2]")
print(40 * "-")
for skill_key, skill_value in skills.items():
    print(f"MY progress in lang {skill_key} => {skill_value}")