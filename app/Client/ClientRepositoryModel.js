import {mongoose} from "mongoose"
import { db } from "../../app.js"
import { Client } from "./ClientModel.js"

const ClientShema = new mongoose.Schema({
    id: String,
    nom: String,
    prenom: String,
    email: String,
    adresse:String,

})

const ClientModel = mongoose.model("Client", ClientShema)

/*const client_objet = new ClientModel({
    "id": "1",
    "nom": "Garnier",
    "prenom" : "Luka",
    "email" : "luca@gmail.com",
    "adresse" : "Paris"
})*/

export const getAll = async () =>{
    return  await ClientModel.find()
}

export const getWithid = async (id) =>{

    return await ClientModel.findById(id)
}


export const updateClient  = async (idClient, data)=> {
    return  await ClientModel.updateOne({id : idClient},{nom:data.nom, prenom: data.prenom,email: data.email,adresse: data.adresse})
   
   
}

export const deleteClient = async(idClient) =>{
    return await ClientModel.findByIdAndDelete({_id : idClient})
}

export const save = (client) => {

   const client_objet = new ClientModel({

        id: client.id,

        nom: client.nom,     

        prenom: client.prenom,

        email: client.email,
        
        adresse: client.adresse


    })



    client_objet.save((err) => {

        if (err) throw 'Save recountered a problem'

    })

}