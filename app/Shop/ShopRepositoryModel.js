import {mongoose} from "mongoose"
import { db } from "../../app.js"
import { Shop } from "./ShopModel.js"

const ArticleSchema = new mongoose.Schema({
    boutiqueId:String,
    designation: String,
    prix: Number,
    quantite: Number,
    categorie: String


})
 const BoutiqueShema = new mongoose.Schema({
    id: String,
    articles :[ArticleSchema],
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

    return await ShopModel.findById(id)
}

export const updateShop  = async (idShop, data)=> {
    return  await ShopModel.updateOne({id : idShop},{nom:data.nom, adresse: data.adresse, nomDuProprietaire: data.nomDuProprietaire})
   
   
}

export const saveArticle = async (article, idBoutique) => {

    console.log(article)
    return  await ShopModel.updateOne({id :idBoutique},{
        $push:{
            "articles":{ id:article.id ,designation: article.designation, prix: article.prix, quantite:article.quantite, categorie:article.categorie}
        }
    })

   /* const boutique_objet = new ShopModel({
 
       
         articles: [{id: article.id}, {designation: article.designation},{prix: article.priw},{quantite: article.quantite},{categorie: article.categorie}]
 
     })*/
}

export const deleteShop = async(idShop) =>{
    return await ShopModel.findByIdAndDelete({_id : idShop})
}

export const save = (shop) => {

   const boutique_objet = new ShopModel({

        id: shop.id,

        nom: shop.nom,     

        adresse: shop.adresse,

        nomDuProprietaire: shop.nomDuProprietaire,

       // articles: []

    })

    boutique_objet.save((err) => {

        if (err) throw 'Save recountered a problem'

    })
}



    

