const starterProducts=[
 {name:'Casco de seguridad ABS',category:'Protección craneal',price:24500,stock:42,status:'Publicado'},
 {name:'Guante anticorte nivel 5',category:'Protección de manos',price:8900,stock:18,status:'Publicado'},
 {name:'Arnés multipropósito 4 argollas',category:'Trabajo en altura',price:126000,stock:6,status:'Revisar ficha'},
 {name:'Protector auditivo copa',category:'Protección auditiva',price:17300,stock:0,status:'Sin stock'}
];
const starterTopics=[['Trabajo en altura','Arneses, anclajes y planificación segura.'],['Riesgo eléctrico','Buenas prácticas antes de intervenir.'],['Protección respiratoria','Elegí según el agente y la tarea.']];
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
const write=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
function money(n){return new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(n)}
function renderPublic(){const topics=document.querySelector('#topics'),grid=document.querySelector('#product-grid');if(topics)topics.innerHTML=starterTopics.map((t,i)=>`<article class="card"><span class="card-index">0${i+1}</span><h3>${t[0]}</h3><p>${t[1]}</p><a class="card-link" href="#recursos">Ver guía →</a></article>`).join('');if(grid){const products=read('prevenclick-products',starterProducts);grid.innerHTML=products.slice(0,3).map(p=>`<article class="card product-card"><div class="product-visual">◇</div><p class="category">${p.category}</p><h3>${p.name}</h3><p>Consultá la ficha y verificá que el equipo sea adecuado para tu tarea.</p><span class="card-link">${money(Number(p.price)||0)}</span></article>`).join('')}}
window.Prevenclick={starterProducts,read,write,money};renderPublic();
