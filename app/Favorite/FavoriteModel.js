export class Favoris {
    id
    articles
    Shop

    constructor(id, articles, boutique) {
        this.id = id
    
    }

    addArticle (article) {
        
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
    
    afficherArticles= () => {
        this.articles.forEach((element,index) => console.log(element));
       }

       getShop(id){

        return this.Shop.filter((value,index) =>{
            id == value.id
        })[0]
       }
    
    removeShop(id) {
        this.Shop=this.article.filter((value)=> {
            value.id != id
        })
       }
    
    afficherShop= () => {
        this.Shop.forEach((element,index) => console.log(element));
       }   


       
}