const MAX_STRING_LENGTH = 190;

module.exports = (sequelize, DataTypes) => {
    const CumulativeItems = sequelize.define('CumulativeItems', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(MAX_STRING_LENGTH),
            allowNull: false
        },
            
        description: {
            type: DataTypes.STRING(MAX_STRING_LENGTH),
            allowNull: true
        }
    }, {
        timestamps: false
    });
        
    return CumulativeItems;
}
