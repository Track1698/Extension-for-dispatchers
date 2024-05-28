@echo off
color a
cd /d "C:\Users\User\Desktop\ext"
del /q *
for /d %%x in (*) do rmdir /s /q "%%x"
git clone https://github.com/Track1698/Extension-for-dispatchers . > nul
@pause


winget install --id Git.Git -e --source winget
