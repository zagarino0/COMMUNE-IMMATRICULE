const data = {
    users: require('../../model/user.json'),
    setUser: function (data) { this.users = data }
}

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

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
    if(!user)
        res.status(401).json({'message': 'utilisateur introuvable'});
    
    user.actif = false;

    const filteredUser = data.users.filter(use => use.code !== code);
    const unsortedUser = [...filteredUser, user];
    data.setUser([unsortedUser.sort((a, b) => a.id_user > b.id_user ? 1 : a.id_user < b.id_user ? -1 : 0)]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'user.json'),
        JSON.stringify(data.users)
    ); 
    res.json(data.users)
}

const reactivationUser = async (req, res) => {
    const code = req.body.code;    
    const user = data.users.find(use => use.code === code && !use.actif);
    if(!user)
        res.status(401).json({'message': 'utilisateur introuvable'});
    
    user.actif = true;

    const filteredUser = data.users.filter(use => use.code !== code);
    const unsortedUser = [...filteredUser, user];
    data.setUser([unsortedUser.sort((a, b) => a.id_user > b.id_user ? 1 : a.id_user < b.id_user ? -1 : 0)]);

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'user.json'),
        JSON.stringify(data.users)
    ); 
    res.json(data.users)
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

const handleUpdatePassword = async (req, res) => {
    const code = req.body.code;
    const password = req.body.password;
    const newPassword = await bcrypt.hash(req.body.newPassword, 10);

    const user = data.users.find(us => us.code === code);
    if (!user) {
        return res.status(400).json({ 'message': 'user not found' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
        user.password = newPassword;
        const filteredArray = data.users.filter(us => us.code !== code);
        const unsortedArray = [...filteredArray, user];
        data.setUser(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
        await fsPromises.writeFile(
            path.join(__dirname, '..', '..', 'model', 'user.json'),
            JSON.stringify(data.users)
        )
        res.json({ "success": "password has changed" });
    }
    else {
        res.json({ "message": "password doesn't match" });
    }

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
    getAllUser,
    handleUpdatePassword
}