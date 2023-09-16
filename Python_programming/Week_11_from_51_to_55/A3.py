#!/usr/bin/python3

my_ranks = {
    "Math": "A",
    "Science": "B",
    "Drawing": "A",
    "Sports": "C"
}

for key, value in my_ranks.items():
    score = ""
    if value == "A":
        score = "100"
    if value == "B":
        score = "80"
    if value == "C":
        score = "40"
    print(f"My rank in {key} is {value} & this is equal {score} points")