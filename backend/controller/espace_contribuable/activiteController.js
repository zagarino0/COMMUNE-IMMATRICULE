const data = {
    activites: require('../../model/model_temp/contribuable.json'),
    setActivites: function(data) {this.contribuables = data}
}

const path = require('path');
const fsPromises = require('fs').promises;

const setActivite = async (req, res) => {
    const id = data.activites.length === 0 ? 1 : data.activites[data.activites.length - 1];
    const id_contribuable = "";
    const activite = req.body.activite;
    const precision_activite = req.body.precision_activite;
    const numero_statistique = req.body.numero_statistique;
    const date_delivrance_statistique = req.body.date_delivrance_statistique;
    const registre_commerce = req.body.registre_commerce;
    const date_registre_commerce = req.body.date_registre_commerce;
    const debut_exercice = req.body.debut_exercice;
    const cloture_exercice = req.body.cloture_exercice;

    const newActivite = {
        "id": id,
        "id_contribuable": id_contribuable,
        "activite": activite,
        "precision_activite": precision_activite,
        "numero_statistique": numero_statistique,
        "date_delivrance_statistique": date_delivrance_statistique,
        "registre_commerce": registre_commerce,
        "date_registre_commerce": date_registre_commerce,
        "debut_exercice": debut_exercice,
        "cloture_exercice": cloture_exercice
    }

    data.setActivite([...data.activites, newActivite]);
    res.json(data.activites);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.activites)
    )
}

module.exports = {
    setActivite
}