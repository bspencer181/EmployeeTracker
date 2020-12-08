//Dependencies

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
 
//Connection
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end(); 

//Initial prompt
function initialPrompt(){
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
}

// Add Dept
function addDept (){
    inquirer.prompt([
        {
            name: "dept",
            type: "input",
            message: "What department would you like to add?"
        }
    ])
    .then(function(res){
        var query = connection.query(
            "INSERT INTO department SET ? ",
            {
                name: res.name
            },
            function(err){
                if (err) throw err
                console.table(res);
                initialPrompt();
            }
        )
    })
}

// Add Role
function addRoles(){
    connection.query("SELECT role.title AS Title, role.salary AS Salary FROM role", function(err,res){
        inquirer.prompt([
            {
                name: "Title",
                type: "input",
                message: "What is their title?"
            },

            {
                name: "Salary",
                type:"input",
                message:"What is their salary?"
            }
        ])
        .then(function(res){
            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: res.Title,
                    salary: res.Salary,
                },
                function(err){
                    if (err) throw err
                    console.table(res);
                    initialPrompt();
                }
            )
        });

    });
}

// Add employee
function addEmployee(){
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is their first name?"
        },

        {
            name: "lastName",
            type: "input",
            message:"What is their last name?"
        },

        {
            name: "role",
            type: "list",
            message: "What is their role?",
            choices: selectRole()
        },

        {
            name: "mgrName",
            type: "list",
            message: "What is their manager's name?",
            choices: selectManager()
        }
    ])
    .then(function(val){
        var roleID = selectRole().indexOf(val.role) + 1
        var managerID = selectManager().indexOf(val.choice) + 1
        connection.query("INSERT INTO employee SET ?",
        {
            first_name: val.firstName,
            last_name: val.lastName,
            manager_id: managerID,
            role_id: roleID
        },
        function(err){
            if (err) throw err
            console.table(val)
            initialPrompt()
        }
        )
    })
}