const data = {
    validations: require('../../model/validation.json'),
    contribuables: require('../../model/contribuable.json'),
    modifications: require('../../model/modificationContribuable.json'),
    contribuablesNonValide: require('../../model/model_temp/contribuable.json')    
}


const getContribuables = (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;

    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal);
    if(!contribuable)
        return res.status(400).json({'message': 'contribuable introuvable'});

    const validation = data.validations.find(val => val.id_contribuable === contribuable.id);
    if(!validation)
        return res.json({'message': 'Le contribuable n\'est pas encore validé'});

    res.json(contribuable);
}

const getContribuablebloque = (req, res) => {
    let contribuables = [];

    data.contribuables.map(con => {
        data.validations.map(val => {
            data.modifications.map(mod => {
                if(mod.blockage && val.id_contribuable === con.id && mod.id_contribuable === val.id_contribuable)
                    contribuables.push({...val, ...mod, ...con});
            })
        })
    })

    res.json(contribuables);
    contribuables = [];
}

const getContribuableNonBloque = (req, res) => {
    let contribuables = [];

    data.contribuables.map(con => {
        data.validations.map(val => {
            data.modifications.map(mod => {
                if(!mod.blockage && val.id_contribuable === con.id && mod.id_contribuable === val.id_contribuable)
                    contribuables.push({...val, ...mod, ...con});
            })
        })
    })

    res.json(contribuables);
    contribuables = [];
}

const getListeDemandeAValide = (req, res) => {
    res.json(data.contribuablesNonValide);
}

const getListeMiseAJourAValide = (req, res) => {
    let contribuables = [];

    res.json(contribuables);
    contribuables = [];
}

module.exports = {
    getContribuables,
    getContribuablebloque,
    getContribuableNonBloque,
    getListeDemandeAValide,
    getListeMiseAJourAValide
}