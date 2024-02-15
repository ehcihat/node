const fs = require('node:fs/promises');

console.log('Leyendo el primer archivo...');
fs.readFile('./HolaMundo.txt','utf-8')
.then(text =>{
    console.log('primer texto: ',text);
})


console.log('--> Haciendo cosas mientras lee el archivo');

console.log('Leyendo el segundo archivo...');
fs.readFile('./HolaMundo2.txt','utf-8')
.then(text2 =>{
    console.log('segundo texto: ',text2);
})
