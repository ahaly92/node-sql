import UserModel from './models/user'
import Sequelize from 'sequelize'

const sequelize = new Sequelize('company', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log('db has been created')
    });

module.exports = User;
