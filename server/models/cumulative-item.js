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
        },

        image: {
            type: DataTypes.STRING(MAX_STRING_LENGTH),
            allowNull: false,
            defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVP0bs6R7ss0uljAAIqW3mCH4ViTEJNwGOx3ndqc9L4yJh-R0I'
        },

        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Categories',
                foreignKey: 'id'
            }
        }
    }, {
        timestamps: false
    });
        
    return CumulativeItems;
}
