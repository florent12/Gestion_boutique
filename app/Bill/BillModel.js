export class Bill {
    id
    moyenDePaiement
    numeroBonDeCommande
    date
    basket

    constructor(id, moyenDePaiement, numeroBonDeCommande, date, basket) {
        this.id = id
        this.moyenDePaiement = moyenDePaiement
        this.numeroBonDeCommande = numeroBonDeCommande
        this.date = date

    }

    getBasket(id){
        return this.basket.filter((value,index) =>{
            id == value.id
        })[0]
       }
    
    removeBasket(basket) {
         this.basket.find((value,index)=> {
            if(article == value){
               this.basket.splice(index,1)
            }
        })

    }
    
    
    afficherBasket= () => {
        this.basket.forEach((element,index) => console.log(element));
    }
}