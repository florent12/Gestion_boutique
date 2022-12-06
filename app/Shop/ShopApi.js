
import express from 'express'
import { Shop } from './ShopModel.js'
import { Article } from './ShopModel.js'
const routerShop = express.Router()

routerShop.get('/', async (req,res)=>{
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

routerShop.get('/:id', async (req,res) =>{
    try{
        console.log(req)
        res.status(200)
        let shop = new Shop()
        res.send( await shop.getOneService(req.params.id))
    } catch(e){
        res.status(400)
        res.send("Cette boutique n'existe pas!")
        console.error(e)

    }
})

routerShop.post('/', (req,res)=>{
    try{
        console.log(req.body)
        let boutique = new Shop(req.body.id,[],req.body.nom, req.body.adresse, req.body.nomDuProprietaire)

        boutique.addShop(boutique)
        res.status(200).send("Boutique ajoutée avec succès!");
    }catch(e){
        res.status(400)
        res.send("Database Error")
        console.error(e)
    }
})

routerShop.post('/:id', async (req,res)=>{
    try{
        // console.log(req.body)
        res.status(200)
        let idBoutique = req.params.id
        let article = new Article(req.body.boutiqueId,req.body.designation, req.body.prix, req.body.quantite, req.body.categorie)

        res.send(await article.addArticle(article, idBoutique))
        
    }catch(e){
        res.status(400)
        res.send("Database Error")
        console.error(e)
    }
})

routerShop.patch('/:id', async (req,res,next)=>{
    
    try{
        console.log(req)
        res.status(200)
        let boutique = new Shop()
        //if (!req.params.id) return res.status(404).send("cette boutique n'existe pas");
       
        let data = {
           nom: req.body.nom,
           adresse: req.body.adresse,
           nomDuProprietaire : req.body.nomDuProprietaire

        }
        res.send(await boutique.ShopUpdate(req.params.id, data))
       

        
        //boutique.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
    }catch(e){
        res.status(400)
        res.send("Database Error")
        console.error(e)
    }
       
 
})

routerShop.delete('/:id', async (req,res,next)=>{
    
    try{
        console.log(req)
        res.status(200)
        let boutique = new Shop ()
        res.send(await boutique.ShopDelete(req.params.id))
        res.status(200).send("boutique suppriméé avec succès!");
        next()

        
    }catch(e){
        res.status(400)
        res.send("Database Error")
        console.error(e)
    }
       
 
})

  export {routerShop}