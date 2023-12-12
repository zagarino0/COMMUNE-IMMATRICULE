const data = {
    interlocuteurs: require('../../model/model_temp/interlocuteur.json'),
    setInterlocuteurs: function(data) {this.contribuables = data}
}

const path = require('path');
const fsPromises = require('fs').promises;

const setInterlocuteur = async (req, res) => {
    const id = data.interlocuteurs.length === 0 ? 1 : data.interlocuteurs[data.interlocuteurs.length - 1].id + 1;
    const id_contribuable = "";
    const nom_interlocuteur = req.body.nom_interlocuteur;
    const titre_interlocuteur = req.body.titre_interlocuteur;
    const adresse_interlocuteur = req.body.adresse_interlocuteur;
    const telephone_interlocuteur = req.body.telephone_interlocuteur;
    const email_interlocuteur = req.body.interlocuteur;

    const newInterlocuteur = {
        "id": id,
        "id_contribuable": id_contribuable,
        "nom_interlocuteur": nom_interlocuteur,
        "titre_interlocuteur": titre_interlocuteur,
        "adresse_interlocuteur": adresse_interlocuteur,
        "telephone_interlocuteur": telephone_interlocuteur,
        "email_interlocuteur": email_interlocuteur
    }

    data.setInterlocuteurs([...data.interlocuteurs, newInterlocuteur]);
    res.json(data.interlocuteurs);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'interlocuteur.json'),
        JSON.stringify(data.interlocuteurs)
    )
}


module.exports = {
    setInterlocuteur
}