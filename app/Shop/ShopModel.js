import { getAll, save, getWithid } from "./ShopRepositoryModel.js"
//import { getWithid } from "./ShopRepositoryModel.js"
export class Shop {
    id
    articles
    nom
    adresse
    nomDuProprietaire

    constructor(id,articles,nom,adresse,nomDuProprietaire){
        this.id = id,
        this.articles = articles,
        this.nom = nom,
        this.adresse = adresse,
        this.nomDuProprietaire = nomDuProprietaire
    }

     getAllServices(){
        return  getAll()
    }


    addShop = (shop) => {

     save(shop)

    }

    getOneService(){
        return getWithid()
    }


    getOneService(){
        return getWithid()
    }

 
 
    getArticle(id){

     return this.articles.filter((value,index) =>{
         id == value.id
     })[0]
    }
 
 
    removeArticle(id) {
     this.articles=this.article.filter((value)=> {
         value.id != id
     })
    }
 
    afficherArticle= () => {
     this.articles.forEach((element,index) => console.log(element));
    }
 }