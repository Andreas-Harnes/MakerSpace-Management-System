const db = require('../config/db.config');
const CumulativeItems = db.cumulativeItems;

module.exports = {
    fetchItems: async (callback) => {
        return await CumulativeItems.findAll()
            .then(cumulativeItems => {
                return callback(null, cumulativeItems);
            })
            .catch(error => {
                return callback(error, null);
            });
    }
};
