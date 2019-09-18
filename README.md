# node-sql
basic node + sql setup

Endpoints: 
1. Register User
  - POST
  - Path: '/registerUser'
  - Body Params:
    - firstName
    - lastName
    - email: req.body.email,
    - username: req.body.username,
    - password: req.body.password,
        
2. Login
  - GET
  - Path: '/loginUser'
  - Query Parms: 
      - username
      - password
