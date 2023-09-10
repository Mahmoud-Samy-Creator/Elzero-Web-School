#!/bin/bash

# Check if a filename is provided as an argument
if [ $# -ne 1 ]; then
    echo "Usage: $0 <file_name>"
    exit 1
fi

# Define your Git repository URL and branch
REPO_URL="https://github.com/yourusername/yourrepository.git"
BRANCH="main"  # Change to your desired branch name

# Get the filename from the command-line argument
FILE_NAME="$1"

# Check if the file exists
if [ ! -f "$FILE_NAME" ]; then
    echo "File not found: $FILE_NAME"
    exit 1
fi

# Add the file to the Git staging area
git add "$FILE_NAME"

# Commit the changes with a message
git commit -m "Add $FILE_NAME"

# Push the changes to the remote repository
git push origin "$BRANCH"
