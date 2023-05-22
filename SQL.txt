ctrl+L     -> clear terminal
ctrl+D     -> exit sqlite3
ctrl+C     -> interrupt compiler machine.


importing (configuring once only )
sqlite3 sales.db  //krijimi db
.mode csv          
.import sales.csv sales  
.schema

re-run
sqlite3 sales.db 
SELECT * FROM sales;




sqlite3
attach "sales.db" as db1;
attach "plates.db" as db2;
.databases
SELECT * FROM sales JOIN plates ON sales.Nr = plates.Nr;


