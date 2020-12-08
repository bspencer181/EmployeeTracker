DROP DATABASE IF EXISTS employees;
CREATE database employees;
USE employees;
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role_id INT,
  manager_id INT
);
INSERT INTO employee VALUES(1,beth,spencer,10,10);