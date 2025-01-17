const data = {
    contribuables: require('../../model/model_temp/contribuable.json'),
    setContribuable: function (data) { this.contribuables = data },
    contribs: require('../../model/contribuable.json'),
    setContribs: function (data) { this.contribs = data },
    modifications: require('../../model/modificationContribuable.json'),
    setModifications: function (data) { this.modifications = data},
    validation: require('../../model/validation.json'),
    setValidation: function (data) { this.validation = data },
    cessations: require('../../model/cessation_activite.json'),
    setCessations: function (data) { this.cessations = data },
    history: require('../../model/history.json'),
    setHistory: function (data) { this.history = data },
    history_contribuable: require('../../model/history_contribuable.json'),
    setHistoryContribuable: function (data) {this.history_contribuable = data},
    attestation: require('../../model/attestation.json'),
    setAttestation: function (data) {this.attestation = data},

    //Temp model
    actionnairesTemps: require('../../model/model_temp/actionnaire.json'),
    setActionnaireTemps: function (data) { this.actionnairesTemps = data },
    activiteTemps: require('../../model/model_temp/activite.json'),
    setActiviteTemps: function (data) { this.activiteTemps = data },
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
    etablissementsTemps: require('../../model/model_temp/etablissement.json'),
    setEtablissementsTemps: function (data) { this.etablissementsTemps = data },
    coordonneeTemps: require('../../model/model_temp/coordonnees.json'),
    setCoordonneesTemps: function (data) { this.coordonneeTemps = data },
    cessationTemps: require('../../model/model_temp/cessation_activite.json'),
    setCessationsTemps: function (data) { this.cessationTemps = data },
    modificationTemps: require('../../model/model_temp/modificationContribuable.json'),
    setModificationTemps: function (data) { this.modificationTemps = data},

    //real model
    actionnaires: require('../../model/actionnaire.json'),
    setActionnaire: function (data) { this.actionnaires = data },
    activite: require('../../model/activite.json'),
    setActivite: function (data) { this.activite = data },
    dirigeant: require('../../model/dirigeant.json'),
    setDirigeant: function (data) { this.dirigeant = data },
    interlocuteur: require('../../model/interlocuteur.json'),
    setInterlocuteur: function (data) { this.interlocuteur = data },
    siege: require('../../model/siege.json'),
    setSiege: function (data) { this.siege = data },
    autres: require('../../model/autre.json'),
    setAutres: function (data) { this.autres = data },
    etablissements: require('../../model/etablissement.json'),
    setEtablissements: function (data) { this.etablissements = data },
    coordonnees: require('../../model/coordonnees.json'),
    setCoordonnees: function (data) {this.coordonnees = data},


    //Rejet
    rejetContribuable: require('../../model/model_delete/contribuable.json'),
    setRejetContribuable: function (data) { this.rejetContribuable = data },
    rejetActionnaire: require('../../model/model_delete/actionnaire'),
    setRejetActionnaire: function (data) { this.rejetActionnaire = data },
    rejetActivite: require('../../model/model_delete/activite.json'),
    setRejetActivite: function (data) { this.rejetActivite = data },
    rejetAutres: require('../../model/model_delete/autre.json'),
    setRejetAutres: function (data) { this.rejetAutres = data },
    rejetEtablissements: require('../../model/model_delete/etablissement.json'),
    rejetCoordonnees: require('../../model/model_delete/coordonnees.json'),
    setRejetCoordonnees: function (data) { this.rejetCoordonnees = data },
    history: require('../../model/history.json'),
    setHistory: function (data) { this.history = data },

    //radie

    radieContribuable: require('../../model/model_radie/contribuable.json')
}

const bcrypt = require('bcrypt');

const path = require('path');
const fsPromises = require('fs').promises;

const fs = require('fs');

