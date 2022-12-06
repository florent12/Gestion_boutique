
import express from 'express'
import { Client } from './ClientModel.js'
const routerClient = express.Router()

routerClient.get('/', async (req,res)=>{
    try{
        console.log(req)
        res.status(200)
        let client = new Client()
        res.send( await client.getAllClients())
    } catch(e){
        res.status(400)
        res.send('Database Error')
        console.error(e)

    }
   
})

routerClient.get('/:id', async (req,res) =>{
    try{
        console.log(req)
        res.status(200)
        let client = new Client()
        res.send( await client.getOneService(req.params.id))
    } catch(e){
        res.status(400)
        res.send("Ce client n'existe pas!")
        console.error(e)

    }
})

routerClient.post('/', (req,res)=>{
    try{
        console.log(req.body)
        res.status(200)
        let UnClient = new Client(req.body.id, req.body.nom, req.body.prenom, req.body.email,req.body.adresse)

        UnClient.addClient(UnClient)
        res.status(200).send("client ajouté avec succès!");
        next()
    }catch(e){
        res.status(400)
        res.send("Database Error")
        console.error(e)
    }
})

routerClient.patch('/:id', async (req,res,next)=>{
    
    try{
        console.log(req)
        res.status(200)
        let client = new Client ()
        let data = {
           nom: req.body.nom,
           prenom : req.body.prenom,
           email: req.body.email,
           adresse: req.body.adresse,

        }
        res.send(await client.ClientUpdate(req.params.id, data))
        res.status(200).send("client modifié avec succès!");
        next()
        

        
        //boutique.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})
    }catch(e){
        res.status(400)
        res.send("Database Error")
        console.error(e)
    }
       
 
})

routerClient.delete('/:id', async (req,res,next)=>{
    
    try{
        console.log(req)
        res.status(200)
        let client = new Client ()
        res.send(await client.ClientDelete(req.params.id))
        res.status(200).send("client supprimé avec succès!");
        next()

        
    }catch(e){
        res.status(400)
        res.send("Database Error")
        console.error(e)
    }
       
 
})
  export {routerClient}