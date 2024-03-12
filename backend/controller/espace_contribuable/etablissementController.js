const data = {
    etablissements: require('../../model/model_temp/etablissement.json'),
    setEtablissements: function (data) { this.etablissements = data },
    etablisseme: require('../../model/etablissement.json'),
    history_contribuable: require('../../model/history_contribuable.json'),
    setHistoryContribuable: function (data) { this.history_contribuable = data }
}

const path = require('path');
const fsPromises = require('fs').promises;

const setEtablissements = async (req, res) => {
    const etablissement = req.body.etablissement;

    data.setEtablissements([...data.etablissements, ...etablissement]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'etablissement.json'),
        JSON.stringify(data.etablissements)
    )

        res.json(etablissement);
}

const getEtablissementById = (req, res) => {
    const id_etablissement = data.params.id_etablissement;
    const etablissement = data.etablissements.find(eta => eta.id == id_etablissement);
    res.json(etablissement);
}

const getEtablissementByIdContribuable = (req, res) => {
    const id_contribuable = req.params.id_contribuable;
    const etablissement = data.etablissements.find(eta => eta.id_contribuable == id_contribuable);
    res.json(etablissement);
}

const updateEtablissement = async (req, res) => {
    const id_etablissement = req.params.id_etablissement;
    const id_contribuable = req.body.id_contribuable;
    const etablissement = data.etablisseme.find(eta => eta.id == id_etablissement && eta.id_contribuable === id_contribuable);

    if(req.body.nom_commercial) etablissement.nom_commercial = req.body.nom_commercial;
    if(req.body.activite) etablissement.activite = req.body.activite;
    if(req.body.titre) etablissement.titre = req.body.titre;
    if(req.body.date_ouverture) etablissement.date_ouverture = req.body.date_ouverture;
    if(req.body.adresse) etablissement.adresse = req.body.adresse;
    if(req.body.fokontany) etablissement.fokontany = req.body.fokontany;
    if(req.body.province) etablissement.province = req.body.province;
    if(req.body.region) etablissement.province = req.body.region;
    if(req.body.district) etablissement.district = req.body.district;
    if(req.body.commune) etablissement.commune = req.body.commune;
    if(req.body.telephone) etablissement.telephone = req.body.telephone;
    if(req.body.autre_telephone) etablissement.autre_telephone = req.body.autre_telephone;
    if(req.body.fax) etablissement.fax = req.body.fax;
    if(req.body.email) etablissement.email = req.body.email;
    if(req.body.proprietaire_local) etablissement.proprietaire_local = req.body.proprietaire_local;
    if(req.body.type_proprietaire) etablissement.type_proprietaire = req.body.type_proprietaire;
    if(req.body.nif_proprietaire) etablissement.nif_proprietaire = req.body.nif_proprietaire;

 

    const filteredEtablissement = data.etablissements.filter(eta => eta.id != id_etablissement && eta.id_contribuable != id_contribuable);
    const unsortedEtablissement = [...filteredEtablissement, etablissement];
    data.setEtablissements(unsortedEtablissement.sort((a, b) => a.id > b.id_etablissement ? 1 : a.id < b.id_etablissement ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'etablissement.json'),
        JSON.stringify(data.etablissements)
    )

    res.json(etablissement);

}

const updateEtablissementByContribuable = async (req, res) => {
    const id_etablissement = req.params.id_etablissement;
    const id_contribuable = req.body.id_contribuable;
    const etablissement = data.etablisseme.find(eta => eta.id == id_etablissement && eta.id_contribuable === id_contribuable);

    if(req.body.nom_commercial) etablissement.nom_commercial = req.body.nom_commercial;
    if(req.body.activite) etablissement.activite = req.body.activite;
    if(req.body.activite) etablissement.activite = req.body.activite;
    if(req.body.titre) etablissement.titre = req.body.titre;
    if(req.body.date_ouverture) etablissement.date_ouverture = req.body.date_ouverture;
    if(req.body.adresse) etablissement.adresse = req.body.adresse;
    if(req.body.fokontany) etablissement.fokontany = req.body.fokontany;
    if(req.body.province) etablissement.province = req.body.province;
    if(req.body.region) etablissement.province = req.body.region;
    if(req.body.district) etablissement.district = req.body.district;
    if(req.body.commune) etablissement.commune = req.body.commune;
    if(req.body.telephone) etablissement.telephone = req.body.telephone;
    if(req.body.autre_telephone) etablissement.autre_telephone = req.body.autre_telephone;
    if(req.body.fax) etablissement.fax = req.body.fax;
    if(req.body.email) etablissement.email = req.body.email;
    if(req.body.proprietaire_local) etablissement.proprietaire_local = req.body.proprietaire_local;
    if(req.body.type_proprietaire) etablissement.type_proprietaire = req.body.type_proprietaire;
    if(req.body.nif_proprietaire) etablissement.nif_proprietaire = req.body.nif_proprietaire;

 

    const filteredEtablissement = data.etablissements.filter(eta => eta.id != id_etablissement && eta.id_contribuable != id_contribuable);
    const unsortedEtablissement = [...filteredEtablissement, etablissement];
    data.setEtablissements(unsortedEtablissement.sort((a, b) => a.id > b.id_etablissement ? 1 : a.id < b.id_etablissement ? -1 : 0));


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
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'etablissement.json'),
        JSON.stringify(data.etablissements)
    )

    res.json(etablissement);

}


