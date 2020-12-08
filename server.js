const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('console.table');


var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : 'password',
  database : 'employee_tracker'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end(); 

inquirer.prompt({
    name: "start",
    message: "What would you like to do?",
    type: "list",
    choices: ["Add Deparments","Add Roles","Add Employees","View Departments",'View Roles', 'View Emploees', 'Update Employee Roles']
}).then(function(response){
    switch (response) {
        case "Add Departments":
                addDept();
            break;  
        case "Add Roles":
                addRoles();
            break;
        case "Add Employee":
                addEmployee();
            break;
        case "View Departments":
                viewDepartments();
            break;        
        case "View Roles":
                viewRoles();
            break;       
         case "viewEmployees":
                viewEmployees();
            break;       
        case "Update Employee Roles":
                updateRole();
            break;
    }
})