#!/usr/bin/python3

# Application in function unpacking
def skill_print(name, *skills_without_progress, **skills_with_progress):
    print(f"Hello {name}")
    print("Here's you skills without progress:")

    for skill in skills_without_progress:
        print(f"- {skill}")

    print("Here's you skills without progress:")
    for key, value in skill_with_progress.items():
        print(f"- {key} => {value}")


skill_without_progress = ("HTML", "CSS", "JS")
skill_with_progress = {
    "C" : "100%",
    "Python": "40%",
    "C#": "0%" 
}

skill_print("Mahmoud", *skill_without_progress, **skill_with_progress)
