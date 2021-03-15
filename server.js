const express = require ('express');
const connectdb = require ('./config/database/database');
const app = express ();



/*PORT*/
const port = process.env.PORT || 5000;


/*Conectando base de datos*/
connectdb();

/*Iniciando SV*/
app.listen(port, ()=>{
    console.log ("Servidor conectado!");
});


