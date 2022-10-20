export class Client {
    id
    nom
    prenom
    email
    adresse

    constructor (id,nom,prenom, email, adresse) {
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.email = email
        this.adresse = adresse
    
    }
   
    //new Client('1', 'ATAKORA', 'florent',' florent@gmail.com','paris' )
}