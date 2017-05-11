-- CREATE DATABASE tutormatch_db;

USE tutormatch_db;

CREATE TABLE tutors
(
id INTEGER (10) NOT NULL AUTO_INCREMENT,
tutor_name VARCHAR (30),
subject TEXT (100),
dates_avail DATE,
time_avail TIME,
location VARCHAR (30),
phone_number VARCHAR(15),
email VARCHAR (30),

PRIMARY KEY (id)
);

CREATE TABLE students
(
id INTEGER (10) NOT NULL AUTO_INCREMENT,
student_name VARCHAR (30),
subject TEXT (100),
location VARCHAR (30),
phone_number VARCHAR (15),
email VARCHAR (30),

PRIMARY KEY (id)
);