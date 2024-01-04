const data = {
    contribuables: require('../../model/model_temp/contribuable.json'),
    setContribuable: function(data) {this.contribuables = data},
    contribs: require('../../model/contribuable.json'),
    setContribs: function(data) {this.contribs = data},
    modifications: require('../../model/modificationContribuable.json'),
    setModifications: function (data) { this.modifications },
    validation: require('../../model/validation.json'),
    setValidation: function (data) { this.validation = data },
    cessations: require('../../model/cessation_activite.json'),
    setCessations: function (data) { this.cessations = data },

    //Temp model
    actionnairesTemps: require('../../model/model_temp/actionnaire.json'),
    setActionnaireTemps: function (data) { this.actionnairesTemps = data},
    activiteTemps: require('../../model/model_temp/activite.json'),
    setActiviteTemps: function (data) { this.activiteTemps = data},
    dirigeantTemps: require('../../model/model_temp/dirigeant.json'),
    setDirigeantTemps: function (data) { this.dirigeantTemps = data },
    interlocuteurTemps: require('../../model/model_temp/interlocuteur.json'),
    setInterlocuteurTemps: function (data) { this.interlocuteurTemps = data },
    siegeTemps: require('../../model/model_temp/siege.json'),
    setSiegeTemps: function (data) { this.siegeTemps = data },
    
    //real model
    actionnaires: require('../../model/actionnaire.json'),
    setActionnaire: function (data) { this.actionnaires = data},
    activite: require('../../model/activite.json'),
    setActivite: function (data) { this.activite = data},
    dirigeant: require('../../model/dirigeant.json'),
    setDirigeant: function (data) { this.dirigeant = data },
    interlocuteur: require('../../model/interlocuteur.json'),
    setInterlocuteur: function (data) { this.interlocuteur = data },
    siege: require('../../model/siege.json'),
    setSiege: function (data) { this.siege = data }
}

const bcrypt = require('bcrypt');
const path = require('path');
const fsPromises = require('fs').promises;

const setContribuable = async (req, res) => {

    const id = req.body.id;
    
    const newContribuable = {
        "id": id,
        "raison_social": req.body.raisonsocial,
        "personne_physique": req.body.persnphys,
        "personne_morale": req.body.persnmorale,
        "situation_matrimoiniale": req.body.situationmatrimoinial,
        "sexe": req.body.sexe,
        "etranger": req.body.etranger,
        "date_de_delivrance": req.body.datedelivrance,
        "lieu_de_delivrance": req.body.lieudelivrance,
        "date_de_naissance": req.body.datenaissance,
        "lieu_de_naissance": req.body.lieunaissance,
        "forme_juridique": req.body.formejuridique,
        "regime_fiscal": req.body.regimefiscal,
        "date_agrement": req.body.dateagrement,
        "reference_agrement": req.body.referenceagrement,
        "periode_grace": req.body.periodegrace,
        "date_creation": req.body.datecreation,
        "capital": req.body.capital,
        "RIB": req.body.rib
    }

    data.setContribuable([...data.contribuables, newContribuable]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )

    res.json(data.contribuables);
}
   

const authContribuable = (req, res) => {
    const mot_de_passe = req.body.mot_de_passe;
    const id = req.body.id;

    const contribuable = data.contribs.map(con => con.id === id && con.mot_de_passe === mot_de_passe);

    if(!contribuable)
        return res.status(404).json({'message': 'contribuable introuvable'});

    res.json(contribuable);
}

const validationContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;

    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal);
    if(!contribuable)
        return res.status(400).json({'message': 'contribuable introuvable'});

    const filteredArray = data.contribuables.filter(con => con.reference_fiscal !== reference_fiscal);
    data.setContribuable(filteredArray);
    data.setContribs([...data.contribs, contribuable]);

    const id_validation = data.validation.length === 0 ? 1 : data.validation[data.validation.length - 1].id + 1;
    const validation = {
        "id_validation": id_validation,
        "id_contribuable": id,
        "validation": false
    }
    data.setValidation([...data.validation, validation]);

    const id_modification = data.modifications.length === 0 ? 1 : data.modifications[data.modifications.length - 1].id + 1;
    const modification = {
        "id_modification": id_modification,
        "id_contribuable": id,
        "nombre_modification": 0,
        "blockage": false,
        "date_blockage": ""
    }
    data.setModifications([...data.modifications, modification]);

    const id_cessation = data.cessations.length === 0 ? 1 : data.cessations[data.cessations.length - 1].id + 1;
    const cessation = {
        "id_cessation": id_cessation,
        "id_contribuable": id,
        "date_cessation": "",
        "cessation": false
    }
    data.setCessations([...data.cessations, cessation]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'validation.json'),
        JSON.stringify(data.modifications)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'modificationContribuable.json'),
        JSON.stringify(data.modifications)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'cessation_activite.json'),
        JSON.stringify(data.modifications)
    )
}

