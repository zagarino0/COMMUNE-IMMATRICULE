const data = {
    contribuables: require('../../model/contribuable.json'),
    contribuablesRejetes: require('../../model/model_delete/contribuable.json')
}

const getAllContribuableValide = (req, res) => {
    res.json(data.contribuables);
}

const getContribuableValideByReferenceFiscal = (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal);
    if(!contribuable)   
        return res.status(400).json({'message': 'contribuable introuvable'});
    res.json(contribuable);
}

const getDemandeImmatriculationRejete = (req, res) => {
    res.json(data.contribuablesRejetes);
}

const getDemandeImmatriculationRejeteByReferenceFiscal = (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribuablesRejetes.find(con => con.reference_fiscal === reference_fiscal);
    if(!contribuable)
        return res.status(400).json({'message': 'contribuable introuvable'});
    res.json(contribuable);
}

const getContribuableActif = (req, res) => {
    const contribuables = data.contribuables.filter(con => con.actif === true);
    res.json(contribuables);
}

const getContribuableActifByReferenceFiscal = (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal);
    if(!contribuable)
        return res.status.json({'message': 'contribuable introuvable'});
    res.json(contribuable);
}

const getContribuableNouvellementImmatricule = (req, res) => {
    const contribuables = [];
    data.contribuables.map(con => {
        if((new Date(con.date_creation).getDay() - (new Date())) <= 7)
            contribuables.push(con);
    })
    res.json(contribuables);
    contribuables.splice(0, contribuables.length);
}

const getContribuableNouvellementImmatriculeByReferenceFiscal = (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    let contribuable = {};
    data.contribuables.map(con => {
        if((new Date(con.date_creation).getDay() - (new Date())) <= 7 && con.reference_fiscal === reference_fiscal)
            contribuable = con;
    })
    res.json(contribuable);
    contribuable = {};
}

module.exports = {
    getAllContribuableValide,
    getContribuableValideByReferenceFiscal,
    getDemandeImmatriculationRejete,
    getDemandeImmatriculationRejeteByReferenceFiscal,
    getContribuableActif,
    getContribuableActifByReferenceFiscal,
    getContribuableNouvellementImmatricule,
    getContribuableNouvellementImmatriculeByReferenceFiscal
}