const {readFile} = require('node:fs/promises');
//IIFE Inmediately Invoked Function Expression
(
    async () => {
        console.log('Leyendo el primer archivo...');
        const text = await readFile('./HolaMundo.txt','utf-8');
        console.log('primer texto: ',text);

        console.log('--> Haciendo cosas mientras lee el archivo');

        console.log('Leyendo el segundo archivo...');
        const text2 = await readFile('./HolaMundo2.txt','utf-8');
        console.log('segundo texto: ',text2);
    }

)()

