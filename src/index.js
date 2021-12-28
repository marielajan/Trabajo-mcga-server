const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config({ path: '.env' });

/* MONGOOSE */
require('./config/db');

/* EXPRESS */
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* BODY-PARSER */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* CORS*/
app.use(cors());

/* ROUTES */
const personalRoutes = require('./routes/personal');
const userRoutes = require('./routes/user');

app.use('/api/personal', personalRoutes());
app.use('/api/user', userRoutes());

app.listen(process.env.PORT || 4000, () => {
console.log(`Personal ~ Online - Running on PORT: ${process.env.PORT || 4000}`);
}); 

const myUser = {
    email: 'mariejanecka@gmail.com',
    password: '1234'
       }

app.get('/', (req, res) => {
res.status(200).send("<h1>Test server</h1>")
})

app.post('/login', (req, res) => {
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

