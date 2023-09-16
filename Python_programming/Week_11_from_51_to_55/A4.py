#!/usr/bin/python3

students = {
    "Ahmed": {
        "Math": "A",
        "Science": "D",
        "Draw": "B",
        "Sports": "C",
        "Thinking": "A"
    },
    "Sayed": {
        "Math": "B",
        "Science": "B",
        "Draw": "B",
        "Sports": "D",
        "Thinking": "A"
    },
    "Mahmoud": {
        "Math": "D",
        "Science": "A",
        "Draw": "A",
        "Sports": "B",
        "Thinking": "B"
    },
}

score = ""

print("#" * 30)
print(" Method [1] ".center(30, "#"))
print("#" * 30)

for main_key, main_value in students.items():
    print("-" * 27)
    print(f"-- Student name => {main_key}")
    print("-" * 27)

    for child_key, child_value in main_value.items():
        if child_value == "A":
            score = "100"
        if child_value == "B":
            score = "80"
        if child_value == "C":
            score = "40"
        if child_value == "D":
            score = "20"
        print(f"- {child_key} => {score} points")
print("\n")

print("#" * 30)
print(" Method [2] ".center(30, "#"))
print("#" * 30)

for student in students:
    print("-" * 27)
    print(f"-- Student name => {student}")
    print("-" * 27)

    for subject in students[student]:
        if students[student][subject] == "A":
            score = "100"
        if students[student][subject] == "B":
            score = "80"
        if students[student][subject] == "C":
            score = "40"
        if students[student][subject] == "D":
            score = "20"
        print(f"{subject} => {score}")