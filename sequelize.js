import UserModel from './models/user'
import Sequelize from 'sequelize'

let sequelize = null;

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect:  'postgres',
        protocol: 'postgres',
    })
} else {
    sequelize = new Sequelize('company', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }});
}

const User = UserModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log('db has been created')
    });

module.exports = User;
