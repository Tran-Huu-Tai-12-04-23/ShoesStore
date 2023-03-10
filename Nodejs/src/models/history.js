'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            History.belongsTo(models.User, { foreignKey: 'user_id' });
            History.belongsTo(models.Product, { foreignKey: 'product_id' });
        }
    }

    History.init(
        {
            user_id: DataTypes.INTEGER,
            product_id: DataTypes.INTEGER,
            purchase_date: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'History',
        },
    );

    return History;
};
