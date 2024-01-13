const data = {
    assujetissements: require('../../model/imposition.json'),
    setAssujetissement: function (data) { this.assujetissements = data }
}

const path = require('path');
const fsPromises = require('fs').promises;

const setAssujetissement = async (req, res) => {
    const new_imposition = req.body.assujetissements;
    data.setAssujetissement([...data.assujetissements, new_imposition]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'assujetissement.json'),
        JSON.stringify(data.assujetissements)
    )
    res.json(data.assujetissements);
}

const getAssujetissementById = (req, res) => {
    const id_user = req.params.id_user;
    const assujetissements = data.assujetissements.find(ass => ass.id_user === id_user);

    res.json(assujetissements);
}

module.exports = {
    setAssujetissement,
    getAssujetissementById
}