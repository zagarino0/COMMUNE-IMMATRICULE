const data = {
    contribuables: require('../../model/model_temp/contribuable.json'),
    setContribuable: function(data) {this.contribuables = data},
    contribs: require('../../model/contribuable.json'),
    setContribs: function(data) {this.contribs = data},
    modifications: require('../../model/modificationContribuable.json'),
    setModifications: function (data) { this.modifications }
}

const bcrypt = require('bcrypt');

const random = require('../../utils/random');

const path = require('path');
const fsPromises = require('fs').promises;

const setContribuableMorale = async (req, res) => {
    
    const newContribuable = {
        "id": random.generateId,
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
        "RIB": req.body.rib,
        "blockage": false
    }

    const id_modification = data.modifications.length === 0 ? 1 : data.modifications[data.modifications.length - 1].id + 1;

    const modification = {
        "id_modification": id_modification, 
        "id_contribuable": id,
        "nombre_modification": 0
    }

    data.setContribuable([...data.contribuables, newContribuable]);
    data.setModifications([...data.modifications, modification]);
    
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'modificationContribuable.json'),
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

const updateContribuablePhysique = async (req, res) => {
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
    if(modification.nombre_modification === 5) contribuable.blockage = true;

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


module.exports = {
    setContribuableMorale,
    authContribuable,
    updateContribuablePhysique
}