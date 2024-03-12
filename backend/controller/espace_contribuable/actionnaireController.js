const data = {
    actionnaires: require('../../model/model_temp/actionnaire.json'),
    setActionnaires: function(data) {this.actionnaires = data},
    actions: require('../../model/actionnaire.json'),
    history_contribuable: require('../../model/history_contribuable.json'),
    setHistoryContribuable: function (data) { this.history_contribuable = data }
}

const path = require('path');
const fsPromises = require('fs').promises;

const setActionnaire = async (req, res) => {
    const newActionnaire = req.body.actionnaire;
    data.setActionnaires([...data.actionnaires, ...newActionnaire]);
    res.json(data.actionnaires);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'actionnaire.json'),
        JSON.stringify(data.actionnaires)
    )
}

const setOneActionnaireNonValide = async (req, res) => {
    const newActionnaire = {
        "id_contribuable": req.body.id_contribuable,
        "type_actionnaire": req.body.type_actionnaire,
        "nom_actionnaire": req.body.nom_actionnaire,
        "fonction_actionnaire": req.body.fonction_actionnaire,
        "resident_actionnaire": req.body.resident_actionnaire,
        "cin_passeport_actionnaire": req.body.cin_passeport_actionnaire,
        "adresse_actionnaire": req.body.adresse_actionnaire,
        "autre_activite_actionnaire": req.body.autre_activite_actionnaire,
        "nif_actionnaire": req.body.nif_actionnaire,
        "email_actionnaire": req.body.email_actionnaire,
        "numero_actionnaire": req.body.numero_actionnaire,
        "associe_unique_actionnaire": req.body.associe_unique_actionnaire,
        "action_ou_actionnaire": req.body.action_ou_actionnaire,
        "id_actionnaire": req.body.id_actionnaire
    }
    data.setActionnaires([...data.actionnaires, newActionnaire]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'actionnaire.json'),
        JSON.stringify(data.actionnaires)
    )
    res.json(data.actionnaires);
}

const deleteOneActionnaireNonValide = async (req, res) => {
    const id_actionnaire = req.params.id_actionnaire;
    const id_contribuable = req.body.id_contribuable;

    const actionnaire = data.actionnaires.find(act => act.id_actionnaire == id_actionnaire && act.id_contribuable == id_contribuable);
    if(!actionnaire)
        return res.status(404).json({'message': 'actionnaire not found'})
    const filteredActionnaire = data.actionnaires.filter(act => act.id_actionnaire != id_actionnaire && act.id_contribuable != id_contribuable);
    data.setActionnaires(filteredActionnaire);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'actionnaire.json'),
        JSON.stringify(data.actionnaires)
    )
    res.json(data.actionnaires);
}

const getActionnaireByIdContribuable = (req, res) => {
    const id_contribuable = req.params.id_contribuable;
    let actionnaires = [];
    data.actions.map(act => {
        if(act.id_contribuable == id_contribuable)
            actionnaires.push(act);
    })
    res.json(actionnaires);
    actionnaires = [];
}

const getActionnaireById = (req, res) => {
    const id_actionnaire = req.params.id_actionnaire;
    const actionnaire = data.actions.find(act => act.id_actionnaire == id_actionnaire);
    res.json(actionnaire);
}
 
const updateActionnaire = async (req, res) => {
    const id_actionnaire = req.params.id_actionnaire;
    const id_contribuable = req.body.id_contribuable;
    const actionnaire = data.actions.find(act => act.id_actionnaire == id_actionnaire && act.id_contribuable === id_contribuable);

    if(req.body.type) actionnaire.type = req.body.type;
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

const updateActionnaireByContribuable = async (req, res) => {
    const id_actionnaire = req.params.id_actionnaire;
    const id_contribuable = req.body.id_contribuable;
    const actionnaire = data.actions.find(act => act.id_actionnaire == id_actionnaire && act.id_contribuable === id_contribuable);

    if(req.body.type) actionnaire.type = req.body.type;
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

    const id_history_contribuable = data.history_contribuable.length === 0 ? 1 : data.history_contribuable[data.history_contribuable.length - 1].id_history_contribuable + 1;
    const history_contribuable = {
        'id_history_contribuable': id_history_contribuable,
        'id_contribuable': req.body.id_contribuable,
        'motif': 'Mise à jour actionnaire',
        'date_modification': new Date()
    }

    data.setHistoryContribuable([...data.history_contribuable, history_contribuable])
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'actionnaire.json'),
        JSON.stringify(data.actionnaires)
    )
    
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history_contribuable.json'),
        JSON.stringify(data.history_contribuable)
    )

    res.json({'success': 'mise à jour effectué'});
}

const updateActionnaireNonValide = async (req, res) => {
    const id_actionnaire = req.params.id_actionnaire;
    const id_contribuable = req.body.id_contribuable;
    const actionnaire = data.actionnaires.find(act => act.id == id_actionnaire && act.id_contribuable == id_contribuable);
    if(!actionnaire)
        return res.status(404).json({"message": "actoinnaire introuvable"})
    if(req.body.type) actionnaire.type = req.body.type;
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

    const filteredActionnaire = data.actionnaires.filter(act => act.id_actionnaire !== id_actionnaire && act.id_contribuable !== id_contribuable);
    const unsortedActionnaire = [...filteredActionnaire, actionnaire];

    data.setActionnaires(unsortedActionnaire);

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
    updateActionnaire,
    updateActionnaireNonValide,
    deleteOneActionnaireNonValide,
    setOneActionnaireNonValide,
    updateActionnaireByContribuable
}