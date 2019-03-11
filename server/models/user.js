const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.prototype.validPassword = (password, currentPassword) => {
        return bcrypt.compareSync(password, currentPassword);
    };

    User.addHook('beforeCreate', user => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    
    return User;
};
