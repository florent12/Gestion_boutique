import { getAll } from "./ShopRepositoryModel"
export class Shop {
    id
    articles
    nom
    adresse
    nomDuProprietaire

    getAllServices() {
        getAll()
        
    }
 
    constructor(id,articles,nom,adresse, nomDuProprietaire) {
        this.id=id
        this.nom = nom
        this.adresse = adresse
        this.nomDuProprietaire = nomDuProprietaire
     
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