require('./database')
const express=require('express');
const app=express();
const morgan=require('morgan');
const cors=require('cors');

//configuraciones del servidor
app.set('port', 3000);
app.set('json spaces',2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//rutas
app.use('/api',require('./routes/rutas'));

//empezando el servidor
app.listen(app.get('port'));
console.log('mi primer servidor');