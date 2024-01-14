const data = {
    users: require('../../model/user.json'),
    setUsers: function (data) { this.users = data },
    history: require('../../model/history.json'),
    setHistory: function (data) { this.history = data }
}

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');


const handleLogin = async (req, res) => {
    const code = req.body.code;
    const pwd = req.body.pwd;
    const type_operateur = req.body.type_operateur;
    if (!code || !pwd) return res.status(400).json({ 'message': 'code and Password are required' });
    const foundUser = data.users.find(person => person.code === code && person.type_operateur === type_operateur);
    if (!foundUser) return res.sendStatus(401); //Unauthorized
    // evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        const accessToken = jwt.sign(
            { "code": foundUser.code },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );
        const refreshToken = jwt.sign(
            { "code": foundUser.code },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        const otherUsers = data.users.filter(person => person.username !== foundUser.username);
        const currentUser = { ...foundUser, refreshToken };
        data.setUsers([...otherUsers, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', '..', 'model', 'user.json'),
            JSON.stringify(data.users)
        );
        const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;
        const history = {
            'id_history': id_history,
            'id_contribuable': '',
            'id_user': currentUser.id,
            'motif': 'connexion',
            'comment': '',
            'date_history': new Date()
        }

        data.setHistory([...data.history, history]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', '..', 'model', 'history.json'),
            JSON.stringify(data.history)
        )
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', sercure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ 'success': `User ${foundUser.code} is logged in` });
    } else {
        res.sendStatus(401);
    }
}


module.exports = { handleLogin };