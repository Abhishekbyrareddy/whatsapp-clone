import http from 'node:http';
import {readFile} from 'node:fs/promises';
const files={'/':'index.html','/index.html':'index.html','/app.js':'app.js','/style.css':'style.css'};
http.createServer(async(req,res)=>{try{const name=files[new URL(req.url,'http://localhost').pathname];if(!name){res.writeHead(404).end();return;}const body=await readFile(new URL(name,import.meta.url));res.setHeader('Content-Type',name.endsWith('.css')?'text/css':name.endsWith('.js')?'text/javascript':'text/html');res.end(body);}catch{res.writeHead(500).end('Unable to load app');}}).listen(4173,'127.0.0.1',()=>console.log('WhatsApp demo: http://127.0.0.1:4173'));
