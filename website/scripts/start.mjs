import {fileURLToPath} from 'node:url';
if(Number(process.versions.node.split('.')[0])<24){console.error('Node.js 24 yoki yangiroq versiya kerak. node --version orqali tekshiring. Node.js o‘rnatilgach npm start buyrug‘ini qayta bajaring.');process.exit(1);}
process.argv[1]=fileURLToPath(new URL('./standalone-server.mjs',import.meta.url));
await import('./standalone-server.mjs');
