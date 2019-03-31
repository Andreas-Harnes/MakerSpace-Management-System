module.exports = (sequelize, DataTypes) => {
    const CumulativeItems = sequelize.define('CumulativeItems', {
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
        CumulativeItems.hasMany(models.SpecificItems, { as: 'specificItems' })
    }
        
    return CumulativeItems;
}
