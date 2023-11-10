const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ModelName = sequelize.define('modelName', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Anonimo",
    },
});

module.exports = ModelName;