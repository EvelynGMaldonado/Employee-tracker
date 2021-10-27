
//TODO CLass for database

const connection = require("../config/connection-to-database");

class DataBase {
    constructor(connection) {
        this.connection = connection
    }
   viewDepartament () {
        return this.connection.promise().query(
            `SELECT * FROM DEPARTMENT`
        )
    }

    viewRoles() {
        return this.connection.promise().query(
            `SELECT * FROM ROLE`
        )

    }
    
    viewEmployees() {
        return this.connection.promise().query(
            `SELECT * FROM EMPLOYEE`
        )

    }

    addDepartment(){

    }

    addRole () {

    }

    addEmployee () {

    }

    updateEmployeeRole() {

    }

}
module.exports = new DataBase;