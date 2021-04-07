module.exports = (sequelize, dataTypes) => {
    const alias = "users";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        firstName: {
            type: dataTypes.STRING(60),
            allowNull: false,
        },
        lastName: {
            type: dataTypes.STRING(60),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },

        rol: {
            type: dataTypes.STRING(10),
            allowNull: false,

        },
        avatar: {
            type: dataTypes.STRING(100),
        },
        telefono: {
            type: dataTypes.STRING(100),
        },
       
    };

    const config = {
        tableName: "users",
        timestamps: false
        };

    const users = sequelize.define(alias, cols, config);


    return users;
};