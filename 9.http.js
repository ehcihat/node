const http = require('node:http');
const {findAvailablePort}= require('./10-free-port.js');
const server = http.createServer((req,res)=>{
    res.end('Hola mundo');
})
const desiredPort = process.env.PORT ?? 3000;

findAvailablePort(desiredPort).then(port =>{
    server.listen(port, ()=>{
        console.log(`server is listening on port http://localhost:${port}`);
})

})
