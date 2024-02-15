const fs = require('node:fs'); //a partir de node 16, se recomienda poner node:

const stats = fs.statSync('./HolaMundo.txt');

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
);