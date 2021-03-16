const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const walletModel = new Schema {
    nombre : string, 
    saldo : number,
    descripcion : string, 
}

const wallet = mongoose.model('wallet', walletModel);

module.exports = wallet;



