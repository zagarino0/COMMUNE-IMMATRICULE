const data = {
    etablissements: require('../../model/model_temp/etablissement.json'),
    setEtablissements: function (data) { this.etablissements = data }
}

const path = require('path');
const fsPromises = require('fs').promises;

const setEtablissements = async (req, res) => {
    const id_etablissement = data.etablissements.length === 0 ? 1 : data.etablissements[data.etablissements.length - 1].id_etablissement + 1;
    const id_contribuable = req.body.id_contribuable;
    const etablissement_nom_commercial = req.body.etablissement_nom_commercial;
    const etablissement_activite = req.body.etablissement_activite;
    const etablissement_titre = req.body.etablissement_titre;
    const etablissement_date_ouverture = req.body.etablissement_date_ouverture;
    const etablissement_adresse = req.body.etablissement_adresse;
    const etablissement_fokontany = req.body.etablissement_fokontany;
    const etablissement_province = req.body.etablissement_province;
    const etablissement_region = req.body.etablissement_region;
    const etablissement_district = req.body.etablissement_district;
    const etablissement_commune = req.body.etablissement_commune;
    const etablissement_telephone = req.body.etablissement_telephone;
    const etablissement_autre_telephone = req.body.etablissement_autre_telephone;
    const etablissement_fax = req.body.etablissement_fax;
    const etablissement_email = req.body.etablissement_email;
    const etablissement_exportateur = req.body.etablissement_exportateur;
    const etablissement_importateur = req.body.etablissement_importateur;
    const etablissement_proprietaire_local = req.body.etablissement_proprietaire_local;
    const etablissement_type_proprietaire = req.body.etablissement_type_proprietaire;
    const etablissement_nif_proprietaire = req.body.etablissement_nif_proprietaire;

    const etablissement = {
        'id_etablissement': id_etablissement,
        'id_contribuable': id_contribuable,
        'etablissement_nom_commercial': etablissement_nom_commercial,
        'etablissement_activite': etablissement_activite,
        'etablissement_titre': etablissement_titre,
        'etablissement_date_ouverture': etablissement_date_ouverture,
        'etablissement_adresse': etablissement_adresse,
        'etablissement_fokontany': etablissement_fokontany,
        'etablissement_province': etablissement_province,
        'etablissement_region': etablissement_region,
        'etablissement_district': etablissement_district,
        'etablissement_commune': etablissement_commune,
        'etablissement_telephone': etablissement_telephone,
        'etablissement_autre_telephone': etablissement_autre_telephone,
        'etablissement_fax': etablissement_fax,
        'etablissement_email': etablissement_email,
        'etablissement_exportateur': etablissement_exportateur,
        'etablissement_importateur': etablissement_importateur,
        'etablissement_proprietaire_local': etablissement_proprietaire_local,
        'etablissement_type_proprietaire': etablissement_type_proprietaire,
        'etablissement_nif_proprietaire': etablissement_nif_proprietaire

    }

    data.setEtablissements([...data.etablissements, etablissement]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'etablissement.json'),
        JSON.stringify(data.autres)
    )

        res.json({'success': 'enregistrement effectuée'});
}


module.exports = {
    setEtablissements,
}