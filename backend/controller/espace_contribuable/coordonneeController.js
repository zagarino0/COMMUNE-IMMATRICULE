const data = {
    coordonnees: require('../../model/model_temp/coordonees.json'),
    setCoordonnees: function (data) { this.coordonnees = data }
}

const setCoordonnees = async (req, res) => {
    const id_contribuable = req.body.id_contribuable;
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;

    const id_coordonnee = data.coordonnees.length === 0 ? 1 : data.coordonnees[data.coordonnees.length - 1].id_coordonnee + 1;

    const coordonnee = {
        "id_coordonnee": id_coordonnee,
        "id_contribuable": id_contribuable,
        "longitude": longitude,
        "latitude": latitude
    }

    data.setCoordonnees([...data.coordonnees, coordonnee]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'coordonnees.json'),
        JSON.stringify(data.activites)
    ) 
    res.json(coordonnee);
}

module.exports = {
    setCoordonnees
}