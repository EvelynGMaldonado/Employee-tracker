
//TODO CLass for database

const connection = require("./connection-to-database");

class DBase {
    constructor(connection) {
        this.connection = connection
    }

    viewDepartament () {
        return this.connection.promise().query(
            `SELECT * FROM department`
        )
    }

    viewRoles() {
        return this.connection.promise().query(
            `SELECT role.id, role.title as Title, role.salary as Salary, department.department_name as Department FROM role
            LEFT JOIN department 
            ON role.department_id = department.id `
        )

    }
    
    viewEmployees() {
        return this.connection.promise().query(
            `SELECT em.id, concat(em.first_name," ", em.last_name) as Employee_Name, r.title as Title, r.salary as Salary, d.department_name as Department, concat(e.first_name," ", e.last_name) as Manager_Name
            FROM employee em
            INNER JOIN role r
            ON em.role_id = r.id
            LEFT JOIN department d
            ON r.department_id = d.id
            LEFT JOIN employee e
            ON em.id = e.id
            ORDER BY em.id
            `
        )

    }

    addDepartment(){
        // INSERT or SET
    }

    addRole () {

    }

    addEmployee () {

    }

    updateEmployeeRole() {
        `UPDATE table SET manager_id WHERE id = `
    }

}
module.exports = new DBase(connection);