const deleteEtablissementNonValide = async (req, res) => {
    const id_etablissement = req.params.id_etablissement;
    const id_contribuable = req.body.id_contribuable;
    const etablissement = data.etablissements.find(etab => etab.id_etablissement == id_etablissement && etab.id_contribuable == id_contribuable);
    if(!etablissement)
        return res.status(404).json({'message': 'etablissement not found'});
    const filteredEtablissement = data.etablissements.filter(etab => etab.id_contribuable != id_contribuable && etab.id_etablissement != id_etablissement);
    setEtablissements(filteredEtablissement);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'etablissement.json'),
        JSON.stringify(data.etablissements)
    )
    res.json(data.etablissements);
}

const setOneEtablissementNonValide = async (req, res) => {
    const newEtablissement = {
    "nom_commercial": req.body.nom_commercial,
    "activite": req.body.activite,
    "activite": req.body.activite,
    "titre": req.body.titre,
    "date_ouverture": req.body.date_ouverture,
    "adresse": req.body.adresse,
    "fokontany": req.body.fokontany,
    "province": req.body.province,
    "province": req.body.region,
    "district": req.body.district,
    "commune": req.body.commune,
    "telephone": req.body.telephone,
    "autre_telephone": req.body.autre_telephone,
    "fax": req.body.fax,
    "email": req.body.email,
    "proprietaire_local": req.body.proprietaire_local,
    "type_proprietaire": req.body.type_proprietaire,
    "nif_proprietaire": req.body.nif_proprietaire

    }
    data.setEtablissements([...data.etablissements, newEtablissement])
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'etablissement.json'),
        JSON.stringify(data.etablissements)
    )
    res.json(data.etablissements);
}

const updateEtablissementAValide = async (req, res) => {
    const id_etablissement = req.params.id_etablissement;
    const id_contribuable = req.body.id_contribuable;
    const etablissement = data.etablissements.find(eta => eta.id == id_etablissement && eta.id_contribuable == id_contribuable);

    console.log(id_etablissement, id_contribuable);

    if(!etablissement)
        return res.status(404).json({'message': 'etablissement introuvable'});

    if(req.body.nom_commercial) etablissement.nom_commercial = req.body.nom_commercial;
    if(req.body.activite) etablissement.activite = req.body.activite;
    if(req.body.activite) etablissement.activite = req.body.activite;
    if(req.body.titre) etablissement.titre = req.body.titre;
    if(req.body.date_ouverture) etablissement.date_ouverture = req.body.date_ouverture;
    if(req.body.adresse) etablissement.adresse = req.body.adresse;
    if(req.body.fokontany) etablissement.fokontany = req.body.fokontany;
    if(req.body.province) etablissement.province = req.body.province;
    if(req.body.region) etablissement.province = req.body.region;
    if(req.body.district) etablissement.district = req.body.district;
    if(req.body.commune) etablissement.commune = req.body.commune;
    if(req.body.telephone) etablissement.telephone = req.body.telephone;
    if(req.body.autre_telephone) etablissement.autre_telephone = req.body.autre_telephone;
    if(req.body.fax) etablissement.fax = req.body.fax;
    if(req.body.email) etablissement.email = req.body.email;
    if(req.body.proprietaire_local) etablissement.proprietaire_local = req.body.proprietaire_local;
    if(req.body.type_proprietaire) etablissement.type_proprietaire = req.body.type_proprietaire;
    if(req.body.nif_proprietaire) etablissement.nif_proprietaire = req.body.nif_proprietaire;

 

    const filteredEtablissement = data.etablissements.filter(eta => eta.id != id_etablissement && eta.id_contribuable != id_contribuable);
    const unsortedEtablissement = [...filteredEtablissement, etablissement];
    data.setEtablissements(unsortedEtablissement);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'etablissement.json'),
        JSON.stringify(data.etablissements)
    )

    res.json(etablissement);

}

module.exports = {
    setEtablissements,
    getEtablissementById,
    getEtablissementByIdContribuable,
    updateEtablissement,
    updateEtablissementAValide,
    deleteEtablissementNonValide,
    setOneEtablissementNonValide,
    updateEtablissementByContribuable
}