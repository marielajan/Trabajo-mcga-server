
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()
const url = 'mongodb+srv://Mariela_Jan:<password>@cluster0-tn0id.mongodb.net/test?retryWrites=true&w=majority';
//va el password de mi cuenta en mongodb
// mongoose.connect(url, { useNewUrlParser: true }, function (error) {
//   console.log(error)
// });

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send("<h1>Test server</h1>")
})

app.post('/login', (req, res) => {
  const myUser = {
    email: 'mariejanecka@gmail.com',
    password: '123123'
  }
  if (req.body.email !== myUser.email) {
    return res.status(400).send({
      error: true,
      message: "El Email no esta registrado"
    })
  }
  if (req.body.password !== myUser.password) {
    return res.status(400).send({
      error: true,
      message: "La clave es incorrecta"
    })
  }
  return res.status(200).send({
    success: true,
    message: 'El usuario logeado correctamente',
    user: myUser,
  })
})

app.listen(4000, () => {
  console.log('Servidor corriendo en puerto 4000')
})