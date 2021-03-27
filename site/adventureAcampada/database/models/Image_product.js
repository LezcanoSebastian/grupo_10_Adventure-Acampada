module.exports = (sequelize, dataTypes) => {
    const alias = "image_product";

    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        productId : {
            type : dataTypes.STRING(45)
        }
       
       
    };

    const config = {
        tableName: "image_product",
        timestamps: false,
    };

    const image_product = sequelize.define(alias, cols, config);

    image_product.associate = function(models){
        image_product.belongsTo(models.product,{
            as : "image_product",
            foreignKey : "productId",
        })

    }


    return image_product;
};