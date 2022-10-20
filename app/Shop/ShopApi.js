
import express from 'express'
import { Shop } from './ShopModel.js'
const router = express.Router()

router.get('/', async (req,res)=>{
    try{
        console.log(req)
        res.status(200)
        let shop = new Shop()
        res.send( await shop.getAllServices())
    } catch(e){
        res.status(400)
        res.send('Database Error')
        console.error(e)

    }
   
})

router.get('/:id', async (req,res) =>{
    try{
        console.log(req)
        res.status(200)
        let shop = new Shop()
        res.send( await shop.getOneService())
    } catch(e){
        res.status(400)
        res.send('Database Error')
        console.error(e)

    }
})

router.post('/', (req,res)=>{
    try{
        console.log(req.body)
        res.status(200)
        let boutique = new Shop(req.body.id, [], req.body.nom, req.body.adresse, req.body.nomDuProprietaire)

        boutique.addShop(boutique)
        res.send()
    }catch(e){
        res.status(400)
        res.send("Database Error")
        console.error(e)
    }
})



/* routerput('/boutiques/id'(req, res) =>{
    res.send(Boutique.getOne());
  }) */


  export {router}