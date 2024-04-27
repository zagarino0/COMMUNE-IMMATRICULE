const data = {
    dirigeants: require('../../model/model_temp/dirigeant.json'),
    setDirigeants: function(data) {this.dirigeants = data},
    diriges: require('../../model/dirigeant.json'),
    history_contribuable: require('../../model/history_contribuable.json'),
    setHistoryContribuable: function (data) {this.history_contribuable = data}
}

const path = require('path');
const fsPromises = require('fs').promises;

const setDirigeant = async (req, res) => {
    const newDirigeant = req.body.dirigeant;
    
    data.setDirigeants([...data.dirigeants, ...newDirigeant]);
    res.json(data.dirigeants);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'dirigeant.json'),
        JSON.stringify(data.dirigeants)
    )

}

const setOneDirigeantNonValide = async (req, res) => {
    const newDirigeant = {
        "associe_unique": req.body.associe_unique,
        "resident": req.body.resident,
        "avec_rf": req.body.avec_rf,
        "salarie": req.body.salarie,
        "aucune": req.body.aucune,
        "nom": req.body.nom,
        "fonction": req.body.fonction,
        "cin": req.body.cin,
        "passport": req.body.passport,
        "adresse": req.body.adresse,
        "rf": req.body.rf,
        "email": req.body.email,
        "fax_dirigeant": req.body.fax_dirigeant,
        "email_dirigeant": req.body.email_dirigeant,
        "proprietaire_local_dirigeant": req.body.proprietaire_local_dirigeant
    }    
    data.setDirigeants([...data.dirigeants, newDirigeant]);
    res.json(data.dirigeants);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'dirigeant.json'),
        JSON.stringify(data.dirigeants)
    )

}

const deleteDirigeantsNonValide = async (req, res) => {
    const id_dirigeant = req.params.id_dirigeant;
    const id_contribuable = req.body.id_contribuable;
    const dirigeant = data.dirigeants.find(dir => dir.id == id_dirigeant && dir.id_contribuable == id_contribuable);
    if(!dirigeant)
        return res.status(404).json({'message': 'dirigeant not found'});
    const filteredDirigeant = data.dirigeants.filter(dir => dir.id != id_dirigeant && dir.id_contribuable != id_contribuable);
    data.setDirigeants(filteredDirigeant);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'dirigeant.json'),
        JSON.stringify(data.dirigeants)
    )
    res.json(data.dirigeants);
} 

const getDirigeantById = (req, res) => {
    const id_dirigeant = req.params.id_dirigeant;
    const dirigeant = data.diriges.find(dir => dir.id == id_dirigeant);
    res.json(dirigeant);
}

const getDirigeantByIdContribuable = (req, res) => {
    const id_contribuable = req.params.id_contribuable;
    let dirigeants = [];

    data.diriges.map(dir => {
        if(dir.id_contribuable === id_contribuable)
            dirigeants.push(dir);
    });

    res.json(dirigeants);
    dirigeants = [];
}

const updateDirigeant = async (req, res) => {
    const id_dirigeant = req.params.id_dirigeant;
    const id_contribuable = req.body.id_contribuable
    const dirigeant = data.diriges.find(dir => dir.id == id_dirigeant && dir.id_contribuable === id_contribuable);

    if(req.body.associe_unique) dirigeant.associe_unique = req.body.associe_unique;
    if(req.body.resident) dirigeant.resident = req.body.resident;
    if(req.body.avec_rf) dirigeant.avec_rf = req.body.avec_rf;
    if(req.body.salarie) dirigeant.salarie = req.body.salarie;
    if(req.body.aucune) dirigeant.aucune = req.body.aucune;
    if(req.body.nom) dirigeant.nom = req.body.nom;
    if(req.body.fonction) dirigeant.fonction = req.body.fonction;
    if(req.body.cin) dirigeant.cin = req.body.cin;
    if(req.body.passport) dirigeant.passport = req.body.passport;
    if(req.body.adresse) dirigeant.adresse = req.body.adresse;
    if(req.body.rf) dirigeant.rf = req.body.rf;
    if(req.body.email) dirigeant.email = req.body.email;
    if(req.body.telephone) dirigeant.fax_dirigeant = req.body.fax_dirigeant;


    const filteredDirigeant = data.dirigeants.filter(dir => dir.id != id_dirigeant && dir.id_contribuable != id_contribuable);
    const unsortedDirigeant = [...filteredDirigeant, dirigeant];

    data.setDirigeants(unsortedDirigeant.sort((a, b) => a.id_dirigeant > b.id_dirigeant ? 1 : a.id_dirigeant < b.id_dirigeant ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'dirigeant.json'),
        JSON.stringify(data.dirigeants)
    )
        res.json({'success': 'Modification effectué'});
}

