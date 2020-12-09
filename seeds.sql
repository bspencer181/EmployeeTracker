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
VALUE ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 200000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Engineer", 95000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Finance", 150000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Fiance", 80000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Legal", 175000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal", 125000, 4);

--Employees
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John", "Doe", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jane", "Doe", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Mike", "Chan", 1, 3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jeff", "Conrad", 2, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Emily", "Smith", 3, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Amanda", "Walker", 1, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Cody", "Thomas", null, 3);

SELECT = FROM department;
SELECT = FROM role;
SELECT = FROM employee;