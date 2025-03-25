# Git

## Intro

The stupid content tracker.

![github logo](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2J1cWVtM2dtYWg5ZXNkNGlqa3d4OXZmYWM5MzBuZ3ZzeGF3YjN0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif)

## Commands

### git config --global user.email "`examplename@email.com`"
Configure email (i.e. when it gives an error because it's not detecting email, etc.)
### git config --global user.name "Name LastName"
Configure user name
### git branch
Lists all branches.
### git branch branch-name
Creates a new branch with said branch-name
### git switch branch-name
Changes to another branch.
### git branch -D branch-name
Deletes branch (i.e. if we made a mistake with the name)
### git status
Shows branch status.
#### git status -u
Shows branch status with full path.
### git log
Lists all commits. ("q" to quit view)
### git clone repository-url
Clones a repository from the Internet (GitHub).
### git add file-path
Adds a file to commit.
### git commit -m message
Commits changes to the branch.
### git restore file-path
Restores file in branch.
### git push
Pushes folder to github account
### git push -u origin folder-name
Pushes folder when it's a new folder
### git diff
Shows what is different in file since last commit
### git restore file-folder-path
Restores file to its last previous commit
### git mv old-folder-name new-folder-name
Changes folder's name
### git reset --hard commit-code-we-want-to-reset-to
Resets branch to a certain commit
