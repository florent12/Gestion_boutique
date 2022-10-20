export class Shop {
   id
   articles
   nom
   adresse
   nomDuProprietaire

   constructor(id,articles,nom,adresse) {
    this.id=id

   }

   
   getArticle(id){
    //méthode 1
    return this.articles.find(val => {
        val.id=id
    })
    //méthode 2
    return this.articles.filter((value,index) =>{
        id == value.id
    })[0]
   }

   
   removeArticle(article) {
    //méthode 1
    this.articles.find((value,index)=> {
        if(article == value){
            this.articles.splice(index,1)
        }
    })
    //méthode 2
    this.articles=this.article.filter((value)=> {
        article != value
    })
   }

   removeArticle(id) {
    this.articles=this.article.filter((value)=> {
        value.id != id
    })
   }

   afficherArticles= () => {
    this.articles.forEach((element,index) => console.log(element));
   }
}

export class Article {
    id
    designation
    prix
    quantite
    categorie
}

export class PanierDeCommande {
    id
    articles
    client
    prixTotal
}

export class Favoris {
    id
    articles
}

export class Facture {
    id
    moyenDePaiement
    numeroBonDeCommande
    date
    panierDeCommande
}

export class Personne {
    id
    nom
    prenom
}

export class Client extends Personne {
    email
    adresse
}

export class Operateur extends Personne {
    type
}

const main = () => {
    var boutique = new boutique('1',[],'BIO','25 rue lala')
    boutique.nomDuProprietaire = 'Jean'

    boutique.articles.push()
    
}

