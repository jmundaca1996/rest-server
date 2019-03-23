require ('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/usuarios', (req,res) =>{
    res.json('get usuarios');
})
app.post('/usuarios', (req,res) =>{
    let body = req.body;
    if( body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesario'
        });
    }else{
        res.json({
            body
        })
    }
    
})
app.put('/usuarios', (req,res) =>{
    res.json('put usuarios');
})
app.delete('/usuarios', (req,res) =>{
    res.json('delete usuarios');
})
app.listen(process.env.PORT,() =>{
    console.log('escucnahdo puerto '+process.env.PORT);
});