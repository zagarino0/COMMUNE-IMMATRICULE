const data = {
    datas: ('../../model/model_temp/siege.json'),
    setDatas: function(data) {this.datas = data}
}

const path = require('path');
const fsPromises = require('fs').promises;

const setSiege = async (req, res) => {

    const id = data.datas.length === 0 ? 1 : data.datas[data.datas.length - 1];
    const id_contribuable = "";
    const adresse_actuelle = req.body.adresse_actuelle;
    const fokontany = req.body.fonkotany;
    const district = req.body.district;
    const region = req.body.region;
    const province = req.body.province;

    const newAdresse = {
        "id": id,
        "id_contribuable": id_contribuable,
        "adresse_actuel": adresse_actuelle,
        "fokontany": fokontany, 
        "district": district,
        "region": region,
        "province": province
    }

    data.setDatas([...data.datas, newAdresse]);
    res.json(data.datas);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'siege.json'),
        JSON.stringify(data.datas)
    )
}

module.exports = {
    setSiege
}