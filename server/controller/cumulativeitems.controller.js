module.exports = {
    fetchCumulativeItems: (req, res) => {
        console.log('Fetching items ...');
        res.status(201).send('Items fethed ...');
    }
};
