const data = {
    activites: require('../../model/model_temp/activite.json'),
    setActivites: function(data) { this.activites = data},
    actives: require('../../model/activite.json'),
    history_contribuable: require('../../model/history_contribuable.json'),
    setHistoryContribuable: function (data) { this.history_contribuable = data }
}

const path = require('path');
const fsPromises = require('fs').promises;

const setActivite = async (req, res) => {
    const id = data.activites.length === 0 ? 1 : data.activites[data.activites.length - 1].id_activite + 1;
    const id_contribuable = req.body.id_contribuable;
    const activite = req.body.activite;
    const precision_activite = req.body.precision_activite;
    const statistique = req.body.statistique;
    const numero_statistique = req.body.numero_statistique;
    const date_delivrance_statistique = req.body.date_delivrance_statistique;
    const registre_commerce = req.body.registre_commerce;
    const date_registre_commerce = req.body.date_registre_commerce;
    const debut_exercice = req.body.debut_exercice;
    const cloture_exercice = req.body.cloture_exercice;
    const nif = req.body.nif;
    const nombre_salarie = req.body.nombre_salarie
    const newActivite = {
        "id_activite": id,
        "id_contribuable": id_contribuable,
        "activite": activite,
        "precision_activite": precision_activite,
        "statistique": statistique,
        "numero_statistique": numero_statistique,
        "date_delivrance_statistique": date_delivrance_statistique,
        "registre_commerce": registre_commerce,
        "date_registre_commerce": date_registre_commerce,
        "debut_exercice": debut_exercice,
        "cloture_exercice": cloture_exercice,
        "nif": nif,
        "nombre_salarie": nombre_salarie
    }

    data.setActivites([...data.activites, newActivite]);
    res.json(data.activites);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'activite.json'),
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
    const activites = data.actives.find(act => act.id_activite == id_activite);

    if(req.body.activite) activites.activite = req.body.activite;
    if(req.body.precision_activite) activites.precision_activite = req.body.precision_activite;
    if(req.body.numero_statistique) activites.numero_statistique = req.body.numero_statistique;
    if(req.body.numero_statistique) activites.statistique = true;
    if(req.body.date_delivrance_statistique) activites.date_delivrance_statistique = req.body.date_delivrance_statistique;
    if(req.body.registre_commerce) activites.registre_commerce = req.body.registre_commerce;
    if(req.body.date_registre_commerce) activites.date_registre_commerce = req.body.date_registre_commerce;
    if(req.body.debut_exercice) activites.debut_exercice = req.body.debut_exercice;
    if(req.body.cloture_exercice) activites.cloture_exercice = req.body.cloture_exercice;
    if(req.body.nif) activites.nif = req.body.nif;

    const filteredActivite = data.activites.filter(act => act.id_activite === id_activite);
    const unsortedActivite = [...filteredActivite, activites];

    data.setActivites(unsortedActivite.sort((a, b) => a.id_activite > b.id_activite ? 1 : a.id_activite < b.id_activite ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'activite.json'),
        JSON.stringify(data.activites)
    )    

    res.json({'success': 'Contribuable à été modifiée'});
}



const updateActiviteByContribuable = async (req, res) => {
    const id_activite = req.body.id_activite;
    const activites = data.actives.find(act => act.id_activite == id_activite);

    if(req.body.activite) activites.activite = req.body.activite;
    if(req.body.precision_activite) activites.precision_activite = req.body.precision_activite;
    if(req.body.numero_statistique) activites.numero_statistique = req.body.numero_statistique;
    if(req.body.numero_statistique) activites.statistique = true;
    if(req.body.date_delivrance_statistique) activites.date_delivrance_statistique = req.body.date_delivrance_statistique;
    if(req.body.registre_commerce) activites.registre_commerce = req.body.registre_commerce;
    if(req.body.date_registre_commerce) activites.date_registre_commerce = req.body.date_registre_commerce;
    if(req.body.debut_exercice) activites.debut_exercice = req.body.debut_exercice;
    if(req.body.cloture_exercice) activites.cloture_exercice = req.body.cloture_exercice;
    if(req.body.nif) activites.nif = req.body.nif;

    const filteredActivite = data.activites.filter(act => act.id_activite === id_activite);
    const unsortedActivite = [...filteredActivite, activites];

    data.setActivites(unsortedActivite.sort((a, b) => a.id_activite > b.id_activite ? 1 : a.id_activite < b.id_activite ? -1 : 0));

    const id_history_contribuable = data.history_contribuable.length === 0 ? 1 : data.history_contribuable[data.history_contribuable.length - 1].id_history_contribuable + 1;
    const history_contribuable = {
        'id_history_contribuable': id_history_contribuable,
        'id_contribuable': req.body.id_contribuable,
        'motif': 'Mise à jour actionnaire',
        'date_modification': new Date()
    }

    data.setHistoryContribuable([...data.history_contribuable, history_contribuable])

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history_contribuable.json'),
        JSON.stringify(data.history_contribuable)
    )

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'activite.json'),
        JSON.stringify(data.activites)
    )    

    res.json({'success': 'Contribuable à été modifiée'});
}


const updateActiviteAValide = async (req, res) => {
    const id_activite = req.params.id_activite;
    const id_contribuable = req.body.id_contribuable;
    const activites = data.activites.find(act => act.id_activite == id_activite && act.id_contribuable == id_contribuable);
    if(!activites)
        return res.json({"message": "activites introuvable"});
    if(req.body.activite) activites.activite = req.body.activite;
    if(req.body.precision_activite) activites.precision_activite = req.body.precision_activite;
    if(req.body.numero_statistique) activites.numero_statistique = req.body.numero_statistique;
    if(req.body.numero_statistique) activites.statistique = true;
    if(req.body.date_delivrance_statistique) activites.date_delivrance_statistique = req.body.date_delivrance_statistique;
    if(req.body.registre_commerce) activites.registre_commerce = req.body.registre_commerce;
    if(req.body.date_registre_commerce) activites.date_registre_commerce = req.body.date_registre_commerce;
    if(req.body.debut_exercice) activites.debut_exercice = req.body.debut_exercice;
    if(req.body.cloture_exercice) activites.cloture_exercice = req.body.cloture_exercice;
    if(req.body.nif) activites.nif = req.body.nif;
    if(req.body.nombre_salarie) activites.nombre_salarie = req.body.nombre_salarie;
    const filteredActivite = data.activites.filter(act => act.id_activite === id_activite);
    const unsortedActivite = [...filteredActivite, activites];

    data.setActivites(unsortedActivite.sort((a, b) => a.id_activite > b.id_activite ? 1 : a.id_activite < b.id_activite ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'activite.json'),
        JSON.stringify(data.activites)
    )    

    res.json({'success': 'Contribuable à été modifiée'});
} 

module.exports = {
    setActivite,
    getActiviteById,
    getActiviteByIdContribuable,
    updateActiviteAValide,
    updateActivite,
    updateActiviteByContribuable
}


