const { Model, DataTypes} = require('sequelize');
const sequelize = require('./../config/connection');

class Comment extends Model {};

Comment.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
    },
    blogId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'blog',
            key: 'id',
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'comment'
})

module.exports = Comment;