const data = {
    users: require('../../model/user.json'),
    setUsers: function (data) { this.users = data }
}

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');


const handleLogin = async (req, res) => {
    const {user, pwd} = req.body;
    if(!user || !pwd) return res.status(400).json({'message': 'Username and Password are required'});
    const foundUser = data.users.find(person => person.username === user);
    if(!foundUser) return res.sendStatus(401); //Unauthorized
    // evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if(match){
        const accessToken = jwt.sign(
            {"username": foundUser.username},
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );
        const refreshToken = jwt.sign(
            {"username": foundUser.username},
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        const otherUsers = data.users.filter(person => person.username !== foundUser.username);
        const currentUser = {...foundUser, refreshToken};
        data.setUsers([...otherUsers, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', '..', 'model', 'user.json'),
            JSON.stringify(data.users)
        );
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', sercure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({'success': `User ${user} is logged in`});
    } else {
        res.sendStatus(401);
    }
}


module.exports = { handleLogin };