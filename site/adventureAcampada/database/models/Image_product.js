module.exports = (sequelize, dataTypes) => {
    const alias = "image_product";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        product_id : {
            type : dataTypes.INTEGER
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