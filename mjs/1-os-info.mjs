import { platform, uptime } from 'node:os';
console.log('Nombre del sistema operativo: ', platform());
console.log('Horas que lleva encendido el ordenador: ', uptime()/60/60);
