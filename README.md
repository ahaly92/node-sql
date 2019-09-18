# node-sql
basic node + sql setup

Endpoints: 
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
