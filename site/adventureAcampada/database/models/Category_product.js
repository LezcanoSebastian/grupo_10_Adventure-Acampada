module.exports = (sequelize, dataTypes) => {
    const alias = "category_product";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
       
    };

    const config = {
        tableName: "category_product",
        timestamps: false
    };

    const category_product = sequelize.define(alias, cols, config);

    category_product.associate = function(models){
        category_product.hasMany(models.product,{
            as : "productos",
            foreignKey : "ID_category",
        })

    }

    return category_product;
};