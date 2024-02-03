const data = {
    datas: require('../../model/model_temp/siege.json'),
    setDatas: function(data) {this.datas = data},
    siege: require('../../model/siege.json')
}

const path = require('path');
const fsPromises = require('fs').promises;

const setSiege = async (req, res) => {

    const id = data.datas.length === 0 ? 1 : data.datas[data.datas.length - 1].id_siege + 1;
    const id_contribuable = req.body.id_contribuable;
    const adresse_actuelle = req.body.adresse_actuelle;
    const fokontany = req.body.fonkotany;
    const commune = req.body.commune;
    const district = req.body.district;
    const region = req.body.region;
    const province = req.body.province;

    const newAdresse = {
        "id_siege": id,
        "id_contribuable": id_contribuable,
        "adresse_actuel": adresse_actuelle,
        "fokontany": fokontany, 
        "district": district,
        "region": region,
        "commune": commune,
        "province": province
    }

    data.setDatas([...data.datas, newAdresse]);
    res.json(data.datas);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'siege.json'),
        JSON.stringify(data.datas)
    )
}

const getSiegeById = (req, res) => {
    const id_siege = req.params.id_siege;
    const siege = data.siege.find(sie => sie.id_siege === id_siege);
    res.json(siege);
}

const getSiegeByIdContribuable = (req, res) => {
    const id_contribuable = req.params.id_contribuable;
    let sieges = [];
    data.siege.map(sie => {
        if(sie.id_contribuable === id_contribuable)
            sieges.push(sie);
    })
    res.json(sieges);
    sieges = [];
}

const updateSiege = async (req, res) => {
    const id_siege = req.params.id_siege;
    const id_contribuable = req.body.id_contribuable;
    const siege = data.siege.find(dat => dat.id_siege === id_siege && dat.id_contribuable === id_contribuable);
    
    if(req.body.adresse_actuelle) siege.adresse_actuel = req.body.adresse_actuelle;
    if(req.body.fonkotany) siege.fokontany = req.body.fonkotany;
    if(req.body.district) siege.district = req.body.district;
    if(req.body.region) siege.region = req.body.region;
    if(req.body.province) siege.province = req.body.province;

    const filterSiege = data.datas.filter(dat => dat.id_siege !== siege.id_siege);
    const unsortedSiege = [...filterSiege, siege];
    data.setDatas(unsortedSiege.sort((a, b) => a.id_siege > b.id_siege ? 1 : a.id_siege < b.id_siege ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'siege.json'),
        JSON.stringify(data.datas)
    )
}


const updateSiegeAValide = async (req, res) => {
    const id_siege = req.params.id_siege;
    const id_contribuable = req.body.id_contribuable;
    const siege = data.datas.find(dat => dat.id_siege === id_siege && dat.id_contribuable === id_contribuable);
    
    if(req.body.adresse_actuelle) siege.adresse_actuel = req.body.adresse_actuelle;
    if(req.body.fonkotany) siege.fokontany = req.body.fonkotany;
    if(req.body.district) siege.district = req.body.district;
    if(req.body.region) siege.region = req.body.region;
    if(req.body.province) siege.province = req.body.province;

    const filterSiege = data.datas.filter(dat => dat.id_siege !== siege.id_siege);
    const unsortedSiege = [...filterSiege, siege];
    data.setDatas(unsortedSiege.sort((a, b) => a.id_siege > b.id_siege ? 1 : a.id_siege < b.id_siege ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'siege.json'),
        JSON.stringify(data.datas)
    )
}

module.exports = {
    setSiege,
    getSiegeById,
    getSiegeByIdContribuable,
    updateSiege,
    updateSiegeAValide
}