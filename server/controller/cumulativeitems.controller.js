const CumulativeItemsService = require('../service/cumulativeitems.service');

module.exports = {
    fetchCumulativeItems: async (req, res, next) => {
        await CumulativeItemsService.fetchItems((error, cumulativeitems) => {
            if (error) {
                next(error);
            }

            res.send({ cumulativeitems });
        });
    }
};
