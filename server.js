const express = require('express')
const app = express()
var hbs = require('hbs');

require('./herpers/herper');


const port = process.env.PORT ||3000;

app.use(express.static(__dirname +'/public'))

//express HBS

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) =>{

    res.render('home',{
        nombre:'Dionis'
    });
})

app.get('/about',(req,res)=>{

    res.render('about')
})





app.listen(port,()=>{
    console.log(`escuchando INF del port:${port}`);
})



