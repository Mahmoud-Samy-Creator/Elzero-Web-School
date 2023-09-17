#!/usr/bin/python3

def get_names(my_string):
    if my_string.endswith("m"):
        return True

friends_filter = ["Osama", "Wessam", "Amal", "Essam", "Gamal", "Othman"]

for name in filter(get_names, friends_filter):
    print(name)

# Output
"Wessam"
"Essam"
