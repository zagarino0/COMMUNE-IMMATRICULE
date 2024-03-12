const data = {
    interlocuteurs: require('../../model/model_temp/interlocuteur.json'),
    setInterlocuteurs: function(data) {this.interlocuteurs = data},
    interlocs: require('../../model/interlocuteur.json'),
    history_contribuable: require('../../model/history_contribuable.json'),
    setHistoryContribuable: function (data) { this.history_contribuable = data }
}

const path = require('path');
const fsPromises = require('fs').promises;

const setInterlocuteur = async (req, res) => {
    const id = data.interlocuteurs.length === 0 ? 1 : data.interlocuteurs[data.interlocuteurs.length - 1].id + 1;
    const id_contribuable = req.body.id_contribuable;
    const nom = req.body.nom;
    const titre = req.body.titre;
    const adresse = req.body.adresse;
    const telephone = req.body.telephone;
    const email = req.body.email;

    const newInterlocuteur = {
        "id": id,
        "id_contribuable": id_contribuable,
        "nom": nom,
        "titre": titre,
        "adresse": adresse,
        "telephone": telephone,
        "email": email
    }

    console.log(newInterlocuteur);

    data.setInterlocuteurs([...data.interlocuteurs, newInterlocuteur]);
    res.json(data.interlocuteurs);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'interlocuteur.json'),
        JSON.stringify(data.interlocuteurs)
    )
}

const getInterlocuteurById = (req, res) => {
    const id = req.params.id;
    const interlocuteur = data.interlocs.find(inter => inter.id === id);
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
    const id = req.params.id;
    const id_contribuable = req.body.id_contribuable;
    const interlocuteur = data.interlocs.find(inter => inter.id == id_interlocuteur && inter.id_contribuable === id_contribuable);
    if(!interlocuteur)
        return res.status(404).json({'message': 'Interlocuteur introuvable'});

    if(req.body.nom)interlocuteur.nom = req.body.nom;
    if(req.body.titre)interlocuteur.titre = req.body.titre;
    if(req.body.adresse)interlocuteur.adresse = req.body.adresse;
    if(req.body.telephone)interlocuteur.telephone = req.body.telephone;
    if(req.body.interlocuteur) interlocuteur.interlocuteur = req.body.interlocuteur;

    const filteredInterlocuteur = data.interlocuteurs.filter(inter => inter.id != id_interlocuteur && inter.id_contribuable != id_contribuable);
    const unsortedInterlocuteur = [...filteredInterlocuteur, interlocuteur];
    data.setInterlocuteurs(unsortedInterlocuteur);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'interlocuteur.json'),
        JSON.stringify(data.interlocuteurs)
    )

    res.json({'success': 'mise à jour effectué'});
}

const updateInterlocuteurByContribuable = async (req, res) => {
    const id_interlocuteur = req.params.id_interlocuteur;
    const id_contribuable = req.body.id_contribuable;
    const interlocuteur = data.interlocs.find(inter => inter.id == id_interlocuteur && inter.id_contribuable === id_contribuable);
    if(!interlocuteur)
        return res.status(404).json({'message': 'Interlocuteur introuvable'});

    if(req.body.nom)interlocuteur.nom = req.body.nom;
    if(req.body.titre)interlocuteur.titre = req.body.titre;
    if(req.body.adresse)interlocuteur.adresse = req.body.adresse;
    if(req.body.telephone)interlocuteur.telephone = req.body.telephone;
    if(req.body.interlocuteur) interlocuteur.interlocuteur = req.body.interlocuteur;

    const filteredInterlocuteur = data.interlocuteurs.filter(inter => inter.id != id && inter.id_contribuable != id_contribuable);
    const unsortedInterlocuteur = [...filteredInterlocuteur, interlocuteur];
    data.setInterlocuteurs(unsortedInterlocuteur);
    const id_history_contribuable = data.history_contribuable.length === 0 ? 1 : data.history_contribuable[data.history_contribuable.length - 1].id_history_contribuable + 1;
    const history_contribuable = {
        'id_history_contribuable': id_history_contribuable,
        'id_contribuable': req.body.id_contribuable,
        'motif': 'Mise à jour actionnaire',
        'date_modification': new Date()
    }

    data.setHistoryContribuable([...data.history_contribuable, history_contribuable])
    
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history_contribuable.json'),
        JSON.stringify(data.history_contribuable)
    )
    
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'interlocuteur.json'),
        JSON.stringify(data.interlocuteurs)
    )

    res.json({'success': 'mise à jour effectué'});
}


const updateInterlocuteurAValide = async (req, res) => {
    const id_interlocuteur = req.params.id_interlocuteur;
    const id_contribuable = req.body.id_contribuable;
    const interlocuteur = data.interlocuteurs.find(inter => inter.id == id_interlocuteur && inter.id_contribuable === id_contribuable);

    if(!interlocuteur)
        res.status(404).json({'message': 'interlocuteur introuvable'});
    if(req.body.nom)interlocuteur.nom = req.body.nom;
    if(req.body.titre)interlocuteur.titre = req.body.titre;
    if(req.body.adresse)interlocuteur.adresse = req.body.adresse;
    if(req.body.telephone)interlocuteur.telephone = req.body.telephone;
    if(req.body.interlocuteur) interlocuteur.interlocuteur = req.body.interlocuteur;

    const filteredInterlocuteur = data.interlocuteurs.filter(inter => inter.id != id_interlocuteur && inter.id_contribuable != id_contribuable);
    const unsortedInterlocuteur = [...filteredInterlocuteur, interlocuteur];
    data.setInterlocuteurs(unsortedInterlocuteur);

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
    updateInterlocuteur,
    updateInterlocuteurAValide,
    updateInterlocuteurByContribuable
}