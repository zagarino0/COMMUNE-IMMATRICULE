const data = {
    actionnaires: require('../../model/model_temp/contribuable.json'),
    setActionnaires: function(data) {this.contribuables = data}
}

const path = require('path');
const fsPromises = require('fs').promises;

const setActionnaire = async (req, res) => {


    const personne_physique = req.body.personne_physique;
    const personne_morale = req.body.personne_morale;
    const personne_morale_etrangere = req.body.personne_morale_etrangere;

    const nom_actionnaire = req.body.nom_actionnaire;
    const fonction_actionnaire = req.body.fonction_actionnaire;

    const resident_actionnaire = req.body.resident_actionnaire;
    const cin_passeport_actionnaire = req.body.cin_passeport_actionnaire;
    const adresse_actionnaire = req.body.adresse_actionnaire;
    const autre_activite_actionnaire = req.body.autre_activite_actionnaire;

    const id = data.actionnaires.length === 0 ? 1 : data.actionnaires[data.actionnaires.length - 1].id + 1;

    const id_contribuable = req.body.id_contribuable;

    const nif_actionnaire = req.body.nif_actionnaire;
    const email_actionnaire = req.body.email_actionnaire;

    const numero_actionnaire = req.body.numero_actionnaire;

    const associe_unique_actionnaire = req.body.associe_unique_actionnaire;

    const action_ou_actionnaire = req.body.action_ou_actionnaire;

    const newActionnaire = {
        "id_actionnaire": id,
        "id_contribuable": id_contribuable,
        "personne_physique": personne_physique,
        "personne_morale": personne_morale,
        "personne_morale_etragere": personne_morale_etrangere,
        "nom_actionnaire": nom_actionnaire,
        "fonction_actionnaire":fonction_actionnaire,
        "resident_actionnaire":resident_actionnaire,
        "cin_passeport_actionnaire":cin_passeport_actionnaire,
        "adresse_actionnaire":adresse_actionnaire,
        "autre_activite_actionnaire":autre_activite_actionnaire,
        "nif_actionnaire":nif_actionnaire,
        "email_actionnaire":email_actionnaire,
        "numero_actionnaire":numero_actionnaire,
        "associe_unique_actionnaire":associe_unique_actionnaire,
        "action_ou_actionnaire":action_ou_actionnaire
    }

    data.setActionnaires([...data.actionnaires, newActionnaire]);
    res.json(data.actionnaires);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'actionnaire.json'),
        JSON.stringify(data.actionnaires)
    )
}

const getActionnaireByIdContribuable = (req, res) => {
    const id_contribuable = req.params.id_contribuable;
    let actionnaires = [];
    data.actionnaires.map(act => {
        if(act.id_contribuable === id_contribuable)
            actionnaires.push(act);
    })
    res.json(actionnaires);
    actionnaires = [];
}

const getActionnaireById = (req, res) => {
    const id_actionnaire = req.params.id_actionnaire;
    const actionnaire = data.actionnaires.find(act => act.id_actionnaire === id_actionnaire);
    res.json(actionnaire);
}
 
const updateActionnaire = async (req, res) => {
    const id_actionnaire = req.params.id_actionnaire;
    const actionnaire = data.actionnaires.find(act => act.id_actionnaire === id_actionnaire);

    if(req.body.personne_physique) actionnaire.personne_physique = req.body.personne_physique;
    if(req.body.personne_morale) actionnaire.personne_morale = req.body.personne_morale;
    if(req.body.personne_morale_etrangere) actionnaire.personne_morale_etrangere = req.body.personne_morale_etrangere;
    if(req.body.nom_actionnaire) actionnaire.nom_actionnaire = req.body.nom_actionnaire;
    if(req.body.fonction_actionnaire) actionnaire.fonction_actionnaire = req.body.fonction_actionnaire;
    if(req.body.resident_actionnaire) actionnaire.resident_actionnaire = req.body.resident_actionnaire;
    if(req.body.cin_passeport_actionnaire) actionnaire.cin_passeport_actionnaire = req.body.cin_passeport_actionnaire;
    if(req.body.adresse_actionnaire) actionnaire.adresse_actionnaire = req.body.adresse_actionnaire;
    if(req.body.autre_activite_actionnaire) actionnaire.autre_activite_actionnaire = req.body.autre_activite_actionnaire;
    if(req.body.nif_actionnaire) actionnaire.nif_actionnaire = req.body.nif_actionnaire;
    if(req.body.email_actionnaire) actionnaire.email_actionnaire = req.body.email_actionnaire;
    if(req.body.numero_actionnaire) actionnaire.numero_actionnaire = req.body.numero_actionnaire;
    if(req.body.associe_unique_actionnaire) actionnaire.associe_unique_actionnaire = req.body.associe_unique_actionnaire;
    if(req.body.action_ou_actionnaire) actionnaire.action_ou_actionnaire = req.body.action_ou_actionnaire;

    const filteredActionnaire = data.actionnaires.filter(act => act.id_actionnaire !== id_actionnaire);
    const unsortedActionnaire = [...filteredActionnaire, actionnaire];

    data.setActionnaires(unsortedActionnaire.sort((a, b) => a.id_siege > b.id_siege ? 1 : a.id_siege < b.id_siege ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'actionnaire.json'),
        JSON.stringify(data.actionnaires)
    )

    res.json({'success': 'mise à jour effectué'});
}

module.exports = {
    setActionnaire,
    getActionnaireById,
    getActionnaireByIdContribuable,
    updateActionnaire
}