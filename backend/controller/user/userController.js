const data = {
    users: require('../../model/user.json'),
    setUser: function (data) { this.users = data}
}

const getAllUserActif = (req, res) => {
    res.json(data.users.filter(use => use.actif));
}

const desactivationUser = (req, res) => {
    
}

const reactivationUser = (req, res) => {

}

module.exports = {
    getAllUserActif,
    desactivationUser,
    reactivationUser
}