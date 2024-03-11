const data = {
    assujetissements: require('../../model/assujetissement.json'),
    setAssujetissement: function (data) { this.assujetissements = data },
    assujetissementTemps: require('../../model/model_temp/assujetissement.json'),
    setAssujetissementTemps: function (data) { this.assujetissementTemps = data }
}

const path = require('path');
const fsPromises = require('fs').promises;

const setAssujetissement = async (req, res) => {
    const new_imposition = req.body.assujetissements;

    data.setAssujetissement([...data.assujetissements, ...new_imposition]);
    
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'assujetissement.json'),
        JSON.stringify(data.assujetissements)
    )
    res.json(data.assujetissements);
}

const getAssujetissementById = (req, res) => {
    const id_assujetissement = req.params.id_assujetissement;
    const assujetissements = data.assujetissements.find(ass => ass.id_assujetissement === id_assujetissement);
    res.json(assujetissements);
}

const updateAssujetissement = async (req, res) => {
    const id_assujetissement = req.params.id_assujetissement;
    const id_contribuable = req.body.id_contribuable;
    const assujetissement = data.assujetissements.find(ass => ass.id_assujetissement == id_assujetissement && ass.id_contribuable === id_contribuable);
    if(!assujetissement)
        return res.status(404).json({'message': 'assujetissement introuvable'})

    if(req.body.imposition) assujetissement.imposition = req.body.imposition;
    if(req.body.date_debut) assujetissement.date_debut = req.body.date_debut;
    if(req.body.periodicite) assujetissement.periodicite = req.body.periodicite;
    if(req.body.annee) assujetissement.annee = req.body.annee;
    if(req.body.period_1) assujetissement.period_1 = req.body.period_1;
    if(req.body.period_2) assujetissement.period_2 = req.body.period_2;
    if(req.body.etat) assujetissement.etat = req.body.etat;
    if(req.body.date_exe) assujetissement.date_exe = req.body.date_exe;
    if(req.body.date_assujetissement) assujetissement.date_assujetissement = req.body.date_assujetissement;
    if(req.body.date_fin) assujetissement.date_fin = req.body.date_fin;

    const filteredAssujetissement = data.assujetissements.filter(ass => ass.id_assujetissement !== assujetissement.id_assujetissement && ass.id_contribuable !== assujetissement.id_contribuable);
    data.setAssujetissement([...filteredAssujetissement, assujetissement]);
    
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'assujetissement.json'),
        JSON.stringify(data.assujetissements)
    )
    res.json(data.assujetissements);

}

module.exports = {
    setAssujetissement,
    getAssujetissementById,
    updateAssujetissement
}