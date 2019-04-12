const MAX_STRING_LENGTH = 190;
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING(MAX_STRING_LENGTH),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING(MAX_STRING_LENGTH),
            allowNull: false
        },

        firstName: {
            type: DataTypes.STRING(MAX_STRING_LENGTH),
            allowNull: false
        },

        lastName: {
            type: DataTypes.STRING(MAX_STRING_LENGTH),
            allowNull: false
        },

        phone: {
            type: DataTypes.STRING(MAX_STRING_LENGTH),
            unique: true,
            allowNull: false
        }
    });

    User.prototype.validPassword = (password, currentPassword) => {
        return bcrypt.compareSync(password, currentPassword);
    };

    User.addHook('beforeCreate', user => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(12), null);
    });
    
    return User;
};
