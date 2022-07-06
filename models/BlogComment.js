const { Model, DataTypes} = require('sequelize');
const sequelize = require('./../config/connection');

class BlogComment extends Model {};

BlogComment.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    blogId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'blog',
            key: 'id',
        }
    },
    commentId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: 'comment',
            key: 'id',
        }
    },
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'blog_comment'
})

module.exports = BlogComment;