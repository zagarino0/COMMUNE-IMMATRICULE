const data = {
    users: require('../../model/user.json'),
    setUser: function (data) { this.users = data}
}

const fsPromises = require('fs').promises;
const path = require('path');

const getAllUserActif = (req, res) => {
    res.json(data.users.filter(use => use.actif));
}

const getAllUserInactif = (req, res) => {
    res.json(data.users.filter(use => !use.actif))
}

const getUserActifById = (req, res) => {
    const id_user = data.params.id_user;
    const user = data.users.find(use => use.id === id_user && use.actif);
    if(!user)
        return res.status(400).json({'message': 'user not found'});
    res.json(user);
}

const getUserActifByCode = (req, res) => {
    const code = req.body.code;
    const user = data.users.find(use => use.code === code && use.actif);
    if(!user)
        return res.status(400).json({'message': 'user not found'});
    res.json(user);
}

const getUserInactifById = (req, res) => {
    const id_user = data.params.id_user;
    const user = data.users.find(use => use.id === id_user && !use.actif);
    if(!user)
        return res.status(400).json({'message': 'user not found'});
    res.json(user);
}

const getUserInactifByCode = (req, res) => {
    const code = req.body.code;
    const user = data.users.find(use => use.code === code && !use.actif);
    if(!user)
        return res.status(400).json({'message': 'user not found'});
    res.json(user);
}

const desactivationUser = async (req, res) => {
    const code = req.body.code;    
    const user = data.users.find(use => use.code === code && use.actif);
    if(!code)
        res.status(401).json({'message': 'utilisateur introuvable'});
    
    user.actif = false;

    const filteredUser = data.users.filter(use => use.code !== code);
    const unsortedUser = [...filteredUser, user];
    data.setUser([unsortedUser.sort((a, b) => a.id_user > b.id_user ? 1 : a.id_user < b.id_user ? -1 : 0)]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'user.json'),
        JSON.stringify(data.users)
    ); 
    res.json({'success': 'Desactivation effectué'})
}

const reactivationUser = async (req, res) => {
    const code = req.body.code;    
    const user = data.users.find(use => use.code === code && !use.actif);
    if(!code)
        res.status(401).json({'message': 'utilisateur introuvable'});
    
    user.actif = true;

    const filteredUser = data.users.filter(use => use.code !== code);
    const unsortedUser = [...filteredUser, user];
    data.setUser([unsortedUser.sort((a, b) => a.id_user > b.id_user ? 1 : a.id_user < b.id_user ? -1 : 0)]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'user.json'),
        JSON.stringify(data.users)
    ); 
    res.json({'success': 'Desactivation effectué'})
}

const getAllUser = (req, res) => {
    res.json(data.users);
}

const deleteUser = async (req, res) => {
    const code = req.body.code;
    const user = data.users.find(use => use.code === code);
    if(!user)
        return res.status(404).json({'message': `user ${code} not found`})
    const filteredUser = data.users.filter(use => use.code !== code);
    data.setUser(filteredUser);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'user.json'),
        JSON.stringify(data.users)
    );
    res.status(200).json({'success': `user ${user.id} deleted`});
}

const getUserByCode = (req, res) => {
    const code = req.body.code;
    const user = data.users.find(use => use.code === code);
    if(!user)
        return res.status(404).json({'message': `user ${code} not found`});
    res.json(user);
}

module.exports = {
    getAllUserActif,
    deleteUser,
    getUserByCode,
    desactivationUser,
    reactivationUser,
    getAllUserInactif,
    getUserActifById,
    getUserActifByCode,
    getUserInactifById,
    getUserInactifByCode,
    getAllUser
}