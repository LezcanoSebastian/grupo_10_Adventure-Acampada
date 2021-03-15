module.exports = (sequelize, dataTypes) => {
    const alias = "image_user";

    const cols = {
        ID_imageU: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        image: {
            type: dataTypes.VARCHAR(100),
            allowNull: false,
        },
       
       
    };

    const config = {
        tableName: "image_user",
        timestamps: true,
        underscored: true,
    };

    const image_user = sequelize.define(alias, cols, config);

    image_user.associate = function(models){
        image_user.belongsToMany(models.users,{
            as : "image_user",
            through : "image_user",
            foreignKey : "ID_imageU",
        })

    }


    return image_user;
};