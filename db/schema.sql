DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(30) NOT NULL
);

CREATE TABLE empl_role (
id INT AUTO_INCREMENT PRIMARY KEY,
role_title VARCHAR(30) NOT NULL,
salary DECIMAL(4,2),
department_id INT,
FOREIGN KEY (department_id)
REFERENCES department(id)
ON DELETE SET NULL
);

CREATE TABLE employee (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30)
role_id INT,
FOREIGN KEY (role_id)
REFERENCES empl_role(id)
ON DELETE SET NULL,
maager_id INT,
--   * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)--
);