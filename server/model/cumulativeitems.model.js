module.exports = (sequelize, Sequelize) => {
    const CumulativeItems = sequelize.define('cumulativeItems', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
            
        description: {
            type: Sequelize.STRING
        }
    });
        
    return CumulativeItems;
}
