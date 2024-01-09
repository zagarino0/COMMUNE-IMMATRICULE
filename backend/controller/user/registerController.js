const data = {
    users: require('../../model/user.json'),
    setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const code = req.body.code;
    const pwd = req.body.pwd;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const numero_matricule = req.body.numero_matricule;
    const type_operateur = req.body.type_operateur;

    const id_user = data.users.length === 0 ? 1 : data.users[data.users.length - 1].id_user + 1;

    if(!code || !pwd) return res.status(400).json({ 'message': 'code and password are required'});
    //check for duplicate code in the db
    const duplicate = data.users.find(person => person.code === code);
    if(duplicate) return res.sendStatus(409); // Conflict
    try {
        // encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //store the new user
        const newUser = {
            'id_user': id_user,
            'code': code, 
            'password': hashedPwd,
            'nom': nom,
            'prenom': prenom,
            'numero_matricule': numero_matricule,
            'type_operateur': type_operateur,
            'actif': true,
        };
        data.setUsers([...data.users, newUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', '..', 'model', 'user.json'),
            JSON.stringify(data.users)
        )
        res.status(201).json({'success': `New user ${user} created` });
    } catch (error) {
        res.status(500).json({'message': error.message});
    }
}

module.exports = { handleNewUser };