const db = require("./db");
const inquirer = require("inquirer");
const asciiartLogo = require("asciiart-logo");
const { quit } = require("./db");
require("console.table");


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
            choices: ["VIEW_DEPARTAMENTS", "VIEW_ROLES", "VIEW_EMPLOYEES", "ADD_DEPARTMENT", "ADD_ROLE", "ADD_EMPLOYEE", "UPDATE_EMPLOYEE_ROLE", "QUIT"],
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
            updateEmployeeRole();
            break;
        case "QUIT":
            db.quit();
            break;                                    
    }
}

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
const viewDepartament = async () => {
    //to deconstruct an array and in this case I am taking the array 0
    const [ departaments ] = await db.viewDepartament();
    
    console.table(departaments);
    options();
};
// WHEN I choose to view all roles;;;;
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
const viewRoles = async () => {
    const [ roles ] = await db.viewRoles()
    console.table(roles);
    options();
};
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
const viewEmployees = async () => {
    const [ employees ] = await db.viewEmployees()
    console.table(employees);
    options();
};
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
const addDepartament = async () =>{
    const { departament_name } =  await inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the department name',
            name: 'departament_name',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        }
    ])

    await db.addDepartment(departament_name)
    
    viewDepartament();

}

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
const addRole =  async () => {
    const [ departaments ] = await db.viewDepartament()

    const {title, salary, department_id} = await inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the role name',
            name: 'title',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'input',
            message: 'Enter the salary',
            name: 'salary',
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'list',
            message: 'Enter the department for this role',
            name: 'department_id',
            choices: departaments.map(({id, department_name}) =>{
                return {
                    name: department_name,
                    value: id
                }
            }),
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        }
    ])
    await db.addRole(title, salary, department_id);
    viewRoles();
}



// WHEN I choose to add an employee
// THEN I am prompted to enter the employee???s first name, last name, role, and manager, and that employee is added to the database

const addEmployee = async() => {
    const [ roles ] = await db.viewRoles();
    const [employees] = await db.viewEmployees();
    // console.log(roles);
    // console.log(employees);
    const {first_name, last_name, role_id, manager_id} = await inquirer.prompt([
    {
        type: 'input',
        message: 'Enter the first name of the employee',
        name: 'first_name',
        validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
    },
    {
        type: 'input',
        message: 'Enter the last name of the employee',
        name: 'last_name',
        validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
    },
    {
        type: 'list',
        message: 'Enter the role',
        name: 'role_id',
        choices: roles.map(({Title, id}) =>{
            return {
                name:Title,
                value: id
            }
        }),
        validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
    },
    {
        type: 'list',
        message: 'Enter manager name',
        name: 'manager_id',
        choices: employees.map(({Employee_Name, id})=>{

            return {
                name: Employee_Name,
                value: id
            }
        }),
        validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
    }
])     
    console.log(first_name, last_name, role_id, manager_id);
    await db.addEmployee(first_name, last_name, role_id, manager_id);
    viewEmployees();
}


// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
const updateEmployeeRole = async () =>{
    const [ roles ] = await db.viewRoles();
    const [employees] = await db.viewEmployees();
    const { employee_id, role_id } =  await inquirer.prompt([
        {
            type: 'list',
            message: 'Which employee whould you like to update the role for?',
            name: 'employee_id',
            choices: employees.map(({Employee_Name, id})=>{
    
                return {
                    name: Employee_Name,
                    value: id
                }
            }),
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        },
        {
            type: 'list',
            message: 'Enter the role',
            name: 'role_id',
            choices: roles.map(({Title, id}) =>{
                return {
                    name:Title,
                    value: id
                }
            }),
            validate: (value) => { if (value) { return true; } else { return "Enter response to continue"; } },
        }


    ])

    await db.updateEmployeeRole(employee_id, role_id);

    viewEmployees();

}

init();