import {readFile} from 'node:fs/promises';
//PARALELO
Promise.all([
    readFile('./HolaMundo.txt','utf-8'),
    readFile('./HolaMundo2.txt','utf-8')
]).then(([text, secondText])=>{
    console.log('primer texto: ',text);
    console.log('segundo texto: ',secondText);
})