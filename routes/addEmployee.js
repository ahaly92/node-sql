import Employee from '../sequelize'

module.exports = (app) => {
    app.post('/addEmployee', (request, response) => {
            console.log(request.body);
            const data = {
                name: request.body.name,
                location: request.body.location,
            };

            if (data.location === '' || data.name === '') {
                response.json('name and location required');
            }

            Employee.findOne({
                where: {
                    name: data.name
                }
            }).then(employee => {
                    if (employee != null) {
                        console.log('employee already added');
                        response.json('employee already added');
                    } else {
                        Employee.create({
                            name: data.name,
                            location: data.location
                        }).then(() => {
                            console.log('user created');
                            response.json('user created');
                        })
                    }
                }
            ).catch(error => {
                    console.log('problem communicating with db');
                    response.status(500).json(error);
                }
            )
        }
    )
};
