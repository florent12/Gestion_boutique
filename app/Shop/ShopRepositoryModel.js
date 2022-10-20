import {mongoose} from "mongoose"
import { db } from "../../app.js"
import { ArticleShema } from "../Article/ArticleRepositoryModel.js"


 const BoutiqueShema = new mongoose.Schema({
    id: String,
    articles : [ArticleShema],
    nom: String,
    adresse: String,
    nomDuProprietaire: String,

})


const ShopModel = mongoose.model("Boutique", BoutiqueShema)

const boutique_objet = new ShopModel({
    "id": "1",
    "nom": "Chez Marc",
    "articles": "[]",
    "adresse" : "25 rue Hubier",
    "nomDuProprietaire" : "Marc"
})

export const getAll = async () =>{
    return  await ShopModel.find()
}

export const getWithid = async (id) =>{
    return await ShopModel.find(id)
}


export const save = (shop) => {

   const boutique_objet = new ShopModel({

        id: shop.id,

        nom: shop.nom,     

        adresse: shop.adresse,

        nomDuProprietaire: shop.nomDuProprietaire,

        articles: []

    })



    boutique_objet.save((err) => {

        if (err) throw 'Save recountered a problem'

    })

}