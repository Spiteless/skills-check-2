module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_boots().then(boots => {
            res.status(200).send(boots)
        })
    },
    add: (req, res) => {
        const db = req.app.get('db')
        const {boot_image, description, price} = req.body
        db.add_boot([boot_image, description, price]).then(boots => {
            res.status(200).send(boots)
        })
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.get_boot(id).then(boot => {
            res.status(200).send(boot)
        })
    }
}