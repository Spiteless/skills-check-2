require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {CONNECTION_STRING, SERVER_PORT} = process.env
const ctrl = require('./controllers/mainController')

const app = express()

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('Database is connected')
})

// app.get('/api/boots', bootsCtrl.getBoots)
// app.post('/api/boots', bootsCtrl.addBoots)
// app.get('/api/single/boot/:id', bootsCtrl.getOneBoot) 


app.listen(SERVER_PORT, () => console.log(`Port running on ${SERVER_PORT}`))