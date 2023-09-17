#!/usr/bin/python3

skills = ("HTML", "CSS", 10, "PHP", "Python", 20, "JavaScript")

skill_counter = enumerate(skills, 50)

for counter, skill in skill_counter:
    if isinstance(skill, int):
        continue
    print(f"{counter}, {skill}")

# Output
"50 - JavaScript"
"52 - Python"
"53 - PHP"
"55 - CSS"
"56 - HTML"