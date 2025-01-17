const data = {
    history: require('../../model/history.json'),
    setHistory: function (data) { this.history = data },
    users: require('../../model/user.json'),
    contribuable: require('../../model/contribuable.json')
}

const getAllAction = (req, res) => {
    const histories = data.history;

    histories.map(his => {
        data.users.map(us => {
            if(his.id_user === us.id_user)
                his.userinfos = us;
        })
        data.contribuable.map(con => {
            if(his.id_contribuable === con.id)
                his.contribuableInfos = con;
        })
    })
    res.json(histories);
}

const getActionByUserId = (req, res) => {
    const id_user = req.params.id_user;
    const history = data.history.filter(his => his.id_user === id_user);
    if (!history)
        return res.status(404).json({ 'message': 'history not found' });
    const user = data.users.find(use => use.id === history.id_user);
    res.json({ ...history, ...user });
}

const getActionByAll = (req, res) => {
    const date_debut = req.body.date_debut;
    const date_fin = req.body.date_fin;
    const code = req.body.code;

    if (!code) {
        if (!date_debut && !date_fin) {
            const user = data.users;
            user.map(use => {
                const history = data.history.filter(his => his.id_user === use.id_user);
                use.historique = history;
            })
            res.json(user);
        } else if (date_debut && !date_fin) {
            const allUser = data.users;
            allUser.map(use => {
                const history = data.history.filter(his => (new Date(his.date_history)) >= (new Date(date_debut)) && his.id_user === use.id_user);
                use.historique = history;
            })
            const users = allUser.filter(use => use.historique.length !== 0);
            res.json(users);
        }
        else if (date_debut && date_fin) {
            const allUser = data.users;
            allUser.map(use => {
                const history = data.history.filter(his => (new Date(his.date_history)) >= (new Date(date_debut)) && (new Date(his.date_history)) <= (new Date(date_fin)) && his.id_user === use.id_user);
                use.historique = history;
            })
            const users = allUser.filter(use => use.historique.length !== 0);
            res.json(users);
        }
    } else {
        if (!date_debut && !date_fin) {
            const user = data.users.filter(use => use.code === code);
            user.map(use => {
                const history = data.history.filter(his => his.id_user === use.id_user);
                use.historique = history;
            })
            res.json(user);
        } else if (date_debut && !date_fin) {
            const allUser = data.users.filter(use => use.code === code);;
            allUser.map(use => {
                const history = data.history.filter(his => (new Date(his.date_history)) >= (new Date(date_debut)) && his.id_user === use.id_user);
                use.historique = history;
            })
            const users = allUser.filter(use => use.historique.length !== 0);
            res.json(users);
        }
        else if (date_debut && date_fin) {
            const allUser = data.users.filter(use => use.code === code);;
            allUser.map(use => {
                const history = data.history.filter(his => (new Date(his.date_history)) >= (new Date(date_debut)) && (new Date(his.date_history)) <= (new Date(date_fin)) && his.id_user === use.id_user);
                use.historique = history;
            })
            const users = allUser.filter(use => use.historique.length !== 0);
            res.json(users);
        }
    }
}

module.exports = {
    getAllAction,
    getActionByUserId,
    getActionByAll
}