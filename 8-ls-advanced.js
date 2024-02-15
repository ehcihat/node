const fs  = require('node:fs/promises');
const path = require('node:path');
const pico = require('picocolors');

const folder = process.argv[2] ?? '.';


async function ls (folder){
    let files;
    try{
        files = await fs.readdir(folder);
    }catch{
        console.error(pico.red(`No se pudo leer el directorio ${folder}`));
        process.exit(1);
    }
    const filesPromises = files.map(async file =>{
        const filePath = path.join(folder,file);
        let stats;

        try{
            stats = await fs.stat(filePath);
        }catch{
            console.error(`No se pudo leer el archivo ${filePath}`);
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'a';
        const fileSize = stats.size.toString();
        const fileModified = stats.mtime.toLocaleString();

        return `${pico.white(fileType)} ${pico.blue(file.padEnd(20))} ${pico.yellow(fileSize.padStart(10))} ${pico.magenta(fileModified)}`
    })
    const filesInfo = await Promise.all(filesPromises);
    filesInfo.forEach(fileInfo => console.log(fileInfo));
}
ls(folder);

/*
fs.readdir(folder)
    .then(files =>{
        files.forEach(file =>{
            const filePath= path.join(folder,file);

            fs.stat(filePath);
        })
    })
    .catch(err =>{
        if(err){
            console.error('error al leer el escritorio: ',err);
            return;
        }
    })^
    */