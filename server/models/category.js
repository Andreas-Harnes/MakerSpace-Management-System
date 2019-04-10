module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
    }, {
        timestamps: false
    });
    
    return Categories;
}
