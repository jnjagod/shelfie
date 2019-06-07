require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ProductCtrl = require('./controller')

const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    console.log('db is connected')
    app.set('db', db)
}).catch(err => console.log(err))

app.use(express.json())

app.get('/api/inventory', ProductCtrl.read)
app.post('/api/product', ProductCtrl.create)
app.delete('/api/product/:id', ProductCtrl.delete)

app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}`)
})