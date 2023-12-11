const data = {
    contribuables: require('../../model/model_temp/contribuable.json'),
    setContribuable: function(data) {this.contribuables = data},
    contribs: require('../../model/contribuable.json'),
    setContribs: function(data) {this.contribs = data}
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
        "nif": req.body.nif,
        "raison_sociale": req.body.raisonsocial,
        "nom_commerciale": req.body.nomcomm,
        "type": req.body.type,
        "forme_juridique": req.body.formjuri,
        "regime_fiscal": req.body.regfisc,
        "date_agrement": req.body.dateagrem,
        "reference_agrement": req.body.refagrem,
        "periode_grace": req.body.periodgra,
        "date_creation": req.body.datecreation,
        "capital": req.body.capital,
        "activite": req.body.activite,
        "precision_activite": req.body.precactivite,
        "date_demande_modif": req.body.datedemandemodif,
        "date_attribution_nif": req.body.dateattribnif,
        "registre_commerce": req.body.regcomm,
        "date_registre": req.body.datereg,
        "cin": req.body.cin,
        "numero_statistique": req.body.numstat,
        "date_delivre_statistique": req.body.datedelivrestat,
        "date_debut_exe_compta": req.body.datedebutexecompta,
        "date_fin_exe_compta": req.body.datefinexecompta,
        "date_debut_exe": req.body.datedebutexe,
        "date_cloture_exe": req.body.dateclotexe,
        "resident": req.body.resident,
        "exportateur": req.body.exportateur,
        "importateur": req.body.importateur,
        "rib": req.body.rib,
        "province": req.body.province,
        "region": req.body.region,
        "district": req.body.district,
        "commune": req.body.commune,
        "fokontany": req.body.fokontany,
        "adresse": req.body.adress,
        "nombre_salarie": req.body.nbsalarie,
        "proprietaire": req.body.proprietaire,
        "type_demande": req.body.typedemande,
        "date_acte": req.body.dateacte,
        "date_accord": req.body.dateacc,
        "titre": req.body.titre
    }

    if(!newContribuable.nif){
        return res.status(400).json({'message': 'nif is required'})
    }
    data.setContribuable([...data.contribuables, newContribuable]);
    res.json(data.contribuables);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )
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

    const filteredArray = data.contribs.filter(cli => cli.nif !== req.body.nif);
    const unsortedArray = [...filteredArray, contribuable];
    data.setcontribs(unsortedArray.sort((a, b)=> a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.contribs);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.contribs)
    )
}


module.exports = {
    setContribuableMorale,
    authContribuable,
    updateContribuablePhysique
}