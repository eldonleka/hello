//Cloning git rep to local folder from terminal
git clone https://github.com/eldonleka/hello.git

//create a file and code it on vs
touch file.html
code .

//Actions
git add file.html
git commit -m "shtova hello.html"
git commit -am "shtova hello.html"      //all files

git config --global user.name "eldon.leka"                 //config for sync changes
git config --global user.email "eldonleka@gmail.com"      //config for sync changes

git status                              //check rep status,
git push                               //publish file to git repgit
git pull                               //download the latest version from git rep to vs
git reset  
git reset --hard <commit>
git reset --hard origin/master

git branch                          //show all branches
git checkout -b style              //create new branch
git checkout branchname           //switch to branches
git switch branchname            //switch to branches
git branch --delete branchname  //delete a branch






