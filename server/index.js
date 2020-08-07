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

const api = {
    base: 'http://localhost:4004/api/products',
    single: 'http://localhost:4004/api/single/product'
}

app.get('/api/products', ctrl.getAll)
app.post('/api/products', ctrl.add)
app.get('/api/single/product/:id', ctrl.getOne) 
app.delete('/api/single/product/:id', ctrl.delete) 


app.listen(SERVER_PORT, () => console.log(`Port running on ${SERVER_PORT}\napi:        ${api.base} \napi.single: ${api.single}`))