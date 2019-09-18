import User from '../sequelize'
import bcrypt from 'bcrypt';

const BCRYPT_SALT_ROUNDS = 12;
const USER_ADDED_ERROR = 'user already added';
const USER_ADDED_SUCCESS = 'user added';
const USERNAME_PASSWORD_REQUIRED = 'username and password required';

module.exports = app => {
    app.post('/registerUser', (req, res) => {
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        };
        if (data.password === '' || data.username === '') {
            res.json(USERNAME_PASSWORD_REQUIRED);
        }
        User.findOne({
            where: {
                username: data.username,
            },
        })
            .then(user => {
                if (user != null) {
                    console.log(USER_ADDED_ERROR);
                    res.json(USER_ADDED_ERROR);
                } else {
                    bcrypt
                        .hash(data.password, BCRYPT_SALT_ROUNDS)
                        .then(function (hashedPassword) {
                            User.create({
                                first_name: data.firstName,
                                last_name: data.lastName,
                                email: data.email,
                                username: data.username,
                                password: hashedPassword,
                            }).then(() => {
                                console.log(USER_ADDED_SUCCESS);
                                res.status(200).send({message: USER_ADDED_SUCCESS});
                            });
                        });
                }
            })
            .catch(err => {
                console.log('problem communicating with db');
                res.status(500).json(err);
            });
    });
};