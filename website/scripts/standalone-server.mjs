import http from 'node:http';
import { DatabaseSync } from 'node:sqlite';
import { mkdir, readFile, stat, chmod } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { handleState } from '../lib/learning-store.mjs';

const websiteRoot=fileURLToPath(new URL('../',import.meta.url));
const publicRoot=path.join(websiteRoot,'public');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.ico':'image/x-icon'};

export async function startStandalone({port=3000,dataDir=path.join(websiteRoot,'.local-data')}={}){
 if(!Number.isInteger(port)||port<0||port>65535)throw Error('Port 0–65535 oralig‘ida bo‘lishi kerak.');
 await mkdir(dataDir,{recursive:true,mode:0o700});
 const dbPath=path.join(dataDir,'learning.sqlite');
 const sqlite=new DatabaseSync(dbPath);
 sqlite.exec('PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;');
 sqlite.exec((await readFile(path.join(websiteRoot,'drizzle/0000_living_captain_stacy.sql'),'utf8')).replace('CREATE TABLE','CREATE TABLE IF NOT EXISTS'));
 await chmod(dbPath,0o600).catch(()=>{});
 const db={prepare(sql){return {bind(...args){return {async first(){return sqlite.prepare(sql).get(...args);},async run(){const r=sqlite.prepare(sql).run(...args);return {meta:{changes:Number(r.changes)}};}};}};}};
 const server=http.createServer(async(req,res)=>{
  const send=(status,body,type='text/plain; charset=utf-8')=>{res.writeHead(status,{'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'same-origin'});res.end(body);};
  try{
   const host=req.headers.host||'';
   if(!/^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host))return send(403,'Faqat mahalliy manzil orqali kirish mumkin.');
   if(req.headers['sec-fetch-site']==='cross-site')return send(403,'Begona sahifadan kirish rad etildi.');
   const url=new URL(req.url||'/',`http://${host}`);
   if(url.pathname==='/healthz')return send(200,JSON.stringify({ok:true,mode:'local'}),'application/json');
   if(url.pathname==='/api/state'){
    let body='';
    if(Number(req.headers['content-length']||0)>800000)return send(413,'So‘rov juda katta.');
    if(req.method!=='GET'&&req.method!=='HEAD')for await(const chunk of req){body+=chunk.toString();if(Buffer.byteLength(body)>800000)return send(413,'So‘rov juda katta.');}
    const headers=new Headers();for(const key of ['origin','content-type'])if(typeof req.headers[key]==='string')headers.set(key,req.headers[key]);
    const request=new Request(url,{method:req.method,headers,...(body?{body}:{})});
    const response=await handleState(request,db,'local-profile');
    const data=await response.text();
    return send(response.status,data,response.headers.get('Content-Type')||'application/json');
   }
   if(!['GET','HEAD'].includes(req.method))return send(405,'Usul qo‘llanmaydi.');
   const requested=url.pathname==='/'?'/index.html':decodeURIComponent(url.pathname);
   const filename=path.resolve(publicRoot,'.'+requested);
   const relative=path.relative(publicRoot,filename);
   if(relative.startsWith('..')||path.isAbsolute(relative))return send(403,'Bu fayl ochilmaydi.');
   if(!(await stat(filename).catch(()=>null))?.isFile())return send(404,'Sahifa topilmadi.');
   let bytes=await readFile(filename);
   if(path.extname(filename)==='.html')bytes=Buffer.from(bytes.toString().replace('<head>','<head><meta name="runtime-mode" content="local">').replace('Shaxsiy sayt','Mahalliy sayt'));
   res.writeHead(200,{'Content-Type':types[path.extname(filename)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
   res.end(req.method==='HEAD'?undefined:bytes);
  }catch(error){console.error('So‘rov bajarilmadi:',error.message);if(!res.headersSent)send(500,'Server xatosi. Qayta urinib ko‘ring.');else res.end();}
 });
 await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(port,'127.0.0.1',resolve);});
 const actualPort=server.address().port;
 return {url:`http://localhost:${actualPort}`,server,async close(){await new Promise((resolve,reject)=>server.close(e=>e?reject(e):resolve()));sqlite.close();}};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const args=process.argv.slice(2);let port=3000;
 if(args.length){if(args.length!==2||args[0]!=='--port'||!/^\d+$/.test(args[1])){console.error('Foydalanish: npm start -- --port 3001');process.exit(1);}port=Number(args[1]);}
 try{const app=await startStandalone({port});console.log(`\nAI ta’lim yo‘li tayyor: ${app.url}\nMa’lumotlar shu kompyuterda saqlanadi. To‘xtatish: Ctrl+C.\n`);for(const sig of ['SIGINT','SIGTERM'])process.once(sig,()=>app.close().then(()=>process.exit(0)));}
 catch(error){console.error(error.code==='EADDRINUSE'?'3000-port band. npm start -- --port 3001 buyrug‘ini ishlating.':error.message);process.exit(1);}
}
