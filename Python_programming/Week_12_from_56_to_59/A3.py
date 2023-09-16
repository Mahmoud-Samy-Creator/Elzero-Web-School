#!/usr/bin/python3

def show_skills(name, *skills):
    print(f"Hello {name}")

    if skills:
        for skill in skills:
            print(f"- {skill}")
    else:
        print("No skills till now")

# Input
show_skills("Osama", "HTML", "CSS", "JS", "Python")
show_skills("Mahmoud")
# Output
"Hello Osama Your Skills Is"
"- HTML"
"- CSS"
"- JS"
"- Python"