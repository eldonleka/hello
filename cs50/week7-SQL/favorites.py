import csv

with open("favourites.csv", "r") as file:
    reader = csv.DictReader(file)
    scratch, c, python = 0, 0, 0
    for row in reader:
        favourite = row("language")
        if favourite == "Scratch":
            scratch += 1
        elif favourite == "c":
            c += 1
        elif favourite == "python":
            python += 1

