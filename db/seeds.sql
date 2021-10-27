INSERT INTO department (department_name)
VALUES ("Sales"), ("Marketing"), ("Manager"), ("Secretary"), ("IT");


INSERT INTO role (title, salary, department_id)
VALUES  ("Manager", (30000), 1),
        ("Sales", (22000), 2),
        ("Marketing", (23000), 3),
        ("Secretary", (20000), 4),
        ("IT", (32000), 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Ryan","Morrow", 1, NULL),
        ("Alex","Smith", 2, NULL),
        ("Martin","Thomas", 3, NULL),
        ("Julian","Crosby", 4, NULL),
        ("Alice","Timmons", 5, NULL),
        ("Carol","Williams", 1, NULL),
        ("Jackeline","Albright", 2, NULL),
        ("Karl","Perry", 3, NULL),
        ("Paul","Carter", 4, NULL),
        ("Rita","Thomas", 5, NULL);

