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
    validationTemps: require('../../model/model_temp/validation.json'),
    setValidationTemps: function (data) { this.validationTemps = data },
    autresTemps: require('../../model/model_temp/autre.json'),
    setAutresTemps: function (data) { this.autresTemps = data },
    
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
    setSiege: function (data) { this.siege = data },
    autres: require('../../model/autre.json'),
    setAutres: function (data) {this.autres = data},

    //Rejet
    rejetContribuable: require('../../model/model_delete/contribuable.json'),
    setRejetContribuable: function (data) { this.rejetContribuable = data },
    rejetActionnaire: require('../../model/model_delete/actionnaire'),
    setRejetActionnaire: function (data) { this.rejetActionnaire  = data },
    rejetActivite: require('../../model/model_delete/activite.json'),
    setRejetActivite: function (data) {this.rejetActivite = data},
    rejetAutres: require('../../model/model_delete/autre.json')

}

const bcrypt = require('bcrypt');

const random = require('../../utils/random');

const path = require('path');
const fsPromises = require('fs').promises;

const setContribuable = async (req, res) => {

    const id = req.body.id;
    const reference_fiscal = data.contribs.length === 0 ? 1 : data.contribs[data.contribs.length - 1].id + 1;
    const nombre_zero = ( data.contribs.length < 10 ) ? '00000000' : ((data.contribs.length >= 10 && data.contribs.length < 100) ? '0000000' : ((data.contribs.length >= 100 && data.contribs.length < 1000) ? '000000' : ((data.contribs.length >= 1000 && data.contribs.length < 10000) ? '00000' : ((data.contribs.length >= 10000 && data.contribs.length < 100000) ? '0000' : ((data.contribs.length >= 100000 && data.contribs.length < 1000000) ? '000' : ((data.contribs.length >= 1000000 && data.contribs.length < 10000000) ? '00' : ((data.contribs.length >= 10000000 && data.contribs.length < 100000000) ? '0' : '')))))));
    
    const newContribuable = {
        "id": id,
        "raison_social": req.body.raisonsocial,
        "reference_fiscal": nombre_zero + '' + reference_fiscal,
        "type": req.body.type,
        "situation_matrimoiniale": req.body.situationmatrimoinial,
        "cin": req.body.cin,
        "sexe": req.body.sexe,
        "etranger": req.body.etranger,
        "numero_passeport": req.body.numero_passeport,
        "date_de_delivrance_passeport": req.body.datedelivrancepasseport,
        "date_de_delivrance_cin": req.body.datedelivrancecin,
        "lieu_de_delivrance_cin": req.body.lieudelivrancecin,
        "date_de_naissance": req.body.datenaissance,
        "lieu_de_naissance": req.body.lieunaissance,
        "forme_juridique": req.body.formejuridique,
        "regime_fiscal": req.body.regimefiscal,
        "date_agrement": req.body.dateagrement,
        "reference_agrement": req.body.referenceagrement,
        "periode_grace": req.body.periodegrace,
        "date_creation": req.body.datecreation,
        "capital": req.body.capital,
        "RIB": req.body.rib,
        "actif": false
    }

    const id_validation = data.validation.length === 0 ? 1 : data.validation[data.validation.length - 1].id + 1;

    const validation = {
        "id_validation": id_validation,
        "id_contribuable": id,
        "validation": false
    }

    const id_modification = data.modifications.length === 0 ? 1 : data.modifications[data.modifications.length - 1].id + 1;

    const modification = {
        "id_modification": id_modification,
        "id_contribuable": id,
        "nombre_modification": 0,
        "blockage": false,
        "date_blockage": ""
    }

    const id_cessation = data.cessations.length === 0 ? 1 : data.cessations[data.cessations.length - 1].id + 1;
    const cessation = {
        "id_cessation": id_cessation,
        "id_contribuable": id,
        "date_cessation": "",
        "cessation": false
    }


    data.setContribuable([...data.contribuables, newContribuable]);
    data.setModifications([...data.modifications, modification]);
    data.setValidation([...data.validation, validation]);
    data.setCessations([...data.cessations, cessation]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'modificationContribuable.json'),
        JSON.stringify(data.modifications)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'validation.json'),
        JSON.stringify(data.modifications)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'cessation_activite.json'),
        JSON.stringify(data.modifications)
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

    //effacement du contribuable du données temporaire et migration du données dans la base réel
    const filteredArray = data.contribuables.filter(con => con.reference_fiscal !== reference_fiscal);
    contribuaable.actif = true;

    data.setContribuable(filteredArray);
    data.setContribs([...data.contribs, contribuable]);

    //validation vers les données réel
    const validation = data.validationTemps.find(val => val.id_contribuable === contribuable.id);
    validation.validation = true;
    const filterdValidation = data.validationTemps.filter(val => val.id_contribuable !== contribuable.id);
    data.setValidationTemps(filterdValidation);
    data.setValidation([...data.validation, validation]);

    //Actionnaire
    const actionnaire = data.actionnairesTemps.find(act => act.id_contribuable === contribuable.id);
    const filtederActionnaire = data.actionnairesTemps.filter(act => act.id_contribuable !== contribuable.id)
    data.setActionnaireTemps(filtederActionnaire);
    data.setActionnaire([...data.actionnaires, actionnaire]);

    //dirigeant
    const dirigeant = data.dirigeantTemps.find(dir => dir.id_contribuable === contribuable.id);
    const filteredDirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable !== contribuable.id);
    data.setDirigeantTemps(filteredDirigeant);
    data.setDirigeant([...data.dirigeant, dirigeant]);

    //activite
    const activite = data.activiteTemps.find(act => act.id_contribuable === contribuable.id);
    const filteredActivite = data.activiteTemps.filter(act => act.id_contribuable !== contribuable.id);
    data.setActiviteTemps(filteredActivite);
    data.setActivite([...data.activite, activite]);

    //interlocuteur
    const interlocuteur = data.interlocuteurTemps.find(inter => inter.id_contribuable === contribuable.id);
    const filteredInterlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable !== contribuable.id);
    data.setInterlocuteurTemps(filteredInterlocuteur);
    data.setInterlocuteur([...data.interlocuteur, interlocuteur]);

    //siege
    const siege = data.siegeTemps.find(sie => sie.id_contribuable === contribuable.id);
    const filteredSiege = data.siegeTemps.filter(sie => sie.id_contribuable !== contribuable.id);
    data.setSiegeTemps(filteredSiege);
    data.setSiege([...data.siege, siege]);

    //autre
    const autre = data.autresTemps.find(aut => aut.id_contribuable === contribuable.id);
    const filteredAutres = data.autresTemps.filter(aut => aut.id_contribuable !== contribuable.id);
    data.setAutresTemps(filteredAutres);
    data.setAutres([...data.autres, autre]);


    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'actionnaire.json'),
        JSON.stringify(data.actionnaires)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'actionnaire.json'),
        JSON.stringify(data.actionnairesTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'activite.json'),
        JSON.stringify(data.activite)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'activite.json'),
        JSON.stringify(data.activiteTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'dirigeant.json'),
        JSON.stringify(data.dirigeant)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'dirigeant.json'),
        JSON.stringify(data.dirigeantTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'interlocuteur.json'),
        JSON.stringify(data.interlocuteur)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'interlocuteur.json'),
        JSON.stringify(data.interlocuteurTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'siege.json'),
        JSON.stringify(data.siege)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'siege.json'),
        JSON.stringify(data.siegeTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'autre.json'),
        JSON.stringify(data.autresTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'autre.json'),
        JSON.stringify(data.autres)
    )

    res.json({"message": `Le contribuable dont l'id ${contribuable.id} est validé`});
}

const updateContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal);
    const validation = data.validation.find(val => val.id_contribuable === contribuable.id);
    const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);

    if(contribuable){
        return res.status(400).json({'message': 'contribuable not found'});
    }

    if(req.body.raisonsocial) contribuable.raison_social = req.body.raisonsocial;
    if(req.body.situationmatrimoinial) contribuable.situation_matrimoiniale = req.body.situationmatrimoinial;
    if(req.body.sexe) contribuable.sexe = req.body.sexe;
    if(req.body.cin) contribuable.cin = req.body.cin;
    if(req.body.etranger) contribuable.etranger = req.body.etranger;
    if(req.body.numeropasseport) contribuable.numero_passeport = req.body.numeropasseport;
    if(req.body.carteresidence) contribuable.carte_residence = req.body.carteresidence;
    if(req.body.datedelivrancepasseport) contribuable.date_de_delivrance_passeport = req.body.datedelivrancepasseport;
    if(req.body.datedelivrancecin) contribuable.date_de_delivrance_cin = req.body.datedelivrancecin;
    if(req.body.lieudelivrancecin) contribuable.lieu_de_delivrance_cin = req.body.lieudelivrancecin;
    if(req.body.datenaissance) contribuable.date_de_naissance = req.body.datenaissance;
    if(req.body.lieunaissance) contribuable.lieu_de_naissance = req.body.lieunaissance;
    if(req.body.formejuridique) contribuable.forme_juridique = req.body.formejuridique;
    if(req.body.regimefiscal) contribuable.regime_fiscal = req.body.regimefiscal;
    if(req.body.dateagrement) contribuable.date_agrement = req.body.dateagrement;
    if(req.body.referenceagrement) contribuable.reference_agrement = req.body.referenceagrement;
    if(req.body.periodegrace) contribuable.periode_grace = req.body.periodegrace;
    if(req.body.datecreation) contribuable.date_creation = req.body.datecreation;
    if(req.body.capital) contribuable.capital = req.body.capital;
    if(req.body.rib) contribuable.rib = req.body.rib;
    contribuable.actif = true;

    modification.nombre_modification =+ 1;
    if(modification.nombre_modification === 5){
        modification.blockage = true,
        modification.date_blockage = new Date();
    };

    validation.validation = false;
    
    const filteredModif = data.modifications.filter(mod => mod.id_contribuable !== contribuable.id);
    const unsortedModif = [...filteredModif, modification];
    
    const filteredValidation = data.validation.filter(val => val.id_contribuable !== contribuable.id);
    const unsortedValidation = [...filteredValidation, validation];
    
    data.setValidation(unsortedValidation.sort((a, b) => a.id_validation > b.id_validation ? 1 : a.id_validation < b.id_validation ? -1 : 0));
    data.setModifications(unsortedModif.sort((a, b) => a.id_modification > b.id_modification ? 1 : a.id_modification < b.id_modification ? -1 : 0));
    data.setContribuable([...data.contribuables, contribuable]);


    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'modificationContribuable.json'),
        JSON.stringify(data.contribs)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'validation.json'),
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

    const validation = data.validation.find(val => val.id_contribuable === mise_a_jour_contribuable.id);
    validation.validation = true;

    const filteredValidation = data.validation.filter(val => val.id_contribuable !== mise_a_jour_contribuable.id);
    const unsortedValidation = [...filteredValidation, validation];

    const filteredArray = data.contribs.filter(con => con.reference_fiscal !== reference_fiscal);
    const filteredContribuable = data.contribuables.filter(con => con.reference_fiscal !== reference_fiscal);

    const modification = data.modifications.find(mod => mod.id_contribuable === mise_a_jour_contribuable.id);
    modification.nombre_modification = 0;

    const filteredModification = data.modifications.filter(mod => mod.id_contribuable !== mise_a_jour_contribuable.id);
    const unsortedModification = [...filteredModification, modification];

    data.setModifications(unsortedModification.sort((a, b) => a.id_modification > b.id_modification ? 1 : a.id_modification < b.id_modification ? -1 : 0));
    data.setContribs([...filteredArray, mise_a_jour_contribuable]);
    data.setContribuable(filteredContribuable);
    data.setValidation(unsortedValidation.sort((a, b) => a.id_validation > b.id_validation ? 1 : a.id_validation < b.id_validation ? -1 : 0));
    
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'modificationContribuable.json'),
        JSON.stringify(data.modifications)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'validation.json'),
        JSON.stringify(data.validation)
    )

    res.json(data.contribs);
}

