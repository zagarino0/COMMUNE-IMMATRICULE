const data = {
    autres: require('../../model/model_temp/autre.json'),
    setAutres: function (data) { this.autres = data }
}

const fsPromises = require('fs').promises;
const path = require('path');

const setAutres = async (req, res) => {
    const id_contribuable = req.body.id_contribuable;
    const id_autre = data.autres.length === 0 ? 0 : data.autres[data.autres.length - 1].id_autre + 1;
    const information_mail = req.body.information_mail;
    const depaseement_12_mois = req.body.depaseement_12_mois;
    const certification = req.body.certification;

    const autre = {
        'id_autre': id_autre,
        'id_contribuable': id_contribuable,
        'information_mail': information_mail,
        'depassement_12_mois': depaseement_12_mois,
        'certification': certification
    }

    data.setAutres([...data.autres, autre]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temps', 'autre.json'),
        JSON.stringify(data.contribs)
    )

}

module.exports = {
    setAutres
}