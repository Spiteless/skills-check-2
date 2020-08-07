module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then(inventory => {
            res.status(200).send(inventory)
        })
    },
    add: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        db.add_inventory([name, price, img]).then(inventory => {
            res.status(200).send(inventory)
        })
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.get_inventory_single([id]).then(inventory => {
            res.status(200).send(inventory)
        })
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        console.log(req.params)
        const {id} = req.params
        db.delete_inventory_single([id]).then(inventory => {
            res.status(200).send(inventory)
        })
    },
}