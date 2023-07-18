CREATE TABLE Category (id INT PRIMARY KEY, name VARCHAR(50));
CREATE TABLE Product (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    id_cat INT,
    description VARCHAR(255),
    price FLOAT(10),
    inventory INT,
    image VARCHAR(255),
    FOREIGN KEY (id_cat) REFERENCES Category(id)
);

CREATE TABLE Reservation (
    id INT PRIMARY KEY,
    last_name VARCHAR(50),
    first_name VARCHAR(50),
    tel VARCHAR(20),
    code_used INT,
    price FLOAT(10),
    price_total FLOAT(10),
    validation BOOLEAN,
    FOREIGN KEY (code_used) REFERENCES Promotion(id)
);

CREATE TABLE Promotion (
    id INT PRIMARY KEY,
    code VARCHAR(8),
    reduction INT CHECK (
        reduction >= 1
        AND reduction <= 100
    )
);