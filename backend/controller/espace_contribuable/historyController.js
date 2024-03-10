const data = {
    historyContribuable: require('../../model/history_contribuable.json')
}

const getAllHistoryContribuable = (req, res) => {
    res.json(data.historyContribuable);
}

module.exports = {
    getAllHistoryContribuable
}