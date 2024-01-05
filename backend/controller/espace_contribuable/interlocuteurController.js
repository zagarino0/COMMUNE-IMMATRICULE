const data = {
    interlocuteurs: require('../../model/model_temp/interlocuteur.json'),
    setInterlocuteurs: function(data) {this.contribuables = data},
    interlocs: require('../../model/interlocuteur.json')
}

const path = require('path');
const fsPromises = require('fs').promises;

const setInterlocuteur = async (req, res) => {
    const id = data.interlocuteurs.length === 0 ? 1 : data.interlocuteurs[data.interlocuteurs.length - 1].id + 1;
    const id_contribuable = req.body.id_contribuable;
    const nom_interlocuteur = req.body.nom_interlocuteur;
    const titre_interlocuteur = req.body.titre_interlocuteur;
    const adresse_interlocuteur = req.body.adresse_interlocuteur;
    const telephone_interlocuteur = req.body.telephone_interlocuteur;
    const email_interlocuteur = req.body.interlocuteur;

    const newInterlocuteur = {
        "id_interlocuteur": id,
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

const getInterlocuteurById = (req, res) => {
    const id_interlocuteur = req.params.id_interlocuteur;
    const interlocuteur = data.interlocs.find(inter => inter.id_interlocuteur === id_interlocuteur);
    res.json(interlocuteur);
}

const getInterlocuteurByIdContribuable = (req, res) => {
    const id_contribuable = req.params.id_contribuable;
    let interlocuteur = [];
    data.interlocs.map(inter => {
        if(inter.id_contribuable === id_contribuable)
            interlocuteur.push(inter);
    })
    res.json(interlocuteur);
    interlocuteur = [];
}

const updateInterlocuteur = async (req, res) => {
    const id_interlocuteur = req.params.id_interlocuteur;
    const interlocuteur = data.interlocs.find(inter => inter.id_interlocuteur === id_interlocuteur);

    if(req.body.nom_interlocuteur)interlocuteur.nom_interlocuteur = req.body.nom_interlocuteur;
    if(req.body.titre_interlocuteur)interlocuteur.titre_interlocuteur = req.body.titre_interlocuteur;
    if(req.body.adresse_interlocuteur)interlocuteur.adresse_interlocuteur = req.body.adresse_interlocuteur;
    if(req.body.telephone_interlocuteur)interlocuteur.telephone_interlocuteur = req.body.telephone_interlocuteur;
    if(req.body.interlocuteur) interlocuteur.interlocuteur = req.body.interlocuteur;

    const filteredInterlocuteur = data.interlocuteurs.filter(inter => inter.id_interlocuteur !== id_interlocuteur);
    const unsortedInterlocuteur = [...filteredInterlocuteur, interlocuteur];
    data.setInterlocuteurs(unsortedInterlocuteur.sort((a, b) => a.id_activite > b.id_activite ? 1 : a.id_activite < b.id_activite ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'interlocuteur.json'),
        JSON.stringify(data.interlocuteurs)
    )

    res.json({'success': 'mise à jour effectué'});
}

module.exports = {
    setInterlocuteur,
    getInterlocuteurById,
    getInterlocuteurByIdContribuable,
    updateInterlocuteur
}