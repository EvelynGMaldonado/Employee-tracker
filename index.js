const inquirer = require("inquirer");
const asciiartLogo = require("asciiart-logo");
require("console.table");
const dataBase = require("./db");

// WHEN I start the application
const init = async () => {
    const logo = asciiartLogo({name: "Employee Tracker"}).render();
    console.log(logo);
    options();
}

// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const options = async () =>{
    console.log("starting function");
//i use curly brackets to descontruct an attrubute from an object
    const { option } =  await inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'option',
            choices: ["VIEW_DEPARTAMENTS", "VIEW_ROLES", "VIEW_EPLOYEES", "ADD_DEPARTMENT", "ADD_ROLE", "ADD_EMPLOYEE", "UPDATE_EMPLOYEE_ROLE", "QUIT"],
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        
        }
    ])
    
    callActions( option );
}
//CAlls other functions based on user response
const callActions = ( option ) => {
    switch(option){
        case "VIEW_DEPARTAMENTS":
            viewDepartament();
            break;
        case "VIEW_ROLES":
            viewRoles();
            break;
        case "VIEW_EMPLOYEES":
            viewEmployees();
            break;
        case "ADD_DEPARTMENT":
            addDepartament();
            break;
        case "ADD_ROLE":
            addRole();
            break;
        case "ADD_EMPLOYEE":
            addEmployee();
            break;    
        case "UPDATE_EMPLOYEE_ROLE":
            UpdateEmployeeole();
            break;
        case "QUIT":
            quit();
            break;                                    
}
}

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// WHEN I choose to view all roles;;;;
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

init();