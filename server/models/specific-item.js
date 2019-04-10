module.exports = (sequelize, DataTypes) => {
    const SpecificItems = sequelize.define('SpecificItems', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },

        cumulativeItemsId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'CumulativeItems',
                foreignKey: 'id'
            }
        },
            
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    
    return SpecificItems;
}
