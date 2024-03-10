const data = {
    dirigeants: require('../../model/model_temp/dirigeant.json'),
    setDirigeants: function(data) {this.dirigeants = data},
    diriges: require('../../model/dirigeant.json')
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
        "nom_commercial_dirigeant": req.body.nom_commercial_dirigeant,
        "activite_dirigeant": req.body.activite_dirigeant,
        "titre_dirigeant": req.body.titre_dirigeant,
        "date_ouverture_dirigeant": req.body.date_ouverture_dirigeant,
        "adresse_dirigeant": req.body.adresse_dirigeant,
        "fokontany_dirigeant": req.body.fokontany_dirigeant,
        "province_dirigeant": req.body.province_dirigeant,
        "region_dirigeant": req.body.region_dirigeant,
        "district_dirigeant": req.body.district_dirigeant,
        "commune_dirigeant": req.body.commune_dirigeant,
        "telephone_dirigeant": req.body.telephone_dirigeant,
        "autre_telephone_dirigeant": req.body.autre_telephone_dirigeant,
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
    const dirigeant = data.dirigeants.find(dir => dir.id_dirigeant == id_dirigeant && dir.id_contribuable == id_contribuable);
    if(!dirigeant)
        return res.status(404).json({'message': 'dirigeant not found'});
    const filteredDirigeant = data.dirigeants.filter(dir => dir.id_dirigeant != id_dirigeant && dir.id_contribuable != id_contribuable);
    data.setDirigeants(filteredDirigeant);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'dirigeant.json'),
        JSON.stringify(data.dirigeants)
    )
    res.json(data.dirigeants);
} 

const getDirigeantById = (req, res) => {
    const id_dirigeant = req.params.id_dirigeant;
    const dirigeant = data.diriges.find(dir => dir.id_dirigeant == id_dirigeant);
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
    const dirigeant = data.diriges.find(dir => dir.id_dirigeant == id_dirigeant && dir.id_contribuable === id_contribuable);

    if(req.body.nom_commercial_dirigeant) dirigeant.nom_commercial_dirigeant = req.body.nom_commercial_dirigeant;
    if(req.body.activite_dirigeant) dirigeant.activite_dirigeant = req.body.activite_dirigeant;
    if(req.body.titre_dirigeant) dirigeant.titre_dirigeant = req.body.titre_dirigeant;
    if(req.body.date_ouverture_dirigeant) dirigeant.date_ouverture_dirigeant = req.body.date_ouverture_dirigeant;
    if(req.body.adresse_dirigeant) dirigeant.adresse_dirigeant = req.body.adresse_dirigeant;
    if(req.body.fokontany_dirigeant) dirigeant.fokontany_dirigeant = req.body.fokontany_dirigeant;
    if(req.body.province_dirigeant) dirigeant.province_dirigeant = req.body.province_dirigeant;
    if(req.body.region_dirigeant) dirigeant.region_dirigeant = req.body.region_dirigeant;
    if(req.body.district_dirigeant) dirigeant.district_dirigeant = req.body.district_dirigeant;
    if(req.body.commune_dirigeant) dirigeant.commune_dirigeant = req.body.commune_dirigeant;
    if(req.body.telephone_dirigeant) dirigeant.telephone_dirigeant = req.body.telephone_dirigeant;
    if(req.body.autre_telephone_dirigeant) dirigeant.autre_telephone_dirigeant = req.body.autre_telephone_dirigeant;
    if(req.body.fax_dirigeants) dirigeant.fax_dirigeant = req.body.fax_dirigeant;
    if(req.body.email_dirigeant) dirigeant.email_dirigeant = req.body.email_dirigeant;
    if(req.body.proprietaire_local_dirigeant) dirigeant.proprietaire_local_dirigeant = req.body.proprietaire_local_dirigeant;

    const filteredDirigeant = data.dirigeants.filter(dir => dir.id_dirigeant !== id_dirigeant);
    const unsortedDirigeant = [...filteredDirigeant, dirigeant];

    data.setDirigeants(unsortedDirigeant.sort((a, b) => a.id_dirigeant > b.id_dirigeant ? 1 : a.id_dirigeant < b.id_dirigeant ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'dirigeant.json'),
        JSON.stringify(data.dirigeants)
    )
        res.json({'success': 'Modification effectué'});
}

const updateDirigeantAValide = async (req, res) => {
    const id_dirigeant = req.params.id_dirigeant;
    const id_contribuable = req.body.id_contribuable
    const dirigeant = data.dirigeants.find(dir => dir.id_dirigeant == id_dirigeant && dir.id_contribuable === id_contribuable);

    if(req.body.nom_commercial_dirigeant) dirigeant.nom_commercial_dirigeant = req.body.nom_commercial_dirigeant;
    if(req.body.activite_dirigeant) dirigeant.activite_dirigeant = req.body.activite_dirigeant;
    if(req.body.titre_dirigeant) dirigeant.titre_dirigeant = req.body.titre_dirigeant;
    if(req.body.date_ouverture_dirigeant) dirigeant.date_ouverture_dirigeant = req.body.date_ouverture_dirigeant;
    if(req.body.adresse_dirigeant) dirigeant.adresse_dirigeant = req.body.adresse_dirigeant;
    if(req.body.fokontany_dirigeant) dirigeant.fokontany_dirigeant = req.body.fokontany_dirigeant;
    if(req.body.province_dirigeant) dirigeant.province_dirigeant = req.body.province_dirigeant;
    if(req.body.region_dirigeant) dirigeant.region_dirigeant = req.body.region_dirigeant;
    if(req.body.district_dirigeant) dirigeant.district_dirigeant = req.body.district_dirigeant;
    if(req.body.commune_dirigeant) dirigeant.commune_dirigeant = req.body.commune_dirigeant;
    if(req.body.telephone_dirigeant) dirigeant.telephone_dirigeant = req.body.telephone_dirigeant;
    if(req.body.autre_telephone_dirigeant) dirigeant.autre_telephone_dirigeant = req.body.autre_telephone_dirigeant;
    if(req.body.fax_dirigeants) dirigeant.fax_dirigeant = req.body.fax_dirigeant;
    if(req.body.email_dirigeant) dirigeant.email_dirigeant = req.body.email_dirigeant;
    if(req.body.proprietaire_local_dirigeant) dirigeant.proprietaire_local_dirigeant = req.body.proprietaire_local_dirigeant;

    const filteredDirigeant = data.dirigeants.filter(dir => dir.id_dirigeant !== id_dirigeant);
    const unsortedDirigeant = [...filteredDirigeant, dirigeant];

    data.setDirigeants(unsortedDirigeant.sort((a, b) => a.id_dirigeant > b.id_dirigeant ? 1 : a.id_dirigeant < b.id_dirigeant ? -1 : 0));

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
    deleteDirigeantsNonValide
}