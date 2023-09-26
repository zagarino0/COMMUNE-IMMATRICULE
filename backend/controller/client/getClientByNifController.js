const clients = require('../../model/client.json');

const getClientByNif = (req, res) => {

    let tableClient = [];

    clients.map(elem => {
        (elem.nif === req.body.nif && req.body.datedebutexe === "" && req.body.dateclotexe === "") ? tableClient.push(elem) : (elem.nif === req.body.nif && elem.date_debut_exe === req.body.datedebutexe && elem.date_cloture_exe === req.body.dateclotexe) ? tableClient.push(elem) : null ; 
    })

    if(tableClient.lenght === 0){
        return res.status(400).json({'message': 'client not found'});
    }

    res.json(tableClient);

    tableClient = [];
}

module.exports = getClientByNif;