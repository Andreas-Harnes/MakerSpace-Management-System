module.exports = (sequelize, DataTypes) => {
    const CumulativeItems = sequelize.define('CumulativeItems', {
        name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
            
        description: {
            type: DataTypes.STRING(150),
            allowNull: true
        }
    });

    CumulativeItems.associate = models => {
        CumulativeItems.hasMany(models.SpecificItems, { as: 'specificItems' })
    }
        
    return CumulativeItems;
}
