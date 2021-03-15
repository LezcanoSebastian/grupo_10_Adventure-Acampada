module.exports = (sequelize, dataTypes) => {
    const alias = "users";

    const cols = {
        ID_user: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        firstName: {
            type: dataTypes.VARCHAR(60),
            allowNull: false,
        },
        lastName: {
            type: dataTypes.VARCHAR(60),
            allowNull: false,
        },
        email: {
            type: dataTypes.VARCHAR(100),
            allowNull: false,
        },
        password: {
            type: dataTypes.VARCHAR(100),
            allowNull: false,
        },

        rol: {
            type: dataTypes.VARCHAR(10),
            allowNull: false,

        },
        ID_imageU: {
            type: dataTypes.INTEGER.UNSIGNED,

        },
       

    };

    const config = {
        tableName: "users",
        timestamps: true,
        underscored: true,
    };

    const users = sequelize.define(alias, cols, config);

    users.associate = function(models){
        users.belongsToMany(models.image_user,{
            as : "image_user",
            through : "image_user",
            foreignKey : "ID_imageU",
        })

    }


    return users;
};