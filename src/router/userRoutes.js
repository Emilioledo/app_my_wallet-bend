const user = require ('../models/userModel');
const express = require ('express');
const router = express.Router();

router.post ('/user', async (res, req)=>{
    let nombre_usuario= req.body.nombreUsuario; 
    let email_usuario= req.body.emailUsuario; 
    let password_usuario = req.body.passwordUsuario; 
    
    let user_ = {
        nombreUsuario: nombre_usuario, 
        emailUsuario:email_usuario, 
        passwordUsuario:password_usuario, 
    }

    try {
        await user.create (user_);
        console.log (user_);
    } catch (error) {
        console.log (error)
    }

})

module.exports = router;