const updateDirigeantByContribuable = async (req, res) => {
    const id_dirigeant = req.params.id_dirigeant;
    const id_contribuable = req.body.id_contribuable
    const dirigeant = data.diriges.find(dir => dir.id == id_dirigeant && dir.id_contribuable === id_contribuable);

    if(req.body.associe_unique) dirigeant.associe_unique = req.body.associe_unique;
    if(req.body.resident) dirigeant.resident = req.body.resident;
    if(req.body.avec_rf) dirigeant.avec_rf = req.body.avec_rf;
    if(req.body.salarie) dirigeant.salarie = req.body.salarie;
    if(req.body.aucune) dirigeant.aucune = req.body.aucune;
    if(req.body.nom) dirigeant.nom = req.body.nom;
    if(req.body.fonction) dirigeant.fonction = req.body.fonction;
    if(req.body.cin) dirigeant.cin = req.body.cin;
    if(req.body.passport) dirigeant.passport = req.body.passport;
    if(req.body.adresse) dirigeant.adresse = req.body.adresse;
    if(req.body.rf) dirigeant.rf = req.body.rf;
    if(req.body.email) dirigeant.email = req.body.email;
    if(req.body.telephone) dirigeant.fax_dirigeant = req.body.fax_dirigeant;


    const filteredDirigeant = data.dirigeants.filter(dir => dir.id !== id_dirigeant && dir.id_contribuable !== id_contribuable);
    const unsortedDirigeant = [...filteredDirigeant, dirigeant];

    data.setDirigeants(unsortedDirigeant.sort((a, b) => a.id_dirigeant > b.id_dirigeant ? 1 : a.id_dirigeant < b.id_dirigeant ? -1 : 0));

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
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'dirigeant.json'),
        JSON.stringify(data.dirigeants)
    )
        res.json({'success': 'Modification effectué'});
}

const updateDirigeantAValide = async (req, res) => {
    const id_dirigeant = req.params.id_dirigeant;
    const id_contribuable = req.body.id_contribuable
    const dirigeant = data.dirigeants.find(dir => dir.id == id_dirigeant && dir.id_contribuable == id_contribuable);

    if(req.body.associe_unique) dirigeant.associe_unique = req.body.associe_unique;
    if(req.body.resident) dirigeant.resident = req.body.resident;
    if(req.body.avec_rf) dirigeant.avec_rf = req.body.avec_rf;
    if(req.body.salarie) dirigeant.salarie = req.body.salarie;
    if(req.body.aucune) dirigeant.aucune = req.body.aucune;
    if(req.body.nom) dirigeant.nom = req.body.nom;
    if(req.body.fonction) dirigeant.fonction = req.body.fonction;
    if(req.body.cin) dirigeant.cin = req.body.cin;
    if(req.body.passport) dirigeant.passport = req.body.passport;
    if(req.body.adresse) dirigeant.adresse = req.body.adresse;
    if(req.body.rf) dirigeant.rf = req.body.rf;
    if(req.body.email) dirigeant.email = req.body.email;
    if(req.body.telephone) dirigeant.fax_dirigeant = req.body.fax_dirigeant;

    const filteredDirigeant = data.dirigeants.filter(dir => dir.id !== id_dirigeant && dir.id_contribuable !== id_contribuable);
    const unsortedDirigeant = [...filteredDirigeant, dirigeant];

    data.setDirigeants(unsortedDirigeant);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'dirigeant.json'),
        JSON.stringify(data.dirigeants)
    )
        res.json({'success': 'Modification effectué'});
}

module.exports = {
    setDirigeant,
    getDirigeantById,
    getDirigeantByIdContribuable,
    updateDirigeant,
    updateDirigeantAValide,
    setOneDirigeantNonValide,
    deleteDirigeantsNonValide,
    updateDirigeantByContribuable
}