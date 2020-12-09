DROP TABLE IF EXISTS 

-- Dept
INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Legal");

-- Roles
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Sales", 125000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 200000, 2);