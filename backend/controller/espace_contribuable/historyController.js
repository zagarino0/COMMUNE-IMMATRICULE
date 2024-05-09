const data = {
    historyContribuable: require('../../model/history_contribuable.json'),
    contribuable: require('../../model/contribuable.json')
}

const getAllHistoryContribuable = (req, res) => {
    const histories = data.historyContribuable;
    histories.map(his => {
        data.contribuable.map(con => {
            if(his.id_contribuable === con.id)
                his.contribuable = con;
        })
    })
    res.json(data.historyContribuable);
}

module.exports = {
    getAllHistoryContribuable
}