import express  from 'express';
import mongoose from 'mongoose';
import { router } from './app/Shop/ShopApi.js';
import BodyParser from 'body-parser';
export const app = express();

export const connection = async() => {
  console.log('Base de donnée connectée')
  await mongoose.connect('mongodb+srv://florent:binkS270@cluster0.aaysg3l.mongodb.net/Boutique')
}

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));


app.use('/boutiques',router)

export const db = mongoose.connection

db.on("error", console.error.bind(console, "MongoDB connection error"));


app.use('/boutiques', router)

/*app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
}); */


export default app