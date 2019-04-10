const MAX_STRING_LENGTH = 190;

module.exports = (sequelize, DataTypes) => {
    const CumulativeItems = sequelize.define('CumulativeItems', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },

        name: {
            type: DataTypes.STRING(MAX_STRING_LENGTH),
            allowNull: false
        },
            
        description: {
            type: DataTypes.STRING(MAX_STRING_LENGTH),
            allowNull: true
        }
    });
        
    return CumulativeItems;
}
