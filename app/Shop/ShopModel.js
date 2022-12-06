import { getAll, save, getWithid, updateShop, deleteShop,saveArticle} from "./ShopRepositoryModel.js"

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

   


   

    ShopUpdate(idShop, data){
        return updateShop(idShop, data)
        
    }

    ShopDelete(idShop){
        return deleteShop(idShop)
    }

    getOneService(id){
        return getWithid(id)
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
 export class Article {
    id
    designation
    prix
    quantite
    categorie

    constructor(id,designation,prix,quantite,categorie) {
        this.id = id
        this.designation = designation
        this.prix = prix
        this.quantite = quantite
        this.categorie = categorie
    }

    addArticle = (article, idBoutique) => {

        return saveArticle(article,idBoutique)
   
       }

}