const setContribuable = async (req, res) => {

    const id = req.body.id;
    const reference_fiscal = data.contribuables.length === 0 ? 1 : data.contribuables.length + 1;
    
    const nombre_zero = (data.contribuables.length < 10) ? '00000000000' : ((data.contribuables.length >= 10 && data.contribuables.length < 100) ? '0000000000' : ((data.contribuables.length >= 100 && data.contribuables.length < 1000) ? '000000000' : ((data.contribuables.length >= 1000 && data.contribuables.length < 10000) ? '00000000' : ((data.contribuables.length >= 10000 && data.contribuables.length < 100000) ? '0000000' : ((data.contribuables.length >= 100000 && data.contribuables.length < 1000000) ? '000000' : ((data.contribuables.length >= 1000000 && data.contribuables.length < 10000000) ? '00000' : ((data.contribuables.length >= 10000000 && data.contribuables.length < 100000000) ? '0000' : ((data.contribuables.length >= 100000000 && data.contribuables.length < 1000000000) ? '000' : ((data.contribuables.length >= 1000000000 && data.contribuables.length < 10000000000) ? '00' : ((data.contribuables.length >= 10000000000 && data.contribuables.length < 100000000000) ? '0' : ''))))))))));

    const valeur_reference = nombre_zero + "" + reference_fiscal;

    const new_value = data.contribuables.find(con => con.reference_fiscal === valeur_reference) ? (parseInt(data.contribuables.find(con => con.reference_fiscal === valeur_reference).reference_fiscal) + 1) + nombre_zero : valeur_reference; 

    const newContribuable = {
        "id": id,
        "raison_social": req.body.raisonsocial,
        "reference_fiscal": new_value,
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
        "numero_compte_bancaire": req.body.numero_compte_bancaire,
        "actif": false
    }

    const id_validation = data.validationTemps.length === 0 ? 1 : data.validationTemps[data.validationTemps.length - 1].id_validation + 1;

    const validation = {
        "id_validation": id_validation,
        "id_contribuable": id,
        "date_validation": "",
        "validite": false
    }

    const id_modification = data.modifications.length === 0 ? 1 : data.modifications[data.modifications.length - 1].id_modification + 1;

    const modification = {
        "id_modification": id_modification,
        "id_contribuable": id,
        "nombre_modification": 0,
        "blockage": false,
        "date_blockage": ""
    }

    const id_cessation = data.cessationTemps.length === 0 ? 1 : data.cessationTemps[data.cessationTemps.length - 1].id_cessation + 1;
    const cessation = {
        "id_cessation": id_cessation,
        "id_contribuable": id,
        "date_cessation": "",
        "cessation": false,
        "reprise": false
    }

    const id_attestation = data.attestation.length === 0 ? 1 : data.attestation[data.attestation.length - 1].id_attestation + 1;
    const attestation = {
        "id_attestation": id_attestation,
        "id_contribuable": id,
        "id_user": req.body.id_user,
        "attestation": true
    }

    const id_history_contribuable = data.history_contribuable.length === 0 ? 1 : data.history_contribuable[data.history_contribuable.length - 1].id_history_contribuable + 1;
    const history_contribuable = {
        'id_history_contribuable': id_history_contribuable,
        'id_contribuable': id,
        'motif': 'Creation de contribuable',
        'date_modification': new Date()
    }

    data.setHistoryContribuable([...data.history_contribuable, history_contribuable])
    data.setContribuable([...data.contribuables, newContribuable]);
    data.setModificationTemps([...data.modificationTemps, modification]);
    data.setValidationTemps([...data.validationTemps, validation]);
    data.setCessationsTemps([...data.cessationTemps, cessation]);
    data.setAttestation([...data.attestation, attestation]);

    res.json(data.contribuables);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'modificationContribuable.json'),
        JSON.stringify(data.modificationTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history_contribuable.json'),
        JSON.stringify(data.history_contribuable)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'validation.json'),
        JSON.stringify(data.validationTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'cessation_activite.json'),
        JSON.stringify(data.cessationTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'attestation.json'),
        JSON.stringify(data.modifications)
    )
}


