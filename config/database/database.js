const mongoose = require ('mongoose');

const url = "mongodb+srv://walletapp:EXcVIhfhz3KEEuUV@cluster0.9lddv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

connectdb = () =>{
    mongoose.connect (url,  {useNewUrlParser: true, useUnifiedTopology: true}).then (()=>{
        console.log ("Base de datos conectada!")
    }).catch ((error)=>{
        console.log (error);
        throw error;
    })
}

module.exports = connectdb;
