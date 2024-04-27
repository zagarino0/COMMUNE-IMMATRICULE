const data = {
    contribuables: require('../../model/contribuable.json'),
    contribuablesRejetes: require('../../model/model_delete/contribuable.json'),
    cessations: require('../../model/cessation_activite.json'),
    history: require('../../model/history.json'),
    setHistory: function (data) {this.history = data },
    attestation: require('../../model/attestation.json')
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

const getContribuableVeilleuse = (req, res) => {
    const contribuables = data.contribuables.filter(con => !con.actif);
    res.json(contribuables);
}

const getContribuableVeilleuseByReferenceFiscal = (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal && !con.actif)
    if(!contribuable)
        return res.status(400).json({'message': 'Contribuable introuvable'});

    res.json(contribuable);
}

const getContribuableEveille = (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal && con.actif)
    if(!contribuable)
        return res.status(400).json({'message': 'Contribuable introuvable'});

    res.json(contribuable);
}

const getContribuableEveilleByReferenceFiscal = (req, res) => {
    const contribuables = data.contribuables.filter(con => con.actif !== false);
    res.json(contribuables);
}

const getCessationContribuable = (req, res) => {
    let contribuable = [];
    data.contribuables.map(con => {
        data.cessations.map(ces => {
            if(con.id === ces.id_contribuable && ces.cessation && !con.actif)
                contribuable.push({...con, ...ces});
        })
    })
    if(contribuable.length === 0)
        return res.status(404).json({'message': 'contribuable introuvable'});
    res.json(contribuable);
}

const getCessationContribuableByAll = (req, res) => {
    const contribuable = data.contribuables;
    const contribuableCesse = [];

    contribuable.map(con => {
        data.cessations.map(ces => {
            if(con.id == ces.id_contribuable && ces.cessation && !con.actif)
                contribuableCesse.push({...con, ...ces});
        })
    })
    res.json(contribuableCesse);
    contribuableCesse = [];
}

const getAllContribuableReprise = (req, res) => {
    const contribuable = data.contribuables;
    const contribuableReprise = [];

    contribuable.map(con => {
        data.cessations.map(ces => {
            if(con.id == ces.id_contribuable && ces.reprise && con.actif)
                contribuableReprise.push({...con, ...ces});
        })
    })
    res.json(contribuableReprise);
    contribuableReprise = [];
}

const getAllContribuableAttestee = (req, res) => {
    const contribuable = data.contribuables;
    const contribuableCesse = [];

    contribuable.map(con => {
        data.cessations.map(ces => {
            data.attestation.map(att => {
                if(con.id == ces.id_contribuable && ces.cessation && !con.actif && con.id === att.id_contribuable && att.attestation){
                    con.cessation = ces;
                    con.attestation = att;
                    contribuableCesse.push(con);
                }
            })
        })
    })
    res.json(contribuableCesse);
    contribuableCesse = [];
}


const getCessationContribuableById = (req, res) => {
    const id_contribuable = req.params.id_contribuable;
    const contribuable = data.contribuables.find(con => con.id === id_contribuable);
    contribuable.cessation = data.cessations.find(ces => ces.id_contribuable === id_contribuable && ces.cessation);
    if(contribuable.cessation.cessation)
        return res.status(404).json({'message': 'Contribuable introuvable'});
    res.json(contribuable);
}

const getContribuableRadies = (req, res) => {
    let contribuable = [];
    data.contribuablesRejetes.map(con => {
        data.cessations.map(ces => {
            if(con.id === ces.id_contribuable)
                contribuable.push({...id, ...contribuable});
        })
    })
    if(contribuable.length === 0)
        return res.status(404).json({'message': 'Contribuable introuvable'});
    res.json(contribuable);
}

const getContribuableRadieByAll = (req, res) => {
    const reference_fiscal = data.contribuablesRejetes.find(con => con.reference_fiscal === advened);
    data.contribuablesRejetes.map(con => {
        data.cessations.map(ces => {
            if(con.id === ces.id_contribuable && con.reference_fiscal === reference_fiscal)
                contribuable.push({...con, ...contribuable});
        })
    })
    if(contribuable.length === 0)
        return res.status(404).json({'message': 'Contribuable introuvable'});

    res.json(contribuable);
}

const getContribuableRadieById = (req, res) => {
    const id = req.body.id;
    data.contribuablesRejetes.map(con => {
        data.cessations.map(ces => {
            if(con.id === ces.id_contribuable && con.id === id)
                contribuable.push({...con, ...contribuable});
        })
    })
    if(contribuable.length === 0)
        return res.status(404).json({'message': 'Contribuable introuvable'});

    res.json(contribuable);
}


module.exports = {
    getAllContribuableValide,
    getContribuableValideByReferenceFiscal,
    getDemandeImmatriculationRejete,
    getDemandeImmatriculationRejeteByReferenceFiscal,
    getContribuableActif,
    getContribuableActifByReferenceFiscal,
    getContribuableNouvellementImmatricule,
    getContribuableNouvellementImmatriculeByReferenceFiscal,
    getContribuableVeilleuse,
    getContribuableVeilleuseByReferenceFiscal,
    getContribuableEveille,
    getContribuableEveilleByReferenceFiscal,    
    getCessationContribuable,
    getCessationContribuableByAll,
    getCessationContribuableById,
    getAllContribuableValide,
    getAllContribuableReprise,
    getContribuableRadieById,
    getContribuableRadies,
    getContribuableRadieByAll,
    getAllContribuableAttestee

}