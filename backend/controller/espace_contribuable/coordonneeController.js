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
        JSON.stringify(data.coordonnees)
    ) 
    res.json(coordonnee);
}

const getCoordonneesById = (req, res) => {
    const id_coordonnee = req.params.id_coordonnee;
    const coordonnee = data.coordonnees.find(coo => coo.id_coordonnee === id_coordonnee);
    res.json(coordonnee);
}

const getCoordonneesByIdContribuable = (req, res) => {
    const id_contribuable = req.params.id_contribuable;
    const coordonnee = data.coordonnees.find(coo => coo.id_contribuable === id_contribuable);
    res.json(coordonnee);
}

const updateCoordonnees = async (req, res) => {
    const id_coordonnee = data.params.id_coordonnee;
    const coordonees = data.coordonnees.find(coo => coo.id_coordonnee === id_coordonnee);

    if(req.body.longitude) coordonees.longitude = req.body.longitude;
    if(req.body.latitude) coordonees.latitude = req.body.latitude;

    const filteredCoordonnees = data.coordonnees.filter(coo => coo.id_coordonnee !== id_coordonnee);
    const unsortedCoordonnees = [...filteredCoordonnees, coordonees];
    data.setCoordonnees(unsortedCoordonnees.sort((a, b) => a.id_coordonnee > b.id_coordonnee ? 1 : a.id_coordonnee < b.id_coordonnee ? -1 : 0));

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_temp', 'coordonnees.json'),
        JSON.stringify(data.coordonnees)
    )  
}

module.exports = {
    setCoordonnees,
    getCoordonneesById,
    updateCoordonnees,
    getCoordonneesByIdContribuable
}