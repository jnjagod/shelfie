module.exports = {
    read: (req, res) => {
        let db = req.app.get('db')
        db.get_inventory().then(response => {
            res.status(200).send(response)
        })
    },

    create: (req, res) => {
        let db = req.app.get('db')
        db.create_product(req.body).then(response => {
            res.status(200).send(response)
        })
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        db.delete_product([id]).then(response => {
            res.status(200).send(response)
        })
    },

    update: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        db.update_product([id, req.body]).then(response => {
            res.status(200).send(response)
        })
    }

}