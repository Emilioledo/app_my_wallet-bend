const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    nombreUsuario: String, 
    emailUsuario: String, 
    passwordUsuario: String, 
});

const user = mongoose.model ('user', UserSchema);

module.exports = user;