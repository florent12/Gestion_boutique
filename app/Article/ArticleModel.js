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

    addArticle(Article){
        this.Article = Article
    }
}