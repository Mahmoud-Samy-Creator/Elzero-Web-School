#!/usr/bin/python3

values = (0, 1, 2) # Tuple of values

if any(values):  # If any of values if false
    my_var = 0

# All values are true, so my_val = 0, 0 = False


my_list = [True, 1, 1, ["A", "B"], 10.5, my_var]

if all(my_list[:4]) or all(my_list[:6]) or all (my_list[:]):
    print("Good")

else:
    print("Bad")


# Output => Good

# all(my_list[:4]) == [True, 1, 1, ["A", "B"]] == True