const authContribuable = async (req, res) => {
    const mot_de_passe = req.body.mot_de_passe;
    const id = req.body.id;
    const contribuable = data.contribs.find(con => con.id === id && con.mot_de_passe === mot_de_passe);
    if (!contribuable)
        return res.status(404).json({ 'message': 'contribuable introuvable' });
    contribuable.actionnaire = data.actionnaires.length === 0 ? [] : data.actionnaires.filter(act => act.id_contribuable === id);
    contribuable.activite = data.activite.length === 0 ? [] : data.activite.filter(act => act.id_contribuable === id);
    contribuable.siege = data.siege.length === 0 ? [] : data.siege.filter(act => act.id_contribuable === id);
    contribuable.interlocuteur = data.interlocuteur.length === 0 ? [] : data.interlocuteur.filter(act => act.id_contribuable === id);
    contribuable.etablissement = data.etablissements.length === 0 ? [] : data.etablissements.filter(act => act.id_contribuable === id);
    contribuable.autre = data.autres.length === 0 ? [] : data.autres.filter(act => act.id_contribuable === id);
    contribuable.dirigeant = data.dirigeant.length === 0 ? [] : data.dirigeant.filter(act => act.id_contribuable === id);

    const id_history_contribuable = data.history_contribuable.length === 0 ? 1 : data.history_contribuable[data.history_contribuable.length - 1].id_history_contribuable + 1;
    const history_contribuable = {
        'id_history_contribuable': id_history_contribuable,
        'id_contribuable': req.body.id_contribuable,
        'motif': 'Connexion',
        'date_modification': new Date()
    }

    data.setHistoryContribuable([...data.history_contribuable, history_contribuable])
    
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history_contribuable.json'),
        JSON.stringify(data.history_contribuable)
    )

    res.json(contribuable);
}

const validationContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const mot_de_passe = req.body.mot_de_passe;

    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal);
    if (!contribuable)
        return res.status(400).json({ 'message': 'contribuable introuvable' });

    //effacement du contribuable du données temporaire et migration du données dans la base réel
    const filteredArray = data.contribuables.filter(con => con.reference_fiscal !== reference_fiscal);
    contribuable.actif = true;
    contribuable.mot_de_passe = mot_de_passe;

    data.setContribuable(filteredArray);
    data.setContribs([...data.contribs, contribuable]);

    //validation vers les données réel
    const validation = data.validationTemps.find(val => val.id_contribuable === contribuable.id);
    validation.validite = true;
    validation.date_validation = new Date();

    const filterdValidation = data.validationTemps.filter(val => val.id_contribuable !== contribuable.id);
    data.setValidationTemps(filterdValidation);
    data.setValidation([...data.validation, validation]);

    //Actionnaire
    const actionnaire = data.actionnairesTemps.filter(act => act.id_contribuable === contribuable.id);
    if (actionnaire.length !== 0) {
        const filtederActionnaire = data.actionnairesTemps.filter(act => act.id_contribuable !== contribuable.id)
        data.setActionnaireTemps(filtederActionnaire);
        data.setActionnaire([...data.actionnaires, ...actionnaire]);
    }

    //dirigeant
    const dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
    if (dirigeant.length !== 0) {
        const filteredDirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable !== contribuable.id);
        data.setDirigeantTemps(filteredDirigeant);
        data.setDirigeant([...data.dirigeant, ...dirigeant]);
    }

    //activite
    const activite = data.activiteTemps.find(act => act.id_contribuable === contribuable.id);
    if (activite) {
        const filteredActivite = data.activiteTemps.filter(act => act.id_contribuable !== contribuable.id);
        data.setActiviteTemps(filteredActivite);
        data.setActivite([...data.activite, activite]);
    }

    //interlocuteur
    const interlocuteur = data.interlocuteurTemps.find(inter => inter.id_contribuable === contribuable.id);
    if (interlocuteur) {
        const filteredInterlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable !== contribuable.id);
        data.setInterlocuteurTemps(filteredInterlocuteur);
        data.setInterlocuteur([...data.interlocuteur, interlocuteur]);
    }

    //siege
    const siege = data.siegeTemps.find(sie => sie.id_contribuable === contribuable.id);
    if (siege) {
        const filteredSiege = data.siegeTemps.filter(sie => sie.id_contribuable !== contribuable.id);
        data.setSiegeTemps(filteredSiege);
        data.setSiege([...data.siege, siege]);
    }

    //etablissement
    const etablissement = data.etablissementsTemps.filter(eta => eta.id_contribuable === contribuable.id);
    if (etablissement.length !== 0) {
        const filteredEtablissement = data.etablissementsTemps.filter(eta => eta.id_contribuable !== contribuable.id);
        data.setEtablissementsTemps(filteredEtablissement);
        data.setEtablissements([...data.etablissements, ...etablissement]);
    }

    //autre
    const autre = data.autresTemps.find(aut => aut.id_contribuable === contribuable.id);
    if (autre) {
        const filteredAutres = data.autresTemps.filter(aut => aut.id_contribuable !== contribuable.id);
        data.setAutresTemps(filteredAutres);
        data.setAutres([...data.autres, autre]);
    }

    //coordonnees
    const coordonnees = data.coordonneeTemps.find(coo => coo.id_contribuable === contribuable.id);
    if (coordonnees) {
        const filteredCoordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable !== contribuable.id);
        data.setCoordonneesTemps(filteredCoordonnees);
        data.setCoordonnees([...data.coordonnees, coordonnees]);
    }

    //cessation
    const cessation = data.cessationTemps.find(coo => coo.id_contribuable === contribuable.id);
    if (cessation) {
        const filteredCessation = data.cessationTemps.filter(coo => coo.id_contribuable !== contribuable.id);
        data.setCessationsTemps(filteredCessation);
        data.setCessations([...data.cessations, cessation]);
    }

    //modification
    const modification = data.modificationTemps.find(mod => mod.id_contribuable === contribuable.id);
    if(modification){
        const filteredModification = data.modificationTemps.filter(mod => mod.id_contribuable !== contribuable.id);
        data.setModificationTemps(filteredModification);
        data.setModifications([...data.modifications, modification]);
    }

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;
    const history = {
        'id_history': id_history,
        'id_contribuable': contribuable.id,
        'id_user': req.body.id_user,
        'motif': 'Validation contribuable',
        'comment': '',
        'date_history': new Date()
    }

    data.setHistory([...data.history, history]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )

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
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'etablissement.json'),
        JSON.stringify(data.etablissementsTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'etablissement.json'),
        JSON.stringify(data.etablissements)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'coordonnees.json'),
        JSON.stringify(data.coordonneeTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'coordonnees.json'),
        JSON.stringify(data.coordonnees)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'cessation_activite.json'),
        JSON.stringify(data.cessationTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'cessation_activite.json'),
        JSON.stringify(data.cessations)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'validation.json'),
        JSON.stringify(data.validationTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'validation.json'),
        JSON.stringify(data.validation)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'modificationContribuable.json'),
        JSON.stringify(data.modificationTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'modificationContribuable.json'),
        JSON.stringify(data.modifications)
    )
    res.json({ "message": `Le contribuable dont l'id ${contribuable.id} est validé` });
    
}

const updateContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribs.find(con => con.reference_fiscal == reference_fiscal);
    if (!contribuable) {
        return res.status(400).json({ 'message': 'contribuable not found' });
    }
    const validation = data.validation.find(val => val.id_contribuable === contribuable.id);
    if (!validation) {
        return res.status(400).json({ 'message': 'Verifieo fa mety tsisy identifiant contribuable am validation.json ao anaty model' });
    }
    const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
    if (!modification) {
        return res.status(400).json({ 'message': 'Verifieo fa mety tsisy identifiant contribuable am modificationContribuable.json ao anaty model' });
    }
    if (req.body.raison_social) contribuable.raison_social = req.body.raison_social;
    if (req.body.situation_matrimoiniale) contribuable.situation_matrimoiniale = req.body.situation_matrimoiniale;
    if (req.body.sexe) contribuable.sexe = req.body.sexe;
    if (req.body.cin) contribuable.cin = req.body.cin;
    if (req.body.etranger) contribuable.etranger = req.body.etranger;
    if (req.body.numero_passeport) contribuable.numero_passeport = req.body.numero_passeport;
    if (req.body.carte_residence) contribuable.carte_residence = req.body.carte_residence;
    if (req.body.date_de_delivrance_passeport) contribuable.date_de_delivrance_passeport = req.body.date_de_delivrance_passeport;
    if (req.body.date_de_delivrance_cin) contribuable.date_de_delivrance_cin = req.body.date_de_delivrance_cin;
    if (req.body.lieu_de_delivrance_cin) contribuable.lieu_de_delivrance_cin = req.body.lieu_de_delivrance_cin;
    if (req.body.date_de_naissance) contribuable.date_de_naissance = req.body.date_de_naissance;
    if (req.body.lieu_de_naissance) contribuable.lieu_de_naissance = req.body.lieu_de_naissance;
    if (req.body.forme_juridique) contribuable.forme_juridique = req.body.forme_juridique;
    if (req.body.regime_fiscal) contribuable.regime_fiscal = req.body.regime_fiscal;
    if (req.body.date_agrement) contribuable.date_agrement = req.body.date_agrement;
    if (req.body.reference_agrement) contribuable.reference_agrement = req.body.reference_agrement;
    if (req.body.periode_grace) contribuable.periode_grace = req.body.periode_grace;
    if (req.body.date_creation) contribuable.date_creation = req.body.date_creation;
    if (req.body.capital) contribuable.capital = req.body.capital;
    if (req.body.rib) contribuable.rib = req.body.rib;
    contribuable.actif = true;

    modification.nombre_modification += 1;
    if (modification.nombre_modification === 5) {
        modification.blockage = true,
            modification.date_blockage = new Date();
            return res.json({'message': `Le contribuable ${contribuable.id} est bloquée`});
    };

    validation.validite = false;

    const filteredModif = data.modifications.filter(mod => mod.id_contribuable !== contribuable.id);
    const unsortedModif = [...filteredModif, modification];

    const filteredValidation = data.validation.filter(val => val.id_contribuable !== contribuable.id);
    const unsortedValidation = [...filteredValidation, validation];

    data.setValidation(unsortedValidation.sort((a, b) => a.id_validation > b.id_validation ? 1 : a.id_validation < b.id_validation ? -1 : 0));
    data.setModifications(unsortedModif.sort((a, b) => a.id_modification > b.id_modification ? 1 : a.id_modification < b.id_modification ? -1 : 0));
    data.setContribuable([...data.contribuables, contribuable]);

    


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


const updateContribuableNonValide = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribuables.find(con => con.reference_fiscal == reference_fiscal);
    if (!contribuable) {
        return res.status(400).json({ 'message': 'contribuable not found' });
    }
    if (req.body.raison_social) contribuable.raison_social = req.body.raison_social;
    if (req.body.situation_matrimoiniale) contribuable.situation_matrimoiniale = req.body.situation_matrimoiniale;
    if (req.body.sexe) contribuable.sexe = req.body.sexe;
    if (req.body.cin) contribuable.cin = req.body.cin;
    if (req.body.etranger) contribuable.etranger = req.body.etranger;
    if (req.body.numero_passeport) contribuable.numero_passeport = req.body.numero_passeport;
    if (req.body.carte_residence) contribuable.carte_residence = req.body.carte_residence;
    if (req.body.date_de_delivrance_passeport) contribuable.date_de_delivrance_passeport = req.body.date_de_delivrance_passeport;
    if (req.body.date_de_delivrance_cin) contribuable.date_de_delivrance_cin = req.body.date_de_delivrance_cin;
    if (req.body.lieu_de_delivrance_cin) contribuable.lieu_de_delivrance_cin = req.body.lieu_de_delivrance_cin;
    if (req.body.date_de_naissance) contribuable.date_de_naissance = req.body.date_de_naissance;
    if (req.body.lieu_de_naissance) contribuable.lieu_de_naissance = req.body.lieu_de_naissance;
    if (req.body.forme_juridique) contribuable.forme_juridique = req.body.forme_juridique;
    if (req.body.regime_fiscal) contribuable.regime_fiscal = req.body.regime_fiscal;
    if (req.body.date_agrement) contribuable.date_agrement = req.body.date_agrement;
    if (req.body.reference_agrement) contribuable.reference_agrement = req.body.reference_agrement;
    if (req.body.periode_grace) contribuable.periode_grace = req.body.periode_grace;
    if (req.body.date_creation) contribuable.date_creation = req.body.date_creation;
    if (req.body.capital) contribuable.capital = req.body.capital;
    if (req.body.rib) contribuable.rib = req.body.rib;
    
    const filteredContribuable = data.contribuables.filter(con => con.id !== contribuable.id);

    data.setContribuable([...filteredContribuable, contribuable]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )
    
    res.json(data.contribuables);
}


