#!/usr/bin/python3

def remove_chars(my_string):
    my_string = my_string.strip()
    return my_string[1:len(my_string) - 1]

friends_map = ["AEmanS", "AAhmedS", "DSamehF", "LOsamaL"]

cleaned_names = map(remove_chars, friends_map)

for name in cleaned_names:
    print(name)

# Output
"Eman"
"Ahmed"
"Sameh"
"Osama"