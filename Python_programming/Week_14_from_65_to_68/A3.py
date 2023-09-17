#!/usr/bin/python3
#!/usr/bin/python3
#!/usr/bin/python3

import os

file_name = "textfile.txt"
num = 0
lines_num = 0
word_num = 0
char_num = 0
letter_l_count = 0

print(os.getcwd())
print(os.path.dirname(os.path.abspath(__file__)))

for i in range(1, 51):
    file = open(f"text_{num}.txt", "w")
    print(file.name)
    num += 1
    file.close()
print(f"Number of files: {num}")

file = open("text1.txt", "w")
file.write("Elzero Web School => 1\n")
for i in range(0, 50):
    file.write("Appended => Elzero Web School\n")
file.close()

file = open("text1.txt", "r")
for line in file:
    lines_num += 1
    words = line.split()
    word_num += len(words)
    for word in words:
        if 'l' in word:
            letter_l_count += 1
        char_num += len(word)

print(f"Number of lines: {lines_num}")
print(f"Number of words: {word_num}")
print(f"Number of chars: {char_num}")
print(f"Number of letter l: {letter_l_count}")
