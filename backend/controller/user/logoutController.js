const data = {
    users: require('../../model/user.json'),
    setUsers: function (data) { this.users = data },
    history: require('../../model/history.json'),
    setHistory: function (data) { this.history = data }
}

const fsPromises = require('fs').promises;
const path = require('path');

const handleLogout = async (req, res) => {
    // on client also delete the accessToken


    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //No content
    const refreshToken = cookies.jwt;

    // is refreshToken in db?
    const foundUser = data.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true });
        return res.sendStatus(403); //forbidden
    }
    // Delete refreshToken in db
    const otherUsers = data.users.filter(person => person.refreshToken !== foundUser.refreshToken);
    const currentUser = { ...foundUser, refreshToken: '' };
    data.setUsers([...otherUsers, currentUser]);
    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;
    const history = {
        'id_history': id_history,
        'id_contribuable': '',
        'id_user': currentUser.id,
        'motif': 'deconnexion',
        'comment': '',
        'date_history': new Date()
    }

    data.setHistory([...data.history, history]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'user.json'),
        JSON.stringify(data.users)
    );
    res.clearCookie('jwt', { httpOnly: true });
    res.sendStatus(204);

}


module.exports = { handleLogout };