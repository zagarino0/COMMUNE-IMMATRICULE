const data = {
    dirigeants: require('../../model/model_temp/dirigeant.json'),
    setDirigeants: function(data) {this.contribuables = data},
    diriges: require('../../model/dirigeant.json')
}

const path = require('path');
const fsPromises = require('fs').promises;

const setDirigeant = async (req, res) => {
    
    const id = data.dirigeants.length === 0 ? 1 : data.dirigeants[data.dirigeants[data.dirigeants.length - 1]].id + 1;

    const nom_commercial_dirigeant = req.body.nom_commercial_dirigeant;
    
    const id_contribuable = req.body.id_contribuable;

    const activite_dirigeant = req.body.activite_dirigeant;
    const titre_dirigeant = req.body.titre_dirigeant;

    const date_ouverture_dirigeant = req.body.date_ouverture_dirigeant;
    const adresse_dirigeant = req.body.adresse_dirigeant;

    const fokontany_dirigeant = req.body.fokontany_dirigeant;
    const province_dirigeant = req.body.province_dirigeant;

    const region_dirigeant = req.body.region_dirigeant;
    const district_dirigeant = req.body.district_dirigeant;

    const commune_dirigeant = req.body.commune_dirigeant;
    const telephone_dirigeant = req.body.telephone_dirigeant;

    const autre_telephone_dirigeant = req.body.autre_telephone_dirigeant;
    const fax_dirigeant = req.body.fax_dirigeant;

    const email_dirigeant = req.body.email_dirigeant;
    const exportateur_dirigeant = req.body.exportateur_dirigeant;
    const importateur_dirigeant = req.body.importateur_dirigeant;

    const proprietaire_local_dirigeant = req.body.proprietaire_local_dirigeant;

    const newDirigeant = {
        "id_dirigeant": id,
        "id_contribuable": id_contribuable,
        "nom_commercial_dirigeant": nom_commercial_dirigeant,
        "activite_dirigeant":activite_dirigeant,
        "titre_dirigeant": titre_dirigeant,
        "date_ouverture_dirigeant": date_ouverture_dirigeant,
        "adresse_dirigeant": adresse_dirigeant,
        "fokontany_dirigeant": fokontany_dirigeant,
        "province_dirigeant": province_dirigeant,
        "region_dirigeant": region_dirigeant,
        "district_dirigeant": district_dirigeant,
        "commune_dirigeant": commune_dirigeant,
        "telephone_dirigeant": telephone_dirigeant,
        "autre_telephone_dirigeant": autre_telephone_dirigeant,
        "fax_dirigeant": fax_dirigeant,
        "email_dirigeant": email_dirigeant,
        "exportateur_dirigeant": exportateur_dirigeant,
        "importateur_dirigeant": importateur_dirigeant,
        "proprietaire_local_dirigeant": proprietaire_local_dirigeant
    }

    data.setDirigeants([...data.dirigeants, newDirigeant]);
    res.json(data.dirigeants);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'dirigeant.json'),
        JSON.stringify(data.dirigeants)
    )

}

const getDirigeantById = (req, res) => {
    const id_dirigeant = req.params.id_dirigeant;
    const dirigeant = data.diriges.find(dir => dir.id_dirigeant === id_dirigeant);
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
    const dirigeant = data.diriges.find(dir => dir.id_dirigeant === id_dirigeant);


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
    if(req.body.exportateur_dirigeant) dirigeant.exportateur_dirigeant = req.body.exportateur_dirigeant;
    if(req.body.importateur_dirigeant) dirigeant.importateur_dirigeant = req.body.importateur_dirigeant;
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
    updateDirigeant
}