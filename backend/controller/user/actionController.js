const data = {
    history: require('../../model/history.json'),
    setHistory: function (data) { this.history = data },
    users: require('../../model/user.json')
}

const getAllAction = (req, res) => {
    res.json(data.history)
}

const getActionByUserId = (req, res) => {
    const id_user = req.params.id_user;
    const history = data.history.filter(his => his.id_user === id_user);
    res.json(history);
}

const getActionByAll = (req, res) => {
    const date_debut = req.body.date_debut;
    const date_fin = req.body.date_fin;
    const login = req.body.date_fin;

   

}

module.exports = {
    getAllAction,
    getActionByUserId
}