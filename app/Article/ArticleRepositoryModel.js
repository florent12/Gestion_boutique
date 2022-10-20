import {mongoose} from "mongoose"
export const ArticleShema = new mongoose.Schema({
    id: String,
    designation: String,
    prix: Number,
    quantite: Number, 
    categorie: String,

})