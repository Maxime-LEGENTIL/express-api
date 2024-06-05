const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Route GET ' + req)
})

app.post('/', (req, res) => {
    res.send('Route POST ' + req)
})

app.put('/', (req, res) => {
    res.send('Route PUT ' + req)
})

app.delete('/', (req, res) => {
    res.send('Route DELETE ' + req)
})

app.listen(port, () => {
    console.log(`Le serveur est ouvert sur le port ${port}`)
})