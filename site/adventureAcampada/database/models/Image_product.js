module.exports = (sequelize, dataTypes) => {
    const alias = "image_product";

    const cols = {
        ID_imageP: {
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
        tableName: "image_product",
        timestamps: true,
        underscored: true,
    };

    const image_product = sequelize.define(alias, cols, config);

    image_product.associate = function(models){
        image_product.belongsToMany(models.product,{
            as : "image_product",
            through : "image_product",
            foreignKey : "ID_imageP",
        })

    }


    return image_product;
};