const { Model, DataTypes} = require('sequelize');
const sequelize = require('./../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    validatePassword(password) {
        return bcrypt.compareSync(password, this.password);
    };
};

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    username: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true,
        validate: {
            isAlphanumeric: true,
        }
    },
    password: {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
            len: [6],
        },
    }
}, {
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                user.password = await bcrypt.hash(user.password, 10);
            }
            return user;
        },
    },
    sequelize,
    freezeTableName: true,
    modelName: 'user'
})

module.exports = User;