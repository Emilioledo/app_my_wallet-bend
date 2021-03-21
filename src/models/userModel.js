const mongoose = require ('mongoose');
const wallet = require ('./walletModel');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    nombreUsuario: String, 
    emailUsuario: String, 
    passwordUsuario: String, 
    wallets: [wallet]
});

const user = mongoose.model ('user', UserSchema);

module.exports = user;