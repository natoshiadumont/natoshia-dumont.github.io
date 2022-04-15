# natoshia-dumont.github.io

## How to push files to github
1) in terminal => git add -A
2) in terminal => git commit -m "description of commit in quotes"
3) in terminal => git push

## How to install projects using OpSpark tool (only need to run for os install, os submit, or os test)
1) in terminal => code ~/.bashrc
2) in .bashrc file on line 4 => export CHE_PROJECTS_ROOT=/workspace
3) Exit out of .bashrc file
4) Exit out of terminal 
5) Reopen terminal
6) in terminal => sudo apt-get install subversion
7) in terminal => npm install -g opspark
8) in terminal =>   **os install => to install a new file/project into the workspace
                    **os test => to test your code using the opspark tool (Command + C to exit testing)
                    **os submit => submit your code to greenlight (check your progress on greenlight)