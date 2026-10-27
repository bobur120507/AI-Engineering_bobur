export function validatePayload(input){
 if(!input||input.version!==1||!input.settings||!['new','comfortable'].includes(input.settings.python)||![4,8,12,20].includes(Number(input.settings.hours))||!['cv','nlp'].includes(input.settings.focus))throw Error('Reja formati noto‘g‘ri.');
 const dict=(value,check,max=512)=>{if(!value||typeof value!=='object'||Array.isArray(value)||Object.keys(value).length>max)throw Error('Ma’lumot formati noto‘g‘ri.');for(const [k,v]of Object.entries(value))if(!/^[a-zA-Z0-9_-]{1,80}$/.test(k)||!check(v))throw Error('Qiymat noto‘g‘ri.');return value;};
 dict(input.tasks,v=>typeof v==='boolean');dict(input.courses,v=>['not-started','in-progress','complete'].includes(v));
 if(typeof input.notes!=='string'||input.notes.length>30000)throw Error('Qayd juda uzun.');
 const w=input.workspace||{assignments:{},readiness:{},weeks:{},journal:[]};
 dict(w.assignments,v=>v&&typeof v.answer==='string'&&v.answer.length<=12000&&typeof v.done==='boolean',32);
 dict(w.readiness,v=>v&&Array.isArray(v.answers)&&v.answers.length<=8&&v.answers.every(a=>typeof a==='string'&&a.length<200),16);
 dict(w.weeks,v=>v&&Array.isArray(v.sessions)&&v.sessions.length===4&&v.sessions.every(s=>s&&typeof s.title==='string'&&s.title.length<=500&&typeof s.minutes==='number'&&s.minutes>0&&s.minutes<=1200&&typeof s.done==='boolean'&&typeof s.kind==='string'&&s.kind.length<100&&typeof s.date==='string'&&s.date.length<30&&typeof s.detail==='string'&&s.detail.length<3000),160);
 if(!Array.isArray(w.journal)||w.journal.length>200)throw Error('200 tagacha tajriba saqlash mumkin.');
 for(const item of w.journal){if(!item||typeof item.id!=='string'||!/^[a-zA-Z0-9_-]{1,80}$/.test(item.id))throw Error('Tajriba identifikatori noto‘g‘ri.');for(const key of ['title','date','dataset','hypothesis','parameters','metrics','mistakes','conclusions'])if(typeof item[key]!=='string'||item[key].length>(key==='title'?200:8000))throw Error('Tajriba maydoni noto‘g‘ri.');}
 const result={version:1,settings:{python:input.settings.python,hours:Number(input.settings.hours),focus:input.settings.focus},tasks:input.tasks,courses:input.courses,notes:input.notes,updated:typeof input.updated==='string'?input.updated:null,workspace:w};
 if(JSON.stringify(result).length>750000)throw Error('Ma’lumot hajmi juda katta.');return result;
}
export const replies={json:(data,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store','Vary':'Cookie'}})};
export async function handleState(request,db,userId){
 if(!userId)return replies.json({error:'Akkaunt orqali kirish kerak.'},401);
 if(request.method==='GET'){const row=await db.prepare('SELECT payload, revision FROM learning_state WHERE user_id = ?').bind(userId).first();return replies.json({revision:row?.revision||0,state:row?JSON.parse(row.payload):null});}
 if(request.method!=='PUT')return replies.json({error:'Usul qo‘llanmaydi.'},405);
 const origin=request.headers.get('Origin');if(origin&&origin!==new URL(request.url).origin)return replies.json({error:'Begona manbadan yozish rad etildi.'},403);
 if(!request.headers.get('Content-Type')?.startsWith('application/json'))return replies.json({error:'JSON kerak.'},415);
 let body;try{const raw=await request.text();if(raw.length>800000)throw Error('Hajm katta.');body=JSON.parse(raw);if(!Number.isSafeInteger(body.revision)||body.revision<0)throw Error('Versiya noto‘g‘ri.');body.state=validatePayload(body.state);}catch(e){return replies.json({error:e.message||'Ma’lumot noto‘g‘ri.'},400);}
 const payload=JSON.stringify(body.state),now=new Date().toISOString();let result;
 if(body.revision===0)result=await db.prepare('INSERT OR IGNORE INTO learning_state (user_id,payload,revision,updated_at) VALUES (?,?,1,?)').bind(userId,payload,now).run();
 else result=await db.prepare('UPDATE learning_state SET payload = ?, revision = revision + 1, updated_at = ? WHERE user_id = ? AND revision = ?').bind(payload,now,userId,body.revision).run();
 if(!result.meta.changes)return replies.json({error:'Boshqa qurilmada yangi o‘zgarish bor. Qaysi nusxani davom ettirishni tanlang.'},409);
 return replies.json({revision:body.revision+1,savedAt:now});
}
