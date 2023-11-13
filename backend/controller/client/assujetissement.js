const data = {
    assujetissements: require('../../model/imposition.json'),
    setAssujetissement: function (data) { this.assujetissements = data }
}

const path = require('path');
const fsPromises = require('fs').promises;

const setAssujetissement = async (req, res) => {
    const id_client = req.params.id_client;
    const imposition = req.body.imposition;
    const date_debut = req.body.date_debut;
    const periodicite = req.body.periodicite;
    const annee = req.body.annee;
    const actif = req.body.actif;
    const exonere = req.body.exonere;
    const period_1 = req.body.period_1;
    const period_2 = req.body.period_2;
    const etat = req.body.etat;
    const date_exe = req.body.date_exe;
    const date_assujetissement = req.body.date_assujetissement;

    const id = data.assujetissements.length === 0 ? 1 : data.assujetissements[data.assujetissements.length - 1].id + 1;

    const new_imposition = {
        id_client,
        id,
        imposition,
        date_debut,
        periodicite,
        annee,
        actif,
        exonere,
        period_1,
        period_2,
        etat,
        date_exe,
        date_assujetissement
    }

    data.setAssujetissement([...data.assujetissements, new_imposition]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'assujetissement.json'),
        JSON.stringify(data.assujetissements)
    )
}

module.exports = {
    setAssujetissement
}