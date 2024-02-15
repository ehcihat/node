const path = require('node:path');
//Barra separadora de carpetas segúnd SO
console.log(path.sep);

const filePath = path.join('/content','/subfolder','text.txt');
console.log(filePath);

const base = path.basename('/tmp/perfil/tahiche.txt');
console.log(base);

const filename =  path.basename('/tmp/perfil/tahiche.txt');
console.log(filename);

const extension =  path.extname('intenta.coger.la.extension.tahiche.txt');
console.log(extension);