module.exports = (sequelize, type) => {
    return sequelize.define('employee', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING,
        location: type.STRING,
    });
};
