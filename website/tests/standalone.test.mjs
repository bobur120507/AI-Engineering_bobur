import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {startStandalone} from '../scripts/standalone-server.mjs';
const blank=()=>({version:1,settings:{python:'new',hours:8,focus:'cv'},tasks:{},courses:{},notes:'',updated:null,workspace:{assignments:{},readiness:{},weeks:{},journal:[]}});
test('Fresh install serves the full site, saves progress and survives a restart',async()=>{
 const dir=await mkdtemp(path.join(os.tmpdir(),'ai-learning-'));let app;
 try{
 app=await startStandalone({port:0,dataDir:dir});const base=app.url.replace('localhost','127.0.0.1');
 const html=await(await fetch(base)).text();assert.ok(html.includes('runtime-mode'));assert.ok(html.includes('Mahalliy sayt'));
 for(const asset of ['app.js','workspace.js','learning-data.js','certificates.js','data.js','styles.css','state-validation.js'])assert.equal((await fetch(base+'/'+asset)).status,200);
 const initial=await(await fetch(base+'/api/state')).json();assert.equal(initial.state,null);
 const data=blank();data.notes='Saqlangan qayd';data.tasks.ml1=true;
 const put=()=>fetch(base+'/api/state',{method:'PUT',headers:{'Content-Type':'application/json',Origin:base},body:JSON.stringify({revision:0,state:data})});
 assert.equal((await put()).status,200);assert.equal((await put()).status,409);
 assert.equal((await fetch(base+'/api/state',{method:'PUT',headers:{'Content-Type':'application/json',Origin:'https://evil.test'},body:JSON.stringify({revision:1,state:data})})).status,403);
 assert.equal((await fetch(base+'/%2e%2e%2fpackage.json')).status,403);
 assert.equal((await fetch(base+'/api/state',{headers:{'Sec-Fetch-Site':'cross-site'}})).status,403);
 await app.close();app=await startStandalone({port:0,dataDir:dir});const saved=await(await fetch(app.url.replace('localhost','127.0.0.1')+'/api/state')).json();assert.equal(saved.state.notes,data.notes);assert.equal(saved.state.tasks.ml1,true);
 }finally{if(app)await app.close();await rm(dir,{recursive:true,force:true});}
});
