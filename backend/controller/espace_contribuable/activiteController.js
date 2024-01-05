const data = {
    activites: require('../../model/model_temp/contribuable.json'),
    setActivites: function(data) {this.contribuables = data},
    actives: require('../../model/activite.json')
}

const path = require('path');
const fsPromises = require('fs').promises;

const setActivite = async (req, res) => {
    const id = data.activites.length === 0 ? 1 : data.activites[data.activites.length - 1];
    const id_contribuable = req.body.id_contribuable;
    const activite = req.body.activite;
    const precision_activite = req.body.precision_activite;
    const numero_statistique = req.body.numero_statistique;
    const date_delivrance_statistique = req.body.date_delivrance_statistique;
    const registre_commerce = req.body.registre_commerce;
    const date_registre_commerce = req.body.date_registre_commerce;
    const debut_exercice = req.body.debut_exercice;
    const cloture_exercice = req.body.cloture_exercice;

    const newActivite = {
        "id_activite": id,
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

const getActiviteById = (req, res) => {
    const id_activite = req.params.id_activite;
    const activite = data.actives.find(act => act.id_activite === id_activite);
    res.json(activite);
}

const getActiviteByIdContribuable = (req, res) => {
    const id_contribuable = req.params.id_contribuable;
    let activites = [];

    data.actives.map(act => {
        if(act.id_contribuable === id_contribuable)
            activites.push(act);
    })

    res.json(activites);
    activites = [];
}

const updateActivite = async (req, res) => {
    const id_activite = req.body.id_activite;
    const activites = data.actives.find(act => act.id_activite === id_activite);

    if(req.body.activite) activites.activite = req.body.activite;
    if(req.body.precision_activite) activites.precision_activite = req.body.precision_activite;
    if(req.body.numero_statistique) activites.numero_statistique = req.body.numero_statistique;
    if(req.body.date_delivrance_statistique) activites.date_delivrance_statistique = req.body.date_delivrance_statistique;
    if(req.body.registre_commerce) activites.registre_commerce = req.body.registre_commerce;
    if(req.body.date_registre_commerce) activites.date_registre_commerce = req.body.date_registre_commerce;
    if(req.body.debut_exercice) activites.debut_exercice = req.body.debut_exercice;
    if(req.body.cloture_exercice) activites.cloture_exercice = req.body.cloture_exercice;

    const filteredActivite = data.activites.filter(act => act.id_activite === id_activite);
    const unsortedActivite = [...filteredActivite, activites];

    data.setActivites(unsortedActivite.sort((a, b) => a.id_activite > b.id_activite ? 1 : a.id_activite < b.id_activite ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.activites)
    )    

    res.json({'success': 'Contribuable à été modifiée'});
}

module.exports = {
    setActivite,
    getActiviteById,
    getActiviteByIdContribuable,
    updateActivite
}