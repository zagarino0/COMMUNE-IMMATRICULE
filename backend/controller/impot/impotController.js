const data = {
    impots: require('../../model/impot.json'),
    setImpots: function (data) { this.impots = data }
}

const fsPromises = require('fs').promises;
const path = require('path')

const getImpot = (req, res) => {
    res.json(data.impots);
}

const getImpotsById = (req, res) => {
    const code = req.params.code;
    const impot = data.impots.find(imp => imp.code = code);
    res.json(impot);
}

const setImpot = async (req, res) => {
    const code = data.impots.length === 0 ? 1 : data.impots[data.impots.length - 1].code + 1;
    const libelle = req.body.libelle;
    const abbreviation = req.body.abbreviation;

    const impot = {
        'code': code,
        'libelle': libelle,
        'abbreviation': abbreviation
    }

    data.setImpots([...data.impots, impot]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'impot.json'),
        JSON.stringify(data.impots)
    )
}

const updateImpot = async (req, res) => {
    const code = req.params.code;
    const impot = data.impots.find(imp => imp.code == code);
    
    if(!impot)
        return res.status(404).json({'message': `impot ${code} introuvable`});

    if(req.body.libelle) impot.libelle = req.body.libelle;
    if(req.body.abbreviation) impot.abbreviation = req.body.abbreviation;

    const filteredImpot = data.impots.filter(imp => imp.code != code);
    const unshortedImpot = [...filteredImpot, impot];

    data.setImpots(unshortedImpot.sort((a, b) => a.code > b.code ? 1 : a.code < b.code ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'impot.json'),
        JSON.stringify(data.impots)
    )
}

const deleteImpot = async (req, res) => {
    const code = req.params.code;
    const impot = data.impots.find(imp => imp.code == code);

    if(!impot)
        return res.status(404).json({'message': `impot ${code} introuvable`});

    const filteredImpot = data.impots.filter(imp => imp.code != code);

    data.setImpots(filteredImpot);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'impot.json'),
        JSON.stringify(data.impots)
    )
}


module.exports = {
    getImpot,
    setImpot,
    getImpotsById,
    updateImpot,
    deleteImpot
}