module.exports = (sequelize, dataTypes) => {
    const alias = "product";

    const cols = {
        ID_product: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: dataTypes.VARCHAR(60),
            allowNull: false,
        },
        description: {
            type: dataTypes.VARCHAR(200),
            allowNull: false,
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false,
        },

        ID_imageP: {
            type: dataTypes.INTEGER.UNSIGNED,

        },
        ID_category: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        color: {
            type: dataTypes.VARCHAR(45),

        },
        mark: {
            type: dataTypes.VARCHAR(45),
            
        },
        size: {
            type: dataTypes.VARCHAR(45),
            
        },
        stock: {
            type: dataTypes.VARCHAR(45),
            
        },
        delibery: {
            type: dataTypes.VARCHAR(45),
            
        },

    };

    const config = {
        tableName: "product",
        timestamps: true,
        underscored: true,
    };

    const product = sequelize.define(alias, cols, config);

    product.associate = function(models){
        product.belongsToMany(models.category_product,{
            as : "category_product",
            through : "category_product",
            foreignKey : "ID_category",
        })

        product.belongsTo(models.image_user,{
            as : "image_user",
            foreignKey : "ID_imageP"
        })
    }


    return product;
};