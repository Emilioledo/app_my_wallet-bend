const wallet = require ('../models/walletModel')
/*----------*/
const express = require ('express');
const router = express.Router();

router.get ('/', async (req, res)=>{
    try {
        const Wallets = await wallet.find ();
        console.log (Wallets);
    } catch (error)
    {
       console.log (error); 
    }
});

router.post ('/alta', async (req, res)=>{
    let nombre_= req.body.nombre; 
    let saldo_= req.body.saldo; 
    let descripcion_ = req.body.descripcion; 
    let wallet_ = {
        nombre: nombre_,
        saldo: saldo_,
        descripcion: descripcion_,
    }
        try {
            await wallet.create(wallet_);
            console.log (wallet_);
        } catch (error)
        {
            console.log (error);
        }
    });


module.exports = router;