const cessationActivite = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;

    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal);
    if(!contribuable)
        return res.status(400).json({'message': 'contribuable introuvable'});

    contribuable.actif = false;
    const cessation = data.cessations.find(ces => ces.id_contribuable === contribuable.id);
    cessation.cessation = true;
    cessation.date_cessation = new Date();

    const filteredCessation = data.cessations.filter(ces => ces.id_contribuable !== contribuable.id);
    const unsortedCessation = [...filteredCessation, cessation];
    data.setCessations(unsortedCessation.sort((a, b) => a.id_cessation > b.id_cessation ? 1 : a.id_cessation < b.id_cessation ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'cessation_activite.json'),
        JSON.stringify(data.cessations)
    )

    res.json({'message': 'Validation effectué'});
}

const repriseActivite = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribs.find(con => con.id_contribuable === reference_fiscal);
    if(!contribuable)
        return res.status(404).json({'message': 'Contribuable introuvable'});

    const cessation = data.cessations.find(ces => ces.id_contribuable === contribuable.id);
    if(cessation.cessation && ((new Date()).getMonth() - (new Date(cessation.date_cessation)).getMonth()) < 3 )
        return res.status(400).json({'message': `La cessation de l'activité du contribuable ${contribuable.reference_fiscal} n'est pas encore plus de 3 mois`});

    cessation.cessation = false;
    cessation.date_cessation = '';

    const filteredCessation = data.cessations.filter(ces => ces.id_contribuable !== contribuable.id);
    const unsortedCessation = [...filteredCessation, cessation];

    data.setCessations(unsortedCessation.sort((a, b) => a.id_cessation > b.id_cessation ? 1 : a.id_cessation < b.id_cessation ? -1 : 0));
    
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'cessation_activite.json'),
        JSON.stringify(data.cessations)
    )
    res.json({'message': `Reprise d'activité effectué`});
}

const debloquageContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;

    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal);
    if(!contribuable)
        return res.status(400).json({"message": "Contribuable introuvable"});

    const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
    modification.blockage = false;
    modification.date_blockage = '';

    const filteredModification = data.modifications.filter(mod => mod.id_contribuable !== contribuable.id);
    const unsortedModification = [...filteredModification, modification];

    data.setModifications(unsortedModification.sort((a, b) => a.id_modification > b.id_modification ? 1 : a.id_modification < b.id_modification ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'modificationContribuable.json'),
        JSON.stringify(data.modifications)
    )

    res.json({'success': 'Contribuable debloqué'});
}

const rejetContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal);
    if(!contribuable)
        return res.status(401).json({'message': 'contribuable introuvable'});
    
    const filteredContribuable = data.contribuables.filter(con => con.reference_fiscal !== reference_fiscal);
    
    data.setContribuable(filteredContribuable);
    data.setRejetContribuable([...data.rejetContribuable, contribuable]);

    res.json({'message': 'mise à jour rejeté'});
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_delete', 'contribuable.json'),
        JSON.stringify(data.rejetContribuable)
    )
}

const rejetMiseAJourContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal);
    if(!contribuable)
        return res.status(401).json({'message': 'contribuable introuvable'});
    
    const filteredContribuable = data.contribuables.filter(con => con.reference_fiscal !== reference_fiscal);
    
    data.setContribuable(filteredContribuable);
    data.setRejetContribuable([...data.rejetContribuable, contribuable]);

    res.json({'message': 'mise à jour rejeté'});
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_delete', 'contribuable.json'),
        JSON.stringify(data.rejetContribuable)
    )
}

const miseEnVeilleuseContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;

    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal && con.actif);
    if(!contribuable)
        return res.status(400).json({'message': 'Contribuable introuvable'});

    contribuable.actif = false;

    const filteredContribuable = data.contribs.filter(con => con.reference_fiscal !== reference_fiscal);
    data.setContribs([...filteredContribuable, contribuable]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )

    res.json({'success': 'Mise en veille du contribuable effectué'});
}

const reveilleContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;

    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal && !con.actif);
    if(!contribuable)
        return res.status(400).json({'message': 'Contribuable introuvable'});

    contribuable.actif = true;

    const filteredContribuable = data.contribs.filter(con => con.reference_fiscal !== reference_fiscal);
    data.setContribs([...filteredContribuable, contribuable]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )

    res.json({'success': 'Mise en veille du contribuable effectué'});
}

module.exports = {
    setContribuable,
    authContribuable,
    updateContribuable,
    getContribuableNonBloque,
    getContribuablebloque,
    validationMiseAJour,
    validationContribuable,
    cessationActivite,
    repriseActivite,
    debloquageContribuable,
    rejetContribuable,
    rejetMiseAJourContribuable,
    miseEnVeilleuseContribuable,
    reveilleContribuable
}