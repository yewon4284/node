const Sequelize = require('sequelize');

class Hashtag extends Sequelize.Model {
    static initiate(sequelize) {
        Hashtag.init( {
            title: {
                type: Sequelize.STRING(15),
                allowNull: false,
                unique: true,
            }
        }, {
            sequelize,
            timestamps: true, // createAt, updatedAt
            underscored: false,
            modeName: 'Hashtag',
            tableName: 'hashtags',
            paranoid: false, // deleteAt 삭제일 // soft delete
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',        
        })
    }

    static associate(db) {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    }
};

module.exports = Hashtag;