const data = {
    impots: require('../../model/impot.json'),
    setImpots: function (data) { this.impots = data }
}

const getImpot = (req, res) => {
    res.json(data.impots);
}

const getImpotsById = (req, res) => {
    const code = req.params.code;
    const impot = data.impots.find(imp => imp.code = code);
    res.json(impot);
}

module.exports = {
    getImpot,
    getImpotsById
}