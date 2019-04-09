const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING(150),
            allowNull: false
        },

        firstName: {
            type: DataTypes.STRING(150),
            allowNull: false
        },

        lastName: {
            type: DataTypes.STRING(150),
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
