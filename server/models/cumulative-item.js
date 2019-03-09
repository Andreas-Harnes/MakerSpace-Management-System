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
        
    return CumulativeItems;
}
