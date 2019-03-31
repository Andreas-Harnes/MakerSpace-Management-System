module.exports = (sequelize, DataTypes) => {
    const CumulativeItems = sequelize.define('CumulativeItem', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
            
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    CumulativeItems.associate = models => {
        CumulativeItems.hasMany(models.SpecificItem, { as: 'specificItems' })
    }
        
    return CumulativeItems;
}
