module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then(inventory => {
            console.log("GET request", req.body)
            res.status(200).send(inventory)
        }).catch( err => console.log(err))
    },
    add: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        db.add_inventory([name, price, img]).then(inventory => {
            console.log("POST request", req.body)
            res.status(200).send(inventory)
        })
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.get_inventory_single([id]).then(inventory => {
            console.log("GET request", req.params)
            res.status(200).send(inventory)
        })
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        console.log(req.params)
        const {id} = req.params
        db.delete_inventory_single([id]).then(inventory => {
            console.log("DELETE request", req.params)
            res.status(200).send(inventory)
        })
    },
}