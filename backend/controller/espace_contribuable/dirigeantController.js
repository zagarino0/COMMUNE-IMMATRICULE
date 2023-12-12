const data = {
    dirigeants: require('../../model/model_temp/dirigeant.json'),
    setDirigeants: function(data) {this.contribuables = data}
}

const path = require('path');
const fsPromises = require('fs').promises;

const setDirigeant = async (req, res) => {
    
    const id = data.dirigeants.length === 0 ? 1 : data.dirigeants[data.dirigeants[data.dirigeants.length - 1]].id + 1;

    const nom_commercial_dirigeant = req.body.nom_commercial_dirigeant;
    
    const id_contribuable = "";

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
    const fax_dirigeant = req.body.fax_dirigeants;

    const email_dirigeant = req.body.email_dirigeant;
    const exportateur_dirigeant = req.body.exportateur_dirigeant;
    const importateur_dirigeant = req.body.importateur_dirigeant;

    const proprietaire_local_dirigeant = req.body.proprietaire_local_dirigeant;

    const newDirigeant = {
        "id": id,
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

module.exports = {
    setDirigeant
}