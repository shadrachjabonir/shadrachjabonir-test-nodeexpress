const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World! from shadrachjabonir-test API'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))