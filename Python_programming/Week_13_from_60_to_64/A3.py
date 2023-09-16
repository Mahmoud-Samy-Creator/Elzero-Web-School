#!/usr/bin/python3


def get_the_scores(name = "None", **scores_list):
    if scores_list:
        if name != "None":
            print(f"Hello {name}, This Is Your Score Table")
            for key, value in scores_list.items():
                print(f"{key} => {value}")
        else:
            for key, value in scores_list.items():
                print(f"{key} => {value}")
    else:
        if name != "None":
            print(f"Hello {name}, you have no scores")


scores_list = {
    "Math" : "90",
    "science" : "80",
    "language" : "70"
}

# Test 1
get_the_scores("Osama", **scores_list)

# Output
"Hello Osama This Is Your Score Table:"
"Math => 90"
"Science => 80"
"Language => 70"

# Test 2
get_the_scores("Osama")

# Output
"Hello Osama You Have No Scores To Show"

# Test 3
get_the_scores(**scores_list)

# Output
"Math => 90"
"Science => 80"
"Language => 70"