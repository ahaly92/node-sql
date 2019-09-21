# basic node + sql setup

## This Repository's Endpoints

1. Register User
    - POST
    - Path: '/registerUser'
    - Body Params:
      - firstName
      - lastName
      - email
      - username
      - password
        
2. Login
    - GET
    - Path: '/loginUser'
    - Query Parms: 
        - username
        - password


## Installing MySQL

1. Install home brew
    - `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
`
2. Update Homebrew to ensure you get the latest packages
    - `brew update`
3. Install mysql
    - `brew install mysql`
4. To keep mysql running whenever your computer is started run: 
    - `brew services start mysql`
5. Set a rudimentary password for MySQL locally, there is no need to worry about security because it will only be accessible from your machine
    - `mysqladmin -u root password 'password'`
6. To use mysql 
    - `mysql -u root -p`
    
## Some Useful SQL Commands: 
1. Show databases
    - `SHOW DATABASES;`

2. Use a database
    - `USE dbNameYouWant;`

3. Creating a database
    - `CREATE DATABASE dbNameYouWant;`

4. Delete a database
    - `DROP DATABASE dbNameYouWant;`
    
5. Display all contents of table
    - `SELECT * FROM table`

6. Create a table
    - `CREATE TABLE table (field1 type1, field2 type2, ...);`
