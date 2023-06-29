touch flights.sql
sqlite3 flights.sql

CREATE TABLE flights (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    origin TEXT NOT NULL,
    destination TEXT NOT NULL,
    duration INTEGER NOT NULL,
);

.tables             // show all tables


UPDATE flights
    SET duration = 430
    WHERE origin = "New York"
    AND destination = "London";



INSERT INTO flights (origin, destination, duration) VALUES ("New York", "London", 415);

SELECT * FROM flights WHERE origin = "New York";
SELECT * FROM flights WHERE duration > 500;
SELECT * FROM flights WHERE duration > 500 OR destination = "Paris";
SELECT * FROM flights WHERE origin IN ("New York", "Lima");
SELECT * FROM flights WHERE origin LIKE "%a%";   //filter those which contain letter " a "


.mode columns     //edit apparence
.headers yes     //edit apparence




