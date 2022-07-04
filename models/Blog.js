const { Model, DataTypes} = require('sequelize');
const sequelize = require('./../config/connection');

class Blog extends Model {};

Blog.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
            isAlphanumeric: true,
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'blog'
})

module.exports = Blog;