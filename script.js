(function(){
 var ku=false,grid=document.getElementById('shop'),
     dt=document.getElementById('dt'),dtBody=document.getElementById('dtBody'),curCat=null,curP=null;
 var T={
  men:{en:"Men’s Perfumes"},women:{en:"Women’s Perfumes"},
  ask:{en:"Ask for price"},order:{en:"Order on WhatsApp"},
  items:{en:"perfumes"},none:{en:"Perfumes coming soon ♡"},
  sold:{en:"Sold out"},soldBtn:{en:"Currently unavailable"},
  avail:{en:"In stock"},notes:{en:"Notes"},about:{en:"About this perfume"}
 };
 var L=function(k){return T[k].en};
 var BT='<svg class="ph" viewBox="0 0 80 110" fill="none" stroke="currentColor" stroke-width="2"><rect x="32" y="4" width="16" height="12" rx="2" fill="currentColor"/><rect x="10" y="24" width="60" height="80" rx="6"/><path d="M22 40h36L22 90h36" stroke-width="3"/></svg>';
 var LOCK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
 var WA='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.4A8.4 8.4 0 1 1 21 11.5z"/></svg>';
 function mk(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
 function imgs(p){return [p.img].concat(p.imgs||[]).filter(Boolean)}
 function inStock(p){return p.stock!==false}
 function pic(box,src,name){
  box.querySelectorAll('img,svg.ph').forEach(function(x){x.remove()});
  function ph(){box.querySelectorAll('img').forEach(function(x){x.remove()});if(!box.querySelector('svg.ph'))box.insertAdjacentHTML('afterbegin',BT)}
  if(!src){box.style.setProperty('--bgimg','none');ph();return}
  box.style.setProperty('--bgimg','url("'+src+'")');
  var i=document.createElement('img');i.alt=name||'';i.loading='lazy';i.onerror=ph;i.src=src;box.insertAdjacentElement('afterbegin',i);
 }
 function msg(p){
  var lines=['Hello 🌿','I would like to order this perfume from the ZAHA website:','','• Name: '+p.name];
  if(p.brand)lines.push('• Brand: '+p.brand);
  if(p.size)lines.push('• Size: '+p.size);
  lines.push('• Price: '+(p.price||'Please confirm'));
  return 'https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(lines.join('\n'));
 }
 function pr(c,p){var e=mk('div',c);if(!p.price){e.textContent=L('ask');return e}var m=String(p.price).match(/^(.*?)\s*(IQD)$/i);if(m){e.appendChild(document.createTextNode(m[1]));e.appendChild(mk('small','',m[2].toUpperCase()))}else e.textContent=p.price;return e}
 function card(p){
  var b=mk('button','pc'+(inStock(p)?'':' sold'));b.type='button';
  var im=mk('div','pimg');pic(im,imgs(p)[0],p.name);
  if(p.tag&&inStock(p))im.appendChild(mk('span','ptag',p.tag));
  if(!inStock(p)){var lk=mk('div','lock');lk.innerHTML=LOCK;lk.appendChild(mk('b','',L('sold')));im.appendChild(lk)}
  var f=mk('div','pinfo');
  if(p.brand)f.appendChild(mk('div','pbrand',p.brand));
  f.appendChild(mk('div','pname',p.name));
  f.appendChild(pr('pprice',p));
  b.append(im,f);b.onclick=function(){openDetail(p)};return b;
 }
 function renderDetail(){
  var p=curP;if(!p)return;dtBody.replaceChildren();
  var list=imgs(p),big=mk('div','dt-img');pic(big,list[0],p.name);
  if(!inStock(p)){var lk=mk('div','lock');lk.innerHTML=LOCK;lk.appendChild(mk('b','',L('sold')));big.appendChild(lk)}
  dtBody.appendChild(big);
  if(list.length>1){
   var th=mk('div','thumbs');
   list.forEach(function(s,i){var t=mk('button',i?'':'on');t.type='button';var im=document.createElement('img');im.src=s;im.alt='';t.appendChild(im);
    t.onclick=function(){pic(big,s,p.name);th.querySelectorAll('button').forEach(function(x){x.classList.remove('on')});t.classList.add('on');
     if(!inStock(p)&&!big.querySelector('.lock')){var l2=mk('div','lock');l2.innerHTML=LOCK;l2.appendChild(mk('b','',L('sold')));big.appendChild(l2)}};
    th.appendChild(t)});
   dtBody.appendChild(th);
  }
  var inn=mk('div','dt-in');
  if(p.brand)inn.appendChild(mk('div','pbrand',p.brand));
  inn.appendChild(mk('h3','',p.name));
  var meta=mk('div','meta');
  if(p.size)meta.appendChild(mk('span','',p.size));
  meta.appendChild(mk('span',inStock(p)?'ok':'no',inStock(p)?L('avail'):L('sold')));
  inn.appendChild(meta);
  inn.appendChild(pr('dt-price',p));
  if(p.desc){inn.appendChild(mk('div','dt-h',L('about')));inn.appendChild(mk('p','dt-desc',p.desc))}
  if(p.notes&&p.notes.length){inn.appendChild(mk('div','dt-h',L('notes')));var n=mk('div','notes');p.notes.forEach(function(x){n.appendChild(mk('span','',x))});inn.appendChild(n)}
  dtBody.appendChild(inn);
  var o=mk('a','order'+(inStock(p)?'':' off'));
  if(inStock(p)){o.href=msg(p);o.target='_blank';o.rel='noopener';o.innerHTML=WA;o.appendChild(mk('span','',L('order')))}
  else o.appendChild(mk('span','',L('soldBtn')));
  dtBody.appendChild(o);
 }
 var lockY=0,locked=false;
 function lock(){if(locked)return;locked=true;lockY=window.scrollY||document.documentElement.scrollTop||0;var b=document.body.style;b.position='fixed';b.top=(-lockY)+'px';b.left='0';b.right='0';b.width='100%'}
 function unlock(){if(!locked)return;locked=false;var b=document.body.style;b.position='';b.top='';b.left='';b.right='';b.width='';var y=lockY;window.scrollTo({top:y,left:0,behavior:'instant'});requestAnimationFrame(function(){window.scrollTo({top:y,left:0,behavior:'instant'})});setTimeout(function(){if(Math.abs(window.scrollY-y)>2&&!locked)window.scrollTo({top:y,left:0,behavior:'instant'})},120)}
 function openDetail(p){curP=p;renderDetail();try{history.scrollRestoration='manual';history.pushState({zd:1},'')}catch(e){}lock();dt.classList.add('on');dt.setAttribute('aria-hidden','false');dt.firstElementChild.scrollTop=0}
 function closeDetail(){if(!dt.classList.contains('on'))return;if(history.state&&history.state.zd){history.back();return}hideDetail()}
 function hideDetail(){dt.classList.remove('on');dt.setAttribute('aria-hidden','true');curP=null;unlock()}
 window.addEventListener('popstate',function(){if(dt.classList.contains('on'))hideDetail()});
 function norm(t){return String(t||'').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f\u064b-\u065f\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[^a-z0-9\u0600-\u06ff\s]/g,' ').replace(/\s+/g,' ').trim()}
 PRODUCTS.forEach(function(p){p._s=norm([p.name,p.brand,p.size,(p.notes||[]).join(' '),p.desc,p.price].join(' '))});
 var query='',first=true,total=PRODUCTS.length,avail=PRODUCTS.filter(inStock).length;
 function countText(n){
  if(query)return n+' / '+total+' perfumes';
  return avail+' perfumes available'+(avail<total?' · '+total+' total':'');
 }
 function render(){
  grid.replaceChildren();
  var terms=norm(query).split(' ').filter(Boolean);
  var list=PRODUCTS.filter(function(p){return terms.every(function(t){return p._s.indexOf(t)>-1})});
  document.getElementById('countLine').textContent=countText(list.length);
  if(!list.length)grid.appendChild(mk('div','empty',query?'No perfumes found':L('none')));
  grid.classList.toggle('nofx',!first);
  list.forEach(function(p,i){var c=card(p);c.style.setProperty('--i',Math.min(i,8));grid.appendChild(c)});
  first=false;
 }
 var qi=document.getElementById('q'),qc=document.getElementById('qClear'),qt=null;
 function setQ(v){query=v;qc.classList.toggle('hide',!v);render()}
 qi.addEventListener('input',function(){clearTimeout(qt);var v=qi.value;qc.classList.toggle('hide',!v);qt=setTimeout(function(){setQ(v)},120)});
 qi.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();qi.blur()}});
 qc.onclick=function(){qi.value='';setQ('');qi.focus()};
 document.getElementById('dtX').onclick=closeDetail;
 dt.onclick=function(e){if(e.target===dt)closeDetail()};
 document.addEventListener('keydown',function(e){if(e.key==='Escape'){if(dt.classList.contains('on'))closeDetail()}});
 render();
 /* stagger reveal */
 document.querySelectorAll('.rv').forEach(function(e){var i=Array.prototype.indexOf.call(e.parentNode.children,e);e.style.transitionDelay=(Math.min(i,5)*90)+'ms'});
 /* gold dust in hero */
 var hero=document.querySelector('.hero');
 if(hero&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
  var d=mk('div','dust');
  for(var k=0;k<26;k++){var i=mk('i'),z=2+Math.random()*4;
   i.style.cssText='left:'+(Math.random()*100)+'%;width:'+z+'px;height:'+z+'px;--dx:'+((Math.random()-.5)*120)+'px;animation-duration:'+(9+Math.random()*10)+'s;animation-delay:-'+(Math.random()*16)+'s';d.appendChild(i)}
  hero.insertBefore(d,hero.firstChild);
 }
 /* scroll: progress bar, header, parallax */
 var prog=document.getElementById('prog'),hd=document.querySelector('header'),tick=false;
 function onScroll(){
  var y=window.scrollY,m=document.documentElement.scrollHeight-innerHeight;
  prog.style.transform='scaleX('+(m>0?y/m:0)+')';
  hd.classList.toggle('sc',y>30);
  if(hero)hero.style.setProperty('--sy',Math.min(y,700));
  tick=false;
 }
 window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});
 onScroll();
 /* 3D tilt + light on cards (mouse only) */
 if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
  var last=null;
  function reset(el){if(el){el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg')}}
  document.addEventListener('pointermove',function(e){
   var el=e.target.closest?e.target.closest('.pc,.cat'):null;
   if(el!==last){reset(last);last=el}
   if(!el)return;
   var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
   el.style.setProperty('--ry',((x-.5)*10)+'deg');el.style.setProperty('--rx',((.5-y)*10)+'deg');
   el.style.setProperty('--mx',(x*100)+'%');el.style.setProperty('--my',(y*100)+'%');
  });
 }
 var io=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
 document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
})();
