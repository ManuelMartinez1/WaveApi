const mongoose = require('mongoose');
const Instrument = require('./modelos/instrumento');
const Genero = require('./modelos/generos');
mongoose.connect('mongodb://127.0.0.1/wave',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => {
    console.log('Conectado a la base de datos');
    /*
const instruments = [
    {nombre: "Guitarra electrica",
    alias: "Guitarrista"},

    {nombre: "Bateria",
    alias: "Baterista"},

    {nombre: "Bajo",
    alias:" Bajista"},

    {nombre: "Piano",
    alias: "Pianista"},

    {nombre: "Teclados",
    alias: "Tecladista"},

    {nombre: "Percusiones",
    alias: "Percusionista"},

    {nombre: "Contrabajo",
    alias: "Contrabajista"},

    {nombre: "Vocales",
    alias: "Vocalista"},

    {nombre: "Guitarra acustica",
    alias: "Guitarrista acustico"},

    {nombre: "Saxofon",
    alias: "Saxofonista"},

    {nombre: "Trompeta",
    alias: "Trompetista"}
];
    Instrument.insertMany(instruments)
    .then(()=> console.log('Intrumentos añadidos al pool'))
    .catch(err => console.error(err));
  
const generos = [
    {nombre:"Rock"},
    {nombre:"Pop punk"},
    {nombre:"Jazz"},
    {nombre:"Reggae"},
    {nombre:"Pop"},
    {nombre:"Funk"},
    {nombre:"Jazz Fusion"},
    {nombre:"Punk Rock"},
    {nombre:"Blues"},
    {nombre:"Prog Rock"},
    {nombre:"Salsa"},
    {nombre:"Cumbia"},
];
    Genero.insertMany(generos)
    .then(()=>console.log('generos añadidos al pool'))
    .catch(err => console.error(err));
    */
})

.catch((err) => console.error(err));
