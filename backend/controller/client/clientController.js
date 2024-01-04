const data = {
    contribuables: require('../../model/model_temp/contribuable.json'),
    clients: require("../../model/client.json"),
    impots: require('../../model/impot.json'),
    setClients: function (data) { this.clients = data },
    deletes: require('../../model/model_delete/contribuable.json'),
    modifications: require('../../model/modificationContribuable.json'),
    setModifications: function (data) { this.modifications = data},
    setDeletes: function (data) { this.deletes = data},
    contribs: require('../../model/contribuable.json'),
    setContribs: function (data) { this.contribs = data}
};

const path = require('path');
const fsPromises = require('fs').promises;


const getAllclients = (req, res) => {
    res.json(data.clients);
}

const getContribuableByReference = async (req, res) => {
    const reference = req.body.reference;
    const contribuable = data.contribuables.find(con => con.id === reference);
    if(!contribuable)
        return res.status(404).json({'message': 'Contribuable introuvable'});

    res.json(contribuable);  
}

const validationContribuable = async (req, res) => {
    const reference = req.body.reference;
    const id_user = req.body.id_user;

    const contribuable = data.contribuables.find(con => con.id === reference);
    if (!contribuable)
        return res.status(404).json({ 'message': 'Contribuable introuvable' });

    contribuable.id_user = id_user;

    data.setClients([...data.clients, contribuable])
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.clients)
    )

}


const addnewClient = async (req, res) => {
    const id = (data.clients.length === 0) ? 1 : data.clients[data.clients.length - 1].id + 1;

    const newClient = {
        "id": id,
        "id_user": req.body.id_user,
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
        "numero_statistique": req.body.numstat,
        "delivree_le": req.body.datedelivre,
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

    if (!newClient.nif) {
        return res.status(400).json({ 'message': 'nif is required' })
    }
    data.setClients([...data.clients, newClient]);
    res.json(data.clients);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'client.json'),
        JSON.stringify(data.clients)
    )
}

const updateClient = async (req, res) => {
    const client = data.clients.find(cli => cli.nif === req.body.nif);
    if (client) {
        return res.status(400).json({ 'message': 'client not found' });
    }

    if (req.body.nif) client.nif = req.body.nif;
    if (req.body.raisonsocial) client.raison_sociale = req.body.raisonsocial;
    if (req.body.nomcomm) client.nom_commerciale = req.body.nomcomm;
    if (req.body.type) client.type = req.body.type;
    if (req.body.formjuri) client.forme_juridique = req.body.formjuri;
    if (req.body.regfisc) client.regime_fiscal = req.body.regfisc;
    if (req.body.dateagrem) client.date_agrement = req.body.dateagrem;
    if (req.body.refagrem) client.reference_agrement = req.body.refagrem;
    if (req.body.periodgra) client.periode_grace = req.body.periodgra;
    if (req.body.datecreation) client.date_creation = req.body.datecreation;
    if (req.body.capital) client.capital = req.body.capital;
    if (req.body.activite) client.activite = req.body.activite;
    if (req.body.precactivite) client.precision_activite = req.body.precactivite;
    if (req.body.datedemandemodif) client.date_demande_modif = req.body.datedemandemodif;
    if (req.body.dateattribnif) client.date_attribution_nif = req.body.dateattribnif;
    if (req.body.regcomm) client.registre_commerce = req.body.regcomm;
    if (req.body.datereg) client.date_registre = req.body.datereg;
    if (req.body.numstat) client.numero_statistique = req.body.numstat;
    if (req.body.datedelivre) client.delivree_le = req.body.datedelivre;
    if (req.body.datedebutexe) client.date_debut_exe = req.body.datedebutexe;
    if (req.body.dateclotexe) client.date_cloture_exe = req.body.dateclotexe;
    if (req.body.resident) client.resident = req.body.resident;
    if (req.body.exportateur) client.exportateur = req.body.exportateur;
    if (req.body.importateur) client.importateur = req.body.importateur;
    if (req.body.rib) client.rib = req.body.rib;
    if (req.body.province) client.province = req.body.province;
    if (req.body.region) client.region = req.body.region;
    if (req.body.district) client.district = req.body.district;
    if (req.body.commune) client.commune = req.body.commune;
    if (req.body.fokontany) client.fokontany = req.body.fokontany;
    if (req.body.adress) client.adresse = req.body.adress;
    if (req.body.nbsalarie) client.nombre_salarie = req.body.nbsalarie;
    if (req.body.proprietaire) client.proprietaire = req.body.proprietaire;
    if (req.body.typedemande) client.type_demande = req.body.typedemande;
    if (req.body.dateacte) client.date_acte = req.body.dateacte;
    if (req.body.dateacc) client.date_accord = req.body.dateacc;
    if (req.body.titre) client.titre = req.body.titre;

    const filteredArray = data.clients.filter(cli => cli.nif !== req.body.nif);
    const unsortedArray = [...filteredArray, client];
    data.setClients(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.clients);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'client.json'),
        JSON.stringify(data.clients)
    )
}

const deleteClient = async (req, res) => {
    const contribuable = data.clients.find(cli => cli.nif === req.body.nif);
    const id_user = req.body.id_user;
    if (!user) {
        res.status(400).json({ 'message': 'client not found' });
    }
    contribuable.id_user = id_user;
    const filteredArray = data.clients.filter(cli => cli.nif !== req.body.nif);
    data.setClients([...filteredArray]);
    data.setDeletes([...data.deletes, contribuable])
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_delete', 'contribuable.json'),
        JSON.stringify(data.deletes)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'client.json'),
        JSON.stringify(data.clients)
    )
}

const getClient = (req, res) => {
    const client = data.clients.find(cli => cli.nif === req.params.nif);
    if (!client) {
        return res.status(400).json({ 'message': 'client not found' });
    }
    res.json(client);
}

const deblockageContribuable = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribs.find(con => con.nif === reference_fiscal);

    if(!contribuable){
        return res.status(400).json({'message': 'contribuable introuvable'});
    }
    const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
    
    contribuable.blockage = true;
    modification.nombre_modification = 0;

    const filteredArray = data.contribs.filter(con => con.nif !== reference_fiscal);
    const unsortedArray = [...filteredArray, contribuable]

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
    getAllclients,
    addnewClient,
    updateClient,
    deleteClient,
    getClient,
    getContribuableByReference,
    validationContribuable,
    deblockageContribuable
}