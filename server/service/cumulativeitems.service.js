const db = require('../config/db.config');
const Cumulative = db.cumulativeItems;

module.exports = {
    fetchItems: async () => {
        return await Cumulative.findAll({
        })
        .then(cumulativeitems => {
            return cumulativeitems;
        })
        .catch(error => {
            // TODO - error handling.
            console.log(error);
            return error;
        });
    },    
};