const updateContribuable = async (req, res) => {
    const contribuable = data.contribs.find(con => con.nif === req.body.nif);
    
    if(contribuable){
        return res.status(400).json({'message': 'contribuable not found'});
    }
    const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
    modification.nombre_modification =+ 1;

    if(req.body.nif) contribuable.nif = req.body.nif;
    if(req.body.raisonsocial) contribuable.raison_sociale = req.body.raisonsocial;
    if(req.body.nomcomm) contribuable.nom_commerciale = req.body.nomcomm;
    if(req.body.type) contribuable.type = req.body.type;
    if(req.body.formjuri) contribuable.forme_juridique = req.body.formjuri;
    if(req.body.regfisc) contribuable.regime_fiscal = req.body.regfisc;
    if(req.body.dateagrem) contribuable.date_agrement = req.body.dateagrem;
    if(req.body.refagrem) contribuable.reference_agrement = req.body.refagrem;
    if(req.body.periodgra) contribuable.periode_grace = req.body.periodgra;
    if(req.body.datecreation) contribuable.date_creation = req.body.datecreation;
    if(req.body.capital) contribuable.capital = req.body.capital;
    if(req.body.activite) contribuable.activite = req.body.activite;
    if(req.body.precactivite) contribuable.precision_activite = req.body.precactivite;
    if(req.body.datedemandemodif) contribuable.date_demande_modif = req.body.datedemandemodif;
    if(req.body.dateattribnif) contribuable.date_attribution_nif = req.body.dateattribnif;
    if(req.body.regcomm) contribuable.registre_commerce = req.body.regcomm;
    if(req.body.datereg) contribuable.date_registre = req.body.datereg;
    if(req.body.numstat) contribuable.numero_statistique = req.body.numstat;
    if(req.body.datedelivre) contribuable.delivree_le = req.body.datedelivre;
    if(req.body.datedebutexe) contribuable.date_debut_exe = req.body.datedebutexe;
    if(req.body.dateclotexe) contribuable.date_cloture_exe = req.body.dateclotexe;
    if(req.body.resident) contribuable.resident = req.body.resident;
    if(req.body.exportateur) contribuable.exportateur = req.body.exportateur;
    if(req.body.importateur) contribuable.importateur = req.body.importateur;
    if(req.body.rib) contribuable.rib = req.body.rib;
    if(req.body.province) contribuable.province = req.body.province;
    if(req.body.region) contribuable.region = req.body.region;
    if(req.body.district) contribuable.district = req.body.district;
    if(req.body.commune) contribuable.commune = req.body.commune;
    if(req.body.fokontany) contribuable.fokontany = req.body.fokontany;
    if(req.body.adress) contribuable.adresse = req.body.adress;
    if(req.body.nbsalarie) contribuable.nombre_salarie = req.body.nbsalarie;
    if(req.body.proprietaire) contribuable.proprietaire = req.body.proprietaire;
    if(req.body.typedemande) contribuable.type_demande = req.body.typedemande;
    if(req.body.dateacte) contribuable.date_acte = req.body.dateacte;
    if(req.body.dateacc) contribuable.date_accord = req.body.dateacc;
    if(req.body.titre) contribuable.titre = req.body.titre;
    if(modification.nombre_modification === 5){
        modification.blockage = true,
        modification.date_blockage = new Date();
    };

    const filteredArray = data.contribs.filter(cli => cli.nif !== req.body.nif);
    const unsortedArray = [...filteredArray, contribuable];
    data.setContribs(unsortedArray.sort((a, b)=> a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

    const filteredModif = data.modifications.filter(mod => mod.id_contribuable !== contribuable.id);
    const unsortedModif = [...filteredModif, modification];
    data.setModifications(unsortedModif.sort((a, b) => a.id_modification > b.id_modification ? 1 : a.id_modification < b.id_modification ? -1 : 0));
    
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'modificationContribuable.json'),
        JSON.stringify(data.contribs)
    )
    res.json(data.contribs);
}

const getContribuablebloque = (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal);

    if(!contribuable)
        return res.status(400).json({'message': 'contribuable introuvable'})
    const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
    
    if(modification.blockage)
        res.json(contribuable);
    else   
        res.json({'message': 'aucun contribuable bloqué'});
}

const getContribuableNonBloque = (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal);

    if(!contribuable)
        return res.status(400).json({'message': 'contribuable introuvable'})
    const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
    
    if(!modification.blockage)
        res.json(contribuable);
    else   
        res.json({'message': 'aucun contribuable bloqué'});
}

const validationMiseAJour = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;

    const mise_a_jour_contribuable = data.contribuables.find(con => con.nif === reference_fiscal);
    if(!mise_a_jour_contribuable)
        return res.status(400).json({'message': 'mise à jour introuvable'});

    const filteredArray = data.contribs.filter(con => con.reference_fiscal !== reference_fiscal);
    const unsortedArray = [...filteredArray, mise_a_jour_contribuable];

    const filteredContribuable = data.contribuables.filter(con => con.reference_fiscal !== reference_fiscal);

    data.setContribs(unsortedArray.sort((a, b)=> a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    data.setContribuable(filteredContribuable);
    
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )

    res.json(data.contribs);
}


module.exports = {
    setContribuable,
    authContribuable,
    updateContribuable,
    getContribuableNonBloque,
    getContribuablebloque,
    validationMiseAJour,
    validationContribuable
}