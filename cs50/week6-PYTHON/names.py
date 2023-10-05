import sys
names =["Bidoni", "Caci", "Gesi"]
name = input("Vendosni emrin e personit qe doni te kerkoni")
if name in names:
        print("Eshte gjetur")
        sys.exit(0)

print("Nuk u gjet")
sys.exit(1)