module.exports = (sequelize, dataTypes) => {
    const alias = "product";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING(60),
            allowNull: false,
        },
        description: {
            type: dataTypes.STRING(1000),
            allowNull: false,
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false,
        },

        ID_category: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        color: {
            type: dataTypes.STRING(45),

        },
        mark: {
            type: dataTypes.STRING(45),
            
        },
        size: {
            type: dataTypes.STRING(45),
            
        },
        stock: {
            type: dataTypes.STRING(45),
            
        },
        delibery: {
            type: dataTypes.STRING(45),
            
        },

        discount: {
            type: dataTypes.FLOAT
        },
        material: {
            type: dataTypes.STRING(45),  
        },
        origin: {
            type: dataTypes.STRING(45),  
        }
       
    };

    const config = {
        tableName: "product",
        timestamps: false,
    };

    const product = sequelize.define(alias, cols, config);

    product.associate = function(models){
        product.belongsTo(models.category_product,{
            as : "categoria",
            foreignKey : "ID_category",
        })

        product.hasMany(models.image_product,{
            as : 'imagenes',
            foreignKey : 'productId'
        })
    }


    return product;
};