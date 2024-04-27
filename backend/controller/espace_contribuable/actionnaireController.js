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
        "id": req.body.id,
        "id_contribuable": req.body.id_contribuable,
        "type": req.body.type,
        "nom": req.body.nom,
        "fonction": req.body.fonction,
        "resident": req.body.resident,
        "cin_passeport": req.body.cin_passeport,
        "adresse": req.body.adresse,
        "autre_activite": req.body.autre_activite,
        "siege": req.body.siege,
        "gerant": req.body.gerant,
        "cin_ou_passeport_gerant": req.body.cin_ou_passeport_gerant,
        "nif": req.body.nif,
        "email": req.body.email,
        "numero": req.body.numero,
        "associe_unique": req.body.associe_unique,
        "action_ou": req.body.action_ou
    }
    data.setActionnaires([...data.actionnaires, newActionnaire]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'actionnaire.json'),
        JSON.stringify(data.actionnaires)
    )
    res.json(data.actionnaires);
}

const deleteOneActionnaireNonValide = async (req, res) => {
    const id = req.params.id;
    const id_contribuable = req.body.id_contribuable;

    const actionnaire = data.actionnaires.find(act => act.id == id && act.id_contribuable == id_contribuable);
    if(!actionnaire)
        return res.status(404).json({'message': 'actionnaire not found'})
    const filteredActionnaire = data.actionnaires.filter(act => act.id != id && act.id_contribuable != id_contribuable);
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
    const id = req.params.id;
    const actionnaire = data.actions.find(act => act.id == id);
    res.json(actionnaire);
}
 
const updateActionnaire = async (req, res) => {
    const id = req.params.id;
    const id_contribuable = req.body.id_contribuable;
    const actionnaire = data.actions.find(act => act.id == id && act.id_contribuable === id_contribuable);

    if(req.body.type) actionnaire.type = req.body.type;
    if(req.body.nom) actionnaire.nom = req.body.nom;
    if(req.body.fonction) actionnaire.fonction = req.body.fonction;
    if(req.body.resident) actionnaire.resident = req.body.resident;
    if(req.body.cin_passeport) actionnaire.cin_passeport = req.body.cin_passeport;
    if(req.body.adresse) actionnaire.adresse = req.body.adresse;
    if(req.body.autre_activite) actionnaire.autre_activite = req.body.autre_activite;
    if(req.body.nif) actionnaire.nif = req.body.nif;
    if(req.body.email) actionnaire.email = req.body.email;
    if(req.body.numero) actionnaire.numero = req.body.numero;
    if(req.body.associe_unique) actionnaire.associe_unique = req.body.associe_unique;
    if(req.body.action_ou) actionnaire.action_ou = req.body.action_ou;
    if(req.body.siege) actionnaire.siege = req.body.siege;
    if(req.body.gerant) actionnaire.gerant = req.body.gerant;
    if(req.body.cin_ou_passeport_gerant) actionnaire.cin_ou_passeport_gerant = req.body.cin_ou_passeport_gerant;


    const filteredActionnaire = data.actionnaires.filter(act => act.id != id && act.id_contribuable != id_contribuable);
    const unsortedActionnaire = [...filteredActionnaire, actionnaire];

    data.setActionnaires(unsortedActionnaire);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'actionnaire.json'),
        JSON.stringify(data.actionnaires)
    )

    res.json({'success': 'mise à jour effectué'});
}

const updateActionnaireByContribuable = async (req, res) => {
    const id = req.params.id;
    const id_contribuable = req.body.id_contribuable;
    const actionnaire = data.actions.find(act => act.id == id && act.id_contribuable === id_contribuable);

    if(req.body.type) actionnaire.type = req.body.type;
    if(req.body.nom) actionnaire.nom = req.body.nom;
    if(req.body.fonction) actionnaire.fonction = req.body.fonction;
    if(req.body.resident) actionnaire.resident = req.body.resident;
    if(req.body.cin_passeport) actionnaire.cin_passeport = req.body.cin_passeport;
    if(req.body.adresse) actionnaire.adresse = req.body.adresse;
    if(req.body.autre_activite) actionnaire.autre_activite = req.body.autre_activite;
    if(req.body.nif) actionnaire.nif = req.body.nif;
    if(req.body.email) actionnaire.email = req.body.email;
    if(req.body.numero) actionnaire.numero = req.body.numero;
    if(req.body.associe_unique) actionnaire.associe_unique = req.body.associe_unique;
    if(req.body.action_ou) actionnaire.action_ou = req.body.action_ou;
    if(req.body.siege) actionnaire.siege = req.body.siege;
    if(req.body.gerant) actionnaire.gerant = req.body.gerant;
    if(req.body.cin_ou_passeport_gerant) actionnaire.cin_ou_passeport_gerant = req.body.cin_ou_passeport_gerant;

    const filteredActionnaire = data.actionnaires.filter(act => act.id != id && act.id_contribuable != id_contribuable);
    const unsortedActionnaire = [...filteredActionnaire, actionnaire];

    data.setActionnaires(unsortedActionnaire);

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
    const id = req.params.id;
    const id_contribuable = req.body.id_contribuable;
    const actionnaire = data.actionnaires.find(act => act.id == id && act.id_contribuable == id_contribuable);
    if(!actionnaire)
        return res.status(404).json({"message": "actoinnaire introuvable"})
    if(req.body.type) actionnaire.type = req.body.type;
    if(req.body.nom) actionnaire.nom = req.body.nom;
    if(req.body.fonction) actionnaire.fonction = req.body.fonction;
    if(req.body.resident) actionnaire.resident = req.body.resident;
    if(req.body.cin_passeport) actionnaire.cin_passeport = req.body.cin_passeport;
    if(req.body.adresse) actionnaire.adresse = req.body.adresse;
    if(req.body.autre_activite) actionnaire.autre_activite = req.body.autre_activite;
    if(req.body.nif) actionnaire.nif = req.body.nif;
    if(req.body.email) actionnaire.email = req.body.email;
    if(req.body.numero) actionnaire.numero = req.body.numero;
    if(req.body.associe_unique) actionnaire.associe_unique = req.body.associe_unique;
    if(req.body.action_ou) actionnaire.action_ou = req.body.action_ou;
    if(req.body.siege) actionnaire.siege = req.body.siege;
    if(req.body.gerant) actionnaire.gerant = req.body.gerant;
    if(req.body.cin_ou_passeport_gerant) actionnaire.cin_ou_passeport_gerant = req.body.cin_ou_passeport_gerant;
    
    const filteredActionnaire = data.actionnaires.filter(act => act.id != id && act.id_contribuable != id_contribuable);
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