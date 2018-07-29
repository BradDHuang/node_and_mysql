CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    age INT,
    sex VARCHAR(255),
    title VARCHAR(255),
    start_date TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (id, name, age, sex, title) VALUES (3, "3rd One", 22, "male", "Student"), (4, "4th One", 24, "female", "SDE");




