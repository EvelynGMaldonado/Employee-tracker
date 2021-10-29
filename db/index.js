
//TODO CLass for database

const connection = require("./connection-to-database");

class DBase {
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
            `SELECT * FROM EMPLOYEE`join 3ish
        )

    }

    addDepartment(){
        INSERT or SET
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