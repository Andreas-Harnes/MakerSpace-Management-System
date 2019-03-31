module.exports = (sequelize, DataTypes) => {
    const SpecificItems = sequelize.define('SpecificItem', {
        specificItemId: {
            type: DataTypes.INTEGER,
            allownull: false,
            primaryKey: true
        },
            
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    SpecificItems.associate = models => {
        SpecificItems.belongsTo(models.CumulativeItem);
    }
    
    return SpecificItems;
}
