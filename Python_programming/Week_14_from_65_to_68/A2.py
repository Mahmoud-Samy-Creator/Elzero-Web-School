#!/usr/bin/python3
#!/usr/bin/python3

import os

file_name = "textfile.txt"
num = 0
print(os.getcwd())
print(os.path.dirname(os.path.abspath(__file__)))

for i in range(0, 50):
    file = open(f"text_{num}.txt", "w")
    print(file.name)
    num += 1
    file.close()
print(num)

file = open("text1.txt", "a")
file.write("Elzero Web School => 1\n")
for i in range(0, 50):
    file.write("Appended => Elzero Web School\n")