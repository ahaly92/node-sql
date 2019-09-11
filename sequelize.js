import EmployeeModel from './models/employee'
import Sequelize from 'sequelize'

const sequelize = new Sequelize('company', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

const Employee = EmployeeModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log('Company db and employee table have been created')
    });

module.exports = Employee;
