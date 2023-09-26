const data = {
    users: require('../../model/user.json'),
    setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required'});
    //check for duplicate usernames in the db
    const duplicate = data.users.find(person => person.username === user);
    if(duplicate) return res.sendStatus(409); // Conflict
    try {
        // encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //store the new user
        const newUser = {'username': user, 'password': hashedPwd };
        data.setUsers([...data.users, newUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', '..', 'model', 'user.json'),
            JSON.stringify(data.users)
        )
        res.status(201).json({'success': `New user ${user} created` });
    } catch (error) {
        res.status(500).json({'message': err.message});
    }
}

module.exports = { handleNewUser };