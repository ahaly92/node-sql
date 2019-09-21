# Basic Node + SQL setup

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
## Installing NodeJS

We will be using NVM to manage node so that we can easily install and switch between different versions.
1. Before installing NVM make sure you have a .bashrc file in your home directory (even if the file is empty).
    - `touch ~/.bashrc`

2. To install NVM just run
    - `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash`

3. Rerun .bashrc or log out then in 
    - `source ~/.bashrc`

4. To install the latest version of node run
    - `nvm install node`

5. To check the version of node installed run
    - `node --version`

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