const getContribuablebloque = (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal);

    if (!contribuable)
        return res.status(400).json({ 'message': 'contribuable introuvable' })
    const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);

    if (modification.blockage)
        res.json(contribuable);
    else
        res.json({ 'message': 'aucun contribuable bloqué' });
}

const getContribuableNonBloque = (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal);

    if (!contribuable)
        return res.status(400).json({ 'message': 'contribuable introuvable' })
    const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);

    if (!modification.blockage)
        res.json(contribuable);
    else
        res.json({ 'message': 'aucun contribuable bloqué' });
}

const validationMiseAJour = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;

    const mise_a_jour_contribuable = data.contribuables.find(con => con.nif === reference_fiscal);
    if (!mise_a_jour_contribuable)
        return res.status(400).json({ 'message': 'mise à jour introuvable' });

    const validation = data.validation.find(val => val.id_contribuable === mise_a_jour_contribuable.id);
    validation.validite = true;

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

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;
    const history = {
        'id_history': id_history,
        'id_contribuable': mise_a_jour_contribuable.id,
        'id_user': req.body.id_user,
        'motif': 'Validation mise à jour contribuable',
        'comment': '',
        'date_history': new Date()
    }

    data.setHistory([...data.history, history]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )

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
    const comment = req.body.comment;
    const id_user = req.body.id_user;

    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal);
    if (!contribuable)
        return res.status(400).json({ 'message': 'contribuable introuvable' });

    if(contribuable.type === 'Personne morale' || contribuable.type === 'personne morale')
        return res.status(400).json({'message': 'Il est impossible d\'effectuer la cessation d\'une personne morale'})

    contribuable.actif = false;
    const cessation = data.cessations.find(ces => ces.id_contribuable === contribuable.id);
    cessation.cessation = true;
    cessation.reprise = false;
    cessation.date_cessation = new Date();

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;

    const history = {
        'id_history': id_history,
        'id_contribuable': contribuable.id,
        'id_user': id_user,
        'motif': `Cessation de l'activité du contribuable ${contribuable.id}`,
        'comment': comment,
        'date_history': new Date()
    }

    const filteredCessation = data.cessations.filter(ces => ces.id_contribuable !== contribuable.id);
    const unsortedCessation = [...filteredCessation, cessation];
    
    const filteredContribuable = data.contribs.filter(con => con.id !== contribuable.id);
    const newContribuable = [...filteredContribuable, contribuable];

    data.setCessations(unsortedCessation.sort((a, b) => a.id_cessation > b.id_cessation ? 1 : a.id_cessation < b.id_cessation ? -1 : 0));
    data.setHistory([...data.history, history]);
    data.setContribs(newContribuable);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'cessation_activite.json'),
        JSON.stringify(data.cessations)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )

    res.json({ 'message': `Cessation du contribuable ${contribuable.id}` });
}

const repriseActivite = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const motif = req.body.motif;
    const comment = req.body.comment;
    const id_user = req.body.id_user;
    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal);
    if (!contribuable)
        return res.status(404).json({ 'message': 'Contribuable introuvable' });

    contribuable.actif = true;

    const cessation = data.cessations.find(ces => ces.id_contribuable === contribuable.id);
    // if (cessation.cessation && ((new Date()).getMonth() - (new Date(cessation.date_cessation)).getMonth()) < 3)
    //     return res.status(400).json({ 'message': `La cessation de l'activité du contribuable ${contribuable.reference_fiscal} n'est pas encore plus de 3 mois` });

    cessation.cessation = false;
    cessation.reprise = true;
    cessation.date_cessation = '';

    const filteredContribuable = data.contribs.filter(con => con.id !== contribuable.id);
    const newContribuable = [...filteredContribuable, contribuable];

    const filteredCessation = data.cessations.filter(ces => ces.id_contribuable !== contribuable.id);
    const unsortedCessation = [...filteredCessation, cessation];

    data.setCessations(unsortedCessation.sort((a, b) => a.id_cessation > b.id_cessation ? 1 : a.id_cessation < b.id_cessation ? -1 : 0));

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;

    const history = {
        'id_history': id_history,
        'id_contribuable': contribuable.id,
        'id_user': id_user,
        'motif': motif,
        'comment': comment,
        'date_history': new Date()
    }

    data.setHistory([...data.history, history]);
    data.setContribs(newContribuable);
    
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'cessation_activite.json'),
        JSON.stringify(data.cessations)
    )
    res.json({ 'message': `Reprise d'activité effectué` });
}

const debloquageContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;

    const id_user = req.body.id_user;
    const comment = req.body.comment;
    const motif = req.body.motif;

    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal);
    if (!contribuable)
        return res.status(400).json({ "message": "Contribuable introuvable" });

    const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
    modification.blockage = false;

    const filteredModification = data.modifications.filter(mod => mod.id_contribuable !== contribuable.id);
    const unsortedModification = [...filteredModification, modification];

    data.setModifications(unsortedModification.sort((a, b) => a.id_modification > b.id_modification ? 1 : a.id_modification < b.id_modification ? -1 : 0));

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;

    const history = {
        'id_history': id_history,
        'id_contribuable': contribuable.id,
        'id_user': id_user,
        'comment': comment,
        'motif': motif,
        'date_history': new Date()
    }

    data.setHistory([...data.history, history]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'modificationContribuable.json'),
        JSON.stringify(data.modifications)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )

    res.json({ 'success': 'Contribuable debloqué' });
}

const rejetContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal);
    const motif = req.body.motif;
    const comment = req.body.comment;
    const id_user = req.body.id_user;

    if (!contribuable)
        return res.status(401).json({ 'message': 'contribuable introuvable' });

    const filteredContribuable = data.contribuables.filter(con => con.reference_fiscal !== reference_fiscal);

    data.setContribuable(filteredContribuable);
    data.setRejetContribuable([...data.rejetContribuable, contribuable]);

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;

    const history = {
        'id_history': id_history,
        'id_user': id_user,
        'id_contribuable': contribuable.id,
        'comment': comment,
        'motif': motif,
        'date_history': new Date()
    }

    data.setHistory([...data.history, history]);

    res.json({ 'message': 'mise à jour rejeté' });
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_delete', 'contribuable.json'),
        JSON.stringify(data.rejetContribuable)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )
}

const rejetMiseAJourContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const motif = req.body.motif;
    const comment = req.body.comment;
    const id_user = req.body.id_user;

    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal);
    if (!contribuable)
        return res.status(401).json({ 'message': 'contribuable introuvable' });

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;

    const history = {
        'id_history': id_history,
        'id_user': id_user,
        'id_contribuable': contribuable.id,
        'comment': comment,
        'motif': motif,
        'date_history': new Date()
    }

    data.setHistory([...data.history, history]);

    const filteredContribuable = data.contribuables.filter(con => con.reference_fiscal !== reference_fiscal);

    data.setContribuable(filteredContribuable);
    data.setRejetContribuable([...data.rejetContribuable, contribuable]);

    res.json({ 'message': 'mise à jour rejeté' });
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_delete', 'contribuable.json'),
        JSON.stringify(data.rejetContribuable)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )
}

const miseEnVeilleuseContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const comment = req.body.comment;
    const motif = req.body.motif;
    const id_user = req.body.id_user;

    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal && con.actif);
    if (!contribuable)
        return res.status(400).json({ 'message': 'Contribuable introuvable' });

    contribuable.actif = false;

    const filteredContribuable = data.contribs.filter(con => con.reference_fiscal !== reference_fiscal);
    data.setContribs([...filteredContribuable, contribuable]);

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;

    const history = {
        'id_history': id_history,
        'id_contribuable': contribuable.id,
        'id_user': id_user,
        'motif': motif,
        'comment': comment,
        'date_history': new Date()
    }

    data.setHistory([...data.history, history]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )

    res.json({ 'success': 'Mise en veille du contribuable effectué' });
}

const blockageContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;

    const contribuable = data.contribs.find(con => con.reference_fiscal == reference_fiscal);
    if(!contribuable)
        return res.status(400).json({'message': 'contribuable introuvable'});

    const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id && !mod.blockage);
    if(!modification)
        return res.status(400).json({'message': 'contribuable déjà bloqué'});
    modification.blockage = true;
    modification.date_blockage = new Date();
    
    const filteredModification = data.modifications.filter(mod => mod.id_contribuable !== contribuable.id);
    data.setModifications([...filteredModification, modification]);

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;

    const history = {
        'id_history': id_history,
        'id_contribuable': contribuable.id,
        'id_user': req.body.id_user,
        'motif': `Blockage de contribuable dont la reference fiscal est : ${contribuable.reference_fiscal}`,
        'comment': req.body.comment,
        'date_history': new Date()
    }

    data.setHistory([...data.history, history])

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'modificationContribuable.json'),
        JSON.stringify(data.modifications)
    ) 

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    ) 
        res.json({'success': 'contribuable bloqué'})
}

const reveilleContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const comment = req.body.comment;
    const motif = req.body.motif;
    const id_user = req.body.id_user;

    const contribuable = data.contribs.find(con => con.reference_fiscal === reference_fiscal && !con.actif);
    if (!contribuable)
        return res.status(400).json({ 'message': 'Contribuable introuvable' });

    contribuable.actif = true;

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;

    const history = {
        'id_history': id_history,
        'id_contribuable': contribuable.id,
        'id_user': id_user,
        'motif': motif,
        'comment': comment,
        'date_history': new Date()
    }

    data.setHistory([...data.history, history]);

    const filteredContribuable = data.contribs.filter(con => con.reference_fiscal !== reference_fiscal);
    data.setContribs([...filteredContribuable, contribuable]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )

    res.json({ 'success': 'Mise en veille du contribuable effectué' });
}

const deleteContribuable = async (req, res) => {
    const id = req.params.id;
    const contribuable = data.contribs.id;
    const filterdContribuable = data.contribs.filter(con => con.id !== id);
    data.setContribs(filterdContribuable);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )
    res.json(contribuable);
}


const getToutContribuableATelecharger = (req, res) => {
    const contribuableRadie = data.radieContribuable;
    const contribuableNonValide = data.contribuables;
    const contribuableValide = data.contribs;
    const contribuableRejet = data.rejetContribuable;

    const allContrib = []

    if(contribuableNonValide.length !== 0)
        allContrib.push(...contribuableNonValide);
    if(contribuableRadie.length !== 0)
        allContrib.push(...contribuableRadie);
    if(contribuableValide.length !== 0)
        allContrib.push(...contribuableValide);
    if(contribuableRejet.length !== 0)
        allContrib.push(contribuableRejet);

    res.json(allContrib);
}

const attestationContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribuables.map(con => con.reference_fiscal == reference_fiscal);
    if(!contribuable)
        return res.status(404).json({'message': `contribuable avec la reference fiscal ${reference_fiscal} est introuvable`});

    const attestation = data.attestation.find(att => att.id_contribuable === contribuable.id);
    attestation.attestation = true;
    
    const filteredAttestation = data.attestation.filter(att => att.id_contribuable !== contribuable.id);
    const unsortedAttestation = [...filteredAttestation, attestation];

    data.setAttestation(unsortedAttestation);

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;

    const history = {
        'id_history': id_history,
        'id_contribuable': contribuable.id,
        'id_user': req.body.id_user,
        'motif': req.body.motif,
        'comment': req.body.comment,
        'date_history': new Date()
    }

    data.setHistory([...data.history, history]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'attestation.json'),
        JSON.stringify(data.attestation)
    )

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )

    res.json({'success': 'attestation bien reçue'});

}

module.exports = {
    setContribuable,
    getToutContribuableATelecharger,
    authContribuable,
    updateContribuable,
    updateContribuableNonValide,
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
    reveilleContribuable,
    deleteContribuable,
    blockageContribuable,
    attestationContribuable

}