@echo off
color a

cd /d "C:\Users\User\Desktop\ext"

rmdir /s /q .\assets
rmdir /s /q .\.git
del /s /q .

git clone https://github.com/Track1698/Extension-for-dispatchers .


winget install --id Git.Git -e --source winget
