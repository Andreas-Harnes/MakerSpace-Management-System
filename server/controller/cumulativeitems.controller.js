module.exports = {
    fetchCumulativeItems: (req, res) => {
        console.log('Fetching items ...');
        res.status(200).send('Items fethed ...');
    }
};
