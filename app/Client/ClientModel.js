import { getAll, save, getWithid, updateClient, deleteClient } from "./ClientRepositoryModel.js"

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

    getAllClients(){
        return  getAll()
        
    }

    getOneService(id){
        return getWithid(id)
    }


    addClient =(client) => {

     save(client)

    }

   
    ClientUpdate(idClient, data){
        return updateClient(idClient, data)
        
    }

    ClientDelete(idClient){
        return deleteClient(idClient)
    }
   
    //new Client('1', 'ATAKORA', 'florent',' florent@gmail.com','paris' )
}