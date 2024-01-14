const data = {
    history: require('../../model/history.json'),
    setHistory: function (data) { this.history = data },
    users: require('../../model/user.json')
}

const getAllAction = (req, res) => {
    let history = [];
    data.users.map(use => {
        data.history.map(his => {
            if(use.id === his.id_user && (new Date(his.date_history)) >= (new Date(date_debut)) && (new Date(his.date_history)) <= (new Date())){
                history.push({...use, ...his})
            }
        })
    })
    res.json(history);
    history = [];
}

const getActionByUserId = (req, res) => {
    const id_user = req.params.id_user;
    const history = data.history.filter(his => his.id_user === id_user);
    if(!history)
        return res.status(404).json({'message': 'history not found'});
    const user = data.users.find(use => use.id === history.id_user);
    res.json({...history, ...user});
}

const getActionByAll = (req, res) => {
    const date_debut = req.body.date_debut;
    const date_fin = req.body.date_fin;
    const login = req.body.date_fin;
    let user = {};
    let history = [];
    if (!date_debut && !date_fin) {
        if (!login) {
            data.users.map(use => {
                data.history.map(his => {
                    if (use.id === his.id_user) {
                        history = []
                        history.push({ ...use, ...his });
                    }
                }
                )
            })
        }else {
            user = data.users.find(use => use.code === login);
            data.history.map(his => {
                if(his.id_user === user.id){
                    history.push({...user, ...his});
                }
            })
        }
    }else if(date_debut && !date_fin){
        if(!login){
            data.users.map(use => {
                data.history.map(his => {
                    if(use.id === his.id_user && (new Date(his.date_history)) >= (new Date(date_debut)) && (new Date(his.date_history)) <= (new Date())){
                        history.push({...use, ...his})
                    }
                })
            })
        }else{
            user = data.users.find(use => use.code === login);
            data.history.map(his => {
                if(his.id_user === user.id && (new Date(date_history)) >= (new Date(date_debut)) && (new Date(date_history)) <= (new Date())){
                    history.push({...user, ...his});
                }
            })
        }
    }else if (!date_debut && date_fin){
        history.push('Aucun historique disponible');
    }else if (date_debut && date_fin){
        if(!login){
            data.users.map(use => {
                data.history.map(his => {
                    if(use.id === his.id_user && (new Date(his.date_history)) >= (new Date(date_debut)) && (new Date(his.date_history)) <= (new Date(date_fin))){
                        history.push({...his, ...use});
                    }
                })
            })
        }else{
            user = data.users.find(use => use.code === login);
            data.history.map(his => {
                if(his.id_user === user.id && (new Date(his.date_history)) >= (new Date(date_debut)) && (new Date(his.date_history)) <= (new Date(date_fin))){
                    history.push({...user, ...his})
                }
            })
        }
    }
    res.json(history)
    history = [];
}

module.exports = {
    getAllAction,
    getActionByUserId,
    getActionByAll
}