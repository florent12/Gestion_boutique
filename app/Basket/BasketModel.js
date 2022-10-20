export class Basket {
    id
    articles
    client
    prixTotal
    shop

    constructor(id,articles,client,prixTotal, Shop) {
        this.id=id
        this.prixTotal = prixTotal

    
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


       addShop (shop) {
        
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


       getClient(id){

        return this.client.filter((value,index) =>{
            id == value.id
        })[0]
       }
    
    removeClient(id) {
        this.client=this.article.filter((value)=> {
            value.id != id
        })
       }
    
    afficherClient= () => {
        this.client.forEach((element,index) => console.log(element));
       }   
   
   


}