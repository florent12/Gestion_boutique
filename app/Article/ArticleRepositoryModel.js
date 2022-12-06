import {mongoose} from "mongoose"
const ArticleSchema = new mongoose.Schema({
    boutiqueId:String,
    designation: String,
    prix: Number,
    quantite: Number,
    categorie: String


})
/* const ArticleShema = new mongoose.Schema({
    id: String,
    designation: String,
    prix: Number,
    quantite: Number, 
    categorie: String,

})*/


/*const ArticleModel = mongoose.model("Boutique", BoutiqueShema)

const boutique_objet = new ShopModel({
    "id": "1",
    "nom": "Chez Marc",
    "articles": "[]",
    "adresse" : "25 rue Hubier",
    "nomDuProprietaire" : "Marc"
})*/


/*export const saveArticle = async (article, idBoutique) => {

    return  await ShopModel.updateOne({id :idBoutique},{
        $push:{
            "articles":{ designation: article.designation, prix: article.prix, quantite:article.quantite, categorie:article.categorie}
        }
    })
}*/

