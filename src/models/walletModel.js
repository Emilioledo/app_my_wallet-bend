const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const walletModel = new Schema ({
    nombre : String, 
    saldo : Number,
    descripcion : String,
})

const wallet = mongoose.model('wallet', walletModel);

module.exports = wallet;



