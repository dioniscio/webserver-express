const http = require('http');

http.createServer((req, res)=>{

res.writeHead(200,{'content-Type':'application/json'})


let salida ={
    nombre:'Dionis',
    edad:24,
    url:req.url
}

res.write(JSON.stringify(salida));
//res.write('Hola Mundo');
res.end();


})
.listen(8081);

console.log('Escuchando el puerto 8081');