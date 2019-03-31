module.exports = (sequelize, DataTypes) => {
    const SpecificItems = sequelize.define('SpecificItems', {
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
        SpecificItems.belongsTo(models.CumulativeItems);
    }
    
    return SpecificItems;
}
