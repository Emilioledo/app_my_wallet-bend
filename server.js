const express = require ('express');
const connectdb = require ('./config/database');
const app = express ();
const walletRoutes = require ('./src/router/walletRoutes');
const userRoutes = require ('./src/router/userRoutes');

/*JSON*/
const bodyParser = require ('body-parser');
app.use(express.json());

/*Rutas*/
app.use(walletRoutes, userRoutes);

/*PORT*/
const port = process.env.PORT || 3000;


/*Conectando base de datos*/
connectdb();

/*Iniciando SV*/
app.listen(port, ()=>{
    console.log ("Servidor conectado!");
});


