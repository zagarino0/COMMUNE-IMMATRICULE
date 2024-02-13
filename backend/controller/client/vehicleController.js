const data = {
    vehicles: require("../../model/vehicule.json"),
    setVehicles: function (data) { this.vehicles = data },
    history: require('../../model/history.json'),
    setHistory: function (data) {this.history = data},
    contribuable: require('../../model/contribuable.json')
};

const path = require('path');
const fsPromises = require('fs').promises;

//-------------function to get all vehicles--------------
const getAllVehicles = (req, res) => {
    res.json(data.vehicles);
}

//-------------function to add new vehicle---------------
const addNewVehicle = async (req, res) => {
    
    const id_vehicule = data.vehicles.length === 0 ? 1 : data.vehicles[data.vehicles.length - 1].id_vehicule + 1

    const newVehicle = {
        "id_vehicule": id_vehicule,
        "numero_immatriculation": req.body.numimmatriculation_v,
        "marque": req.body.marque_v,
        "type": req.body.type_v,
        "genre": req.body.genre_v,
        "puissance": req.body.puissance_v,
        "nombre_place_carte_grise": req.body.nbplacecartegrise_v,
        "nombre_place_licence": req.body.nbplacelicence_v,
        "charge_utile": req.body.chargeutile_v,
        "date_mise_circulation": req.body.datemisecirculation_v,
        "poids_a_vide": req.body.poidsavide_v,
        "hikaramana": req.body.hikaramana_v,
        "date_debut": req.body.datedebut_v,
        "nif_proprietaire": req.body.nifproprietaire_v,
        "centre_gestionnaire": req.body.centregestion_v,
        "anc_nif_proprietaire": req.body.ancnifproprietaire_v,
        "exploitation": req.body.exploitation_v,
        "date_validite_licence": req.body.datevalidlic_v,
        "categorie": req.body.categ_v,
        "sous_categorie": req.body.souscateg_v,
        "zone": req.body.zone_v,
        "age": req.body.age_v

    }

    const contribuable = data.contribuable.find(con => con.reference_fiscal === req.body.nifproprietaire_v);
    if(!contribuable)
        return res.status(404).json({'message': 'contribuable introuvable'});

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;

    const history = {
        'id_history': id_history,
        'id_contribuable': newVehicle.id_vehicule,
        'id_user': req.body.id_user,
        'motif': "Creation de vehicule",
        'comment': "",
        'date_history': new Date()
    }

    data.setHistory([...data.history, history]);
    data.setVehicles([...data.vehicles, newVehicle]);
    
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'vehicule.json'),
        JSON.stringify(data.vehicles)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )
    res.json(data.vehicles);
}



//----------------function to update vehicle--------------------
const updateVehicle = async (req, res) => {

    const id_vehicule = req.params.id_vehicule;

    const vehicle = data.vehicles.find(veh => veh.id_vehicule == id_vehicule);

    if(!vehicle){
        return res.status(400).json({'message': 'vehicle not found'});
    }
    if(req.body.numimmatriculation_v) vehicle.numero_immatriculation = req.body.numimmatriculation_v;
    if(req.body.marque_v) vehicle.marque = req.body.marque_v;
    if(req.body.type_v) vehicle.type = req.body.type_v;
    if(req.body.genre_v) vehicle.genre = req.body.genre_v;
    if(req.body.puissance_v) vehicle.puissance = req.body.puissance_v;
    if(req.body.nbplacecartegrise_v) vehicle.nombre_place_carte_grise = req.body.nbplacecartegrise_v;
    if(req.body.nbplacelicence_v) vehicle.nombre_place_licence = req.body.nbplacelicence_v;
    if(req.body.chargeutile_v) vehicle.charge_utile = req.body.chargeutile_v;
    if(req.body.datemisecirculation_v) vehicle.date_mise_circulation = req.body.datemisecirculation_v;
    if(req.body.poidsavide_v) vehicle.poids_a_vide = req.body.poidsavide_v;
    if(req.body.hikaramana_v) vehicle.hikaramana = req.body.hikaramana_v;
    if(req.body.datedebut_v) vehicle.date_debut = req.body.datedebut_v;
    if(req.body.nifproprietaire_v) vehicle.nif_proprietaire = req.body.nifproprietaire_v;
    if(req.body.centregestion_v) vehicle.centre_gestionnaire = req.body.centregestion_v;
    if(req.body.ancnifproprietaire_v) vehicle.anc_nif_proprietaire = req.body.ancnifproprietaire_v;
    if(req.body.exploitation_v) vehicle.exploitation = req.body.exploitation_v;
    if(req.body.datevalidlic_v) vehicle.date_validite_licence = req.body.datevalidlic_v;
    if(req.body.categ_v) vehicle.categorie = req.body.categ_v;
    if(req.body.souscateg_v) vehicle.sous_categorie = req.body.souscateg_v;
    if(req.body.zone_v) vehicle.zone = req.body.zone_v;
    if(req.body.age_v) vehicle.age = req.body.age_v;

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;

    const history = {
        'id_history': id_history,
        'id_contribuable': vehicle.id_vehicule,
        'id_user': req.body.id_user,
        'motif': req.body.motif,
        'comment': req.body.comment,
        'date_history': new Date()
    }

    const filteredArray = data.vehicles.filter(veh => veh.numero_immatriculation !== req.body.numimmatriculation_v);
    const unsortedArray = [...filteredArray, vehicle];
    data.setVehicles(unsortedArray.sort((a, b)=> a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    data.setHistory([...data.history, history]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'vehicule.json'),
        JSON.stringify(data.vehicles)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )
    
    res.json(data.vehicles);
}





//--------------function to delete vehicle---------------------
const deleteVehicle = async (req, res) => {
    const vehicle = data.vehicles.find(veh => veh.immatriculation === req.body.immatriculation);
    if(!vehicle){
        res.status(400).json({'message': 'vehicle not found'});
    }
    const filteredArray = data.vehicles.filter(veh => veh.immatriculation !== req.body.immatriculation);
    data.setVehicles([...filteredArray]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'vehicule.json'),
        JSON.stringify(data.vehicles)
    )
    res.json(data.vehicles);
}



//-------------function to get one vehicle---------------------
const getVehicle = (req, res) => {
    const vehicle = data.vehicles.find(veh => veh.numero_immatriculation === req.params.immatriculation);
    if(!vehicle){
        return res.status(400).json({'message': 'vehicle not found'});
    }
    res.json(vehicle);
}


const getVehicleByNifContribuable = (req, res) => {
    const reference_fiscal_proprietaire = req.body.reference_fiscal_proprietaire;
    const vehicle = data.vehicles.find(veh => veh.nif_proprietaire === reference_fiscal_proprietaire);
    if(!vehicle){
        return res.status(400).json({'message': 'vehicle not found'});
    }
    res.json(vehicle);
}


//-----------------Exporting all functin----------------------
module.exports = {
    getAllVehicles,
    addNewVehicle,
    updateVehicle,
    deleteVehicle,
    getVehicle,
    getVehicleByNifContribuable
}