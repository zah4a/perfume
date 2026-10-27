(function(){
 var C=typeof CFG!=='undefined'?CFG:{},WHATSAPP=C.WHATSAPP||'9647509316163',
     PRODUCTS=[],grid=document.getElementById('shop'),
     dt=document.getElementById('dt'),dtBody=document.getElementById('dtBody'),curP=null;
 var lang='en';
 try{var sl=localStorage.getItem('zaha_lang');if(sl==='ku'||sl==='en')lang=sl;else if(/^(ku|ckb)/i.test(navigator.language||''))lang='ku'}catch(e){}
 function K(en,ku){return lang==='ku'?ku:en}
 var T={
  ask:{en:"Ask for price",ku:" بوو زانینا بهای پەیوەندیێ بکە "},order:{en:"Order on WhatsApp",ku:"داخازێ ل واتسئاپێ بکە"},
  none:{en:"Perfumes coming soon ♡",ku:"گولاڤ د زوویی دا دێ هێن ♡"},
  sold:{en:"Sold out",ku:"نەمایە"},soldBtn:{en:"Currently unavailable",ku:" بەردەست نینە"},
  avail:{en:"In stock",ku:"بەردەستە"},notes:{en:"Notes",ku:"بۆنێن سەرەکی"},about:{en:"About this perfume",ku:"دەربارەی ڤی گولاڤێ "},
  nf:{en:"No perfumes found",ku:"چ گولاڤ نەهاتنە دیتن"}
 };
 var L=function(k){return T[k][lang]||T[k].en};
 var BT='<svg class="ph" viewBox="0 0 80 110" fill="none" stroke="currentColor" stroke-width="2"><rect x="32" y="4" width="16" height="12" rx="2" fill="currentColor"/><rect x="10" y="24" width="60" height="80" rx="6"/><path d="M22 40h36L22 90h36" stroke-width="3"/></svg>';
 var LOCK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
 var WA='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.4A8.4 8.4 0 1 1 21 11.5z"/></svg>';
 function mk(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
 function imgs(p){return [p.img].concat(p.imgs||[]).filter(Boolean)}
 function inStock(p){return p.stock!==false}
 /* price: number (45000) or text ("45,000 IQD") -> "45,000 IQD" */
 function priceText(p){var v=p.price;if(typeof v==='number'&&v>0)return v.toLocaleString('en')+' IQD';return v?String(v):''}
 /* bg=true only for the big detail photo (blurred backdrop); cards stay light */
 function pic(box,src,name,bg){
  box.querySelectorAll('img,svg.ph').forEach(function(x){x.remove()});
  function ph(){box.querySelectorAll('img').forEach(function(x){x.remove()});if(!box.querySelector('svg.ph'))box.insertAdjacentHTML('afterbegin',BT)}
  if(!src){box.style.setProperty('--bgimg','none');ph();return}
  if(bg)box.style.setProperty('--bgimg','url("'+src+'")');
  var i=document.createElement('img');i.alt=name||'';i.loading='lazy';i.decoding='async';i.onerror=ph;i.src=src;box.insertAdjacentElement('afterbegin',i);
 }
 function absUrl(u){try{return new URL(u,location.href).href}catch(e){return u}}
 function msg(p){
  var lines=[K('Hello 🌿','سلاڤ 🌿'),K('I would like to order this perfume from the ZAHA website:','ئەز دڤێم ڤی عطری ژ وێبسایتێ ZAHA داخاز بکەم:'),'',K('• Name: ','• ناڤ: ')+p.name];
  if(p.brand)lines.push(K('• Brand: ','• براند: ')+p.brand);
  if(p.size)lines.push(K('• Size: ','• قەبارە: ')+p.size);
  lines.push(K('• Price: ','• نرخ: ')+(priceText(p)||K('Please confirm','هیڤیدکەم پشتراست بکە')));
  var im0=imgs(p)[0];if(im0)lines.push(K('• Photo: ','• وێنە: ')+absUrl(im0));
  return 'https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(lines.join('\n'));
 }
 function pr(c,p){var e=mk('div',c),t=priceText(p);if(!t){e.textContent=L('ask');return e}var m=t.match(/^(.*?)\s*(IQD)$/i);if(m){e.appendChild(document.createTextNode(m[1]));e.appendChild(mk('small','',m[2].toUpperCase()))}else e.textContent=t;return e}
 function card(p,anim){
  var b=mk('button','pc'+(inStock(p)?'':' sold')+(anim?' a':''));b.type='button';
  var im=mk('div','pimg');pic(im,imgs(p)[0],p.name,false);
  if(p.tag&&inStock(p))im.appendChild(mk('span','ptag',p.tag));
  if(!inStock(p)){var lk=mk('div','lock');lk.innerHTML=LOCK;lk.appendChild(mk('b','',L('sold')));im.appendChild(lk)}
  var f=mk('div','pinfo');
  if(p.brand)f.appendChild(mk('div','pbrand',p.brand));
  f.appendChild(mk('div','pname',p.name));
  f.appendChild(pr('pprice',p));
  b.append(im,f);b.onclick=function(){openDetail(p)};return b;
 }
 function soldLock(big){var l=mk('div','lock');l.innerHTML=LOCK;l.appendChild(mk('b','',L('sold')));big.appendChild(l)}
 function renderDetail(){
  var p=curP;if(!p)return;dtBody.replaceChildren();
  var list=imgs(p),big=mk('div','dt-img');pic(big,list[0],p.name,true);
  if(!inStock(p))soldLock(big);
  dtBody.appendChild(big);
  if(list.length>1){
   var th=mk('div','thumbs');
   list.forEach(function(s,i){var t=mk('button',i?'':'on');t.type='button';var im=document.createElement('img');im.src=s;im.alt='';im.decoding='async';t.appendChild(im);
    t.onclick=function(){pic(big,s,p.name,true);th.querySelectorAll('button').forEach(function(x){x.classList.remove('on')});t.classList.add('on');
     if(!inStock(p)&&!big.querySelector('.lock'))soldLock(big)};
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
  var bar=mk('div','dt-bar');
  if(inStock(p)){var ab=mk('button','addc');ab.type='button';ab.innerHTML=BAG;ab.appendChild(mk('span','',U.add));ab.onclick=function(){addToCart(p.id)};bar.appendChild(ab)}
  bar.appendChild(o);dtBody.appendChild(bar);
 }
 var lockY=0,locked=false;
 function lock(){if(locked)return;locked=true;lockY=window.scrollY||document.documentElement.scrollTop||0;var b=document.body.style;b.position='fixed';b.top=(-lockY)+'px';b.left='0';b.right='0';b.width='100%'}
 function unlock(){if(!locked)return;locked=false;var b=document.body.style;b.position='';b.top='';b.left='';b.right='';b.width='';var y=lockY;window.scrollTo({top:y,left:0,behavior:'instant'});requestAnimationFrame(function(){window.scrollTo({top:y,left:0,behavior:'instant'})});setTimeout(function(){if(Math.abs(window.scrollY-y)>2&&!locked)window.scrollTo({top:y,left:0,behavior:'instant'})},120)}
 function openDetail(p){curP=p;renderDetail();try{history.scrollRestoration='manual';history.pushState({zd:1},'')}catch(e){}lock();dt.classList.add('on');dt.setAttribute('aria-hidden','false');dt.firstElementChild.scrollTop=0}
 function closeDetail(){if(!dt.classList.contains('on'))return;if(history.state&&history.state.zd){history.back();return}hideDetail()}
 function hideDetail(){dt.classList.remove('on');dt.setAttribute('aria-hidden','true');curP=null;unlock()}
 window.addEventListener('popstate',function(){if(dt.classList.contains('on'))hideDetail()});
 function norm(t){return String(t||'').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f\u064b-\u065f\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[^a-z0-9\u0600-\u06ff\s]/g,' ').replace(/\s+/g,' ').trim()}
 var query='',first=true,loaded=false;
 function countText(n,total,avail){
  if(lang==='ku'){if(query)return n+' / '+total+' گولاڤ ';return avail+' گولاڤ بەردەستن'+(avail<total?' · '+total+' ل کۆ':'')}
  if(query)return n+' / '+total+' perfumes';
  return avail+' perfumes available'+(avail<total?' · '+total+' total':'');
 }
 function render(){
  var total=PRODUCTS.length,avail=PRODUCTS.filter(inStock).length;
  var terms=norm(query).split(' ').filter(Boolean);
  var list=PRODUCTS.filter(function(p){return terms.every(function(t){return p._s.indexOf(t)>-1})});
  document.getElementById('countLine').textContent=total?countText(list.length,total,avail):'';
  var frag=document.createDocumentFragment();
  if(!list.length)frag.appendChild(mk('div','empty',query?L('nf'):L('none')));
  /* entrance animation only for the first screen of cards, only once */
  list.forEach(function(p,i){var c=card(p,first&&i<8);c.style.setProperty('--i',i);frag.appendChild(c)});
  grid.replaceChildren(frag);
  first=false;
 }
 var qi=document.getElementById('q'),qc=document.getElementById('qClear'),qt=null;
 function setQ(v){query=v;qc.classList.toggle('hide',!v);render()}
 qi.addEventListener('input',function(){clearTimeout(qt);var v=qi.value;qc.classList.toggle('hide',!v);qt=setTimeout(function(){setQ(v)},180)});
 qi.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();qi.blur()}});
 qc.onclick=function(){qi.value='';setQ('');qi.focus()};
 document.getElementById('dtX').onclick=closeDetail;
 dt.onclick=function(e){if(e.target===dt)closeDetail()};
 document.addEventListener('keydown',function(e){if(e.key==='Escape'){if(dt.classList.contains('on'))closeDetail()}});

 /* ===================== CART ===================== */
 var Z=(typeof ZONES!=='undefined')?ZONES:{},CK='zaha_cart_v1',cart=[],zone='',zoneTxt='';
 var ct=document.getElementById('ct'),ctBody=document.getElementById('ctBody'),cc=document.getElementById('cc'),toastEl=document.getElementById('toast'),toastT=null;
 var BAG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>';
 function mkU(){return {
  add:K('Add to cart','بو سەبەتێ زێدە بکە'),added:K('Added to cart ✓','بۆ سەبەتێ هاتە زێدەکرن ✓'),cart:K('Your cart','سەبەتا من'),empty:K('Your cart is empty','سەبەتا تە ڤالایە'),
  browse:K('Browse perfumes','گولاڤان ببینە'),where:K('Where are you?','تو ل کیڤە دژی؟'),pick:K('Choose your location…','جهێ خۆ هەلبژێرە…'),other:K('Other place','جهەکێ دی'),
  otherPh:K('Write your place (city / village / area)','جهێ خۆ بنڤیسە (باژێر / گوند / گەڕەک)'),prods:K('Products','کوژمێ بەرهەمان'),deliv:K('Delivery','گەهاندن'),
  total:K('Total','کوژمێ گشتی'),tbc:K('To be confirmed','دێ هێتە پشتڕاستکرن'),send:K('Send order on WhatsApp','داخازیێ ب واتسئاپی فرێکە'),clear:K('Clear cart','سەبەتێ ڤالا بکە')}}
 var U=mkU();
 function zl(k){var z=Z[k]||{};return lang==='ku'?(z.ku||z.en||k):(z.en||z.ku||k)}
 try{var sv=JSON.parse(localStorage.getItem(CK)||'{}');cart=Array.isArray(sv.items)?sv.items:[];zone=sv.zone||'';zoneTxt=sv.zt||''}catch(e){}
 function saveCart(){try{localStorage.setItem(CK,JSON.stringify({items:cart,zone:zone,zt:zoneTxt}))}catch(e){}}
 function byId(id){for(var i=0;i<PRODUCTS.length;i++)if(PRODUCTS[i].id===id)return PRODUCTS[i]}
 function priceNum(p){var v=p.price;if(typeof v==='number')return v>0?v:0;var n=parseInt(String(v||'').replace(/[^\d]/g,''),10);return n>0?n:0}
 function fmt(n){return n.toLocaleString('en')+' IQD'}
 function cartCount(){return cart.reduce(function(a,x){return a+x.q},0)}
 function cartLines(){var out=[];cart.forEach(function(x){var p=byId(x.id);if(p&&inStock(p))out.push({p:p,q:x.q})});return out}
 function badge(bump){var n=cartCount();cc.textContent=n;cc.hidden=!n;if(bump){cc.classList.remove('bump');void cc.offsetWidth;cc.classList.add('bump')}}
 /* drop items that no longer exist / sold out (after products load) */
 function cartSync(){
  if(PRODUCTS.length){cart=cart.filter(function(x){var p=byId(x.id);return p&&inStock(p)});saveCart()}
  badge(false);
 }
 function toast(t){toastEl.textContent=t;toastEl.classList.add('on');clearTimeout(toastT);toastT=setTimeout(function(){toastEl.classList.remove('on')},1800)}
 function addToCart(id){
  var f=null;cart.forEach(function(x){if(x.id===id)f=x});
  if(f){if(f.q<20)f.q++}else cart.push({id:id,q:1});
  saveCart();badge(true);toast(U.added);
 }
 function setQty(id,d){
  cart.forEach(function(x){if(x.id===id)x.q=Math.max(1,Math.min(20,x.q+d))});
  saveCart();badge(false);renderCart();
 }
 function removeItem(id){cart=cart.filter(function(x){return x.id!==id});saveCart();badge(false);renderCart()}
 function clearCart(){cart=[];saveCart();badge(false);renderCart()}
 function calc(ls){
  var sub=0,unk=false;
  ls.forEach(function(x){var n=priceNum(x.p);if(n)sub+=n*x.q;else unk=true});
  var fee=null,label='';
  if(zone&&Z[zone]){fee=Z[zone].fee;label=zl(zone)}
  else if(zone==='other'){label=zoneTxt.trim()}
  return {sub:sub,unk:unk,fee:fee,label:label,total:sub+(fee||0),tbc:unk||(zone==='other')};
 }
 function cartMsg(ls){
  var c=calc(ls),lines=[K('Hello 🌿','سلاڤ 🌿'),K('I would like to order from the ZAHA website:','من دڤێت ژ وێبسایتێ ZAHA داخاز بکەم:'),''];
  ls.forEach(function(x,i){
   var p=x.p,t=(i+1)+'. '+p.name;if(p.brand)t+=' ('+p.brand+')';if(p.size)t+=' – '+p.size;lines.push(t);
   var pt=priceText(p);lines.push('   '+K('Qty: ','ژمارە: ')+x.q+(pt?' × '+pt:''));
   var im=imgs(p)[0];if(im)lines.push('   '+K('Photo: ','وێنە: ')+absUrl(im));
   lines.push('');
  });
  lines.push(K('Products: ','کوژمێ بەرهەمان: ')+fmt(c.sub)+(c.unk?K(' + items to be confirmed',' + بەرهەمێن نرخ نەدیار'):''));
  if(zone==='other')lines.push(K('Delivery: to be confirmed','گەهاندن: دێ هێتە پشتڕاستکرن'));
  else if(c.fee!=null)lines.push(K('Delivery: ','گەهاندن: ')+fmt(c.fee));
  lines.push(K('Total: ','کوژمێ گشتی: ')+fmt(c.total)+(c.tbc?K(' + to be confirmed',' + دێ هێتە پشتڕاستکرن'):''));
  lines.push('');
  lines.push(K('📍 Location: ','📍 شوێنن: ')+(c.label||'-'));
  return 'https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(lines.join('\n'));
 }
 function shake(el){el.classList.remove('shake');void el.offsetWidth;el.classList.add('shake');try{el.focus()}catch(e){}}
 function renderCart(){
  ctBody.replaceChildren();
  ctBody.appendChild(mk('h3','ct-h',U.cart));
  var ls=cartLines();
  if(!ls.length){
   ctBody.appendChild(mk('div','ct-empty',U.empty));
   var bb=mk('button','btn fill ct-go',U.browse);bb.type='button';bb.onclick=closeCart;ctBody.appendChild(bb);
   return;
  }
  var list=mk('div','cl');
  ls.forEach(function(x){
   var p=x.p,r=mk('div','ci'),th=mk('div','cth');pic(th,imgs(p)[0],p.name,false);
   var inf=mk('div','cin');if(p.brand)inf.appendChild(mk('div','pbrand',p.brand));
   inf.appendChild(mk('b','',p.name));
   var sm=[p.size,priceText(p)].filter(Boolean).join(' · ');inf.appendChild(mk('span','',sm||L('ask')));
   var q=mk('div','qt'),mi=mk('button','','−'),pl=mk('button','','+');mi.type=pl.type='button';
   mi.setAttribute('aria-label','-');pl.setAttribute('aria-label','+');
   mi.onclick=function(){x.q>1?setQty(p.id,-1):removeItem(p.id)};pl.onclick=function(){setQty(p.id,1)};
   q.append(mi,mk('span','',x.q),pl);
   var rm=mk('button','rm','✕');rm.type='button';rm.setAttribute('aria-label','Remove');rm.onclick=function(){removeItem(p.id)};
   r.append(th,inf,q,rm);list.appendChild(r);
  });
  ctBody.appendChild(list);
  /* location + summary */
  var zb=mk('label','zb'),zlab=mk('span','',U.where),sel=document.createElement('select');sel.className='zs';
  var o0=mk('option','',U.pick);o0.value='';sel.appendChild(o0);
  Object.keys(Z).forEach(function(k){var o=mk('option','',zl(k));o.value=k;sel.appendChild(o)});
  var oo=mk('option','',U.other);oo.value='other';sel.appendChild(oo);
  sel.value=zone;zb.append(zlab,sel);ctBody.appendChild(zb);
  var zx=document.createElement('input');zx.className='zx';zx.placeholder=U.otherPh;zx.value=zoneTxt;zx.hidden=(zone!=='other');ctBody.appendChild(zx);
  var sum=mk('div','sum'),sS=mk('b'),sD=mk('b'),sT=mk('b');
  function row(l,b,c){var d=mk('div',c||'');d.append(mk('span','',l),b);sum.appendChild(d)}
  row(U.prods,sS);row(U.deliv,sD);row(U.total,sT,'tot');ctBody.appendChild(sum);
  var go=mk('a','btn fill ct-wa');go.target='_blank';go.rel='noopener';go.innerHTML=WA;go.appendChild(mk('span','',U.send));
  var cl=mk('button','btn ct-clear',U.clear);cl.type='button';cl.onclick=clearCart;
  var acts=mk('div','acts');acts.append(go,cl);ctBody.appendChild(acts);
  function upd(){
   var c=calc(ls);
   sS.textContent=fmt(c.sub)+(c.unk?' +':'');
   sD.textContent=zone==='other'?U.tbc:(c.fee!=null?fmt(c.fee):'—');
   sT.textContent=fmt(c.total)+(c.tbc?' +':'');
   go.href=cartMsg(ls);
  }
  sel.onchange=function(){zone=sel.value;zx.hidden=(zone!=='other');saveCart();upd();if(zone==='other')zx.focus()};
  zx.oninput=function(){zoneTxt=zx.value;saveCart();upd()};
  go.addEventListener('click',function(e){
   if(!zone){e.preventDefault();shake(sel);return}
   if(zone==='other'&&!zoneTxt.trim()){e.preventDefault();shake(zx);return}
  });
  upd();
 }
 function openCart(){
  if(ct.classList.contains('on'))return;
  if(dt.classList.contains('on'))return;
  renderCart();
  try{history.scrollRestoration='manual';history.pushState({zc:1},'')}catch(e){}
  lock();ct.classList.add('on');ct.setAttribute('aria-hidden','false');ct.firstElementChild.scrollTop=0;
 }
 function closeCart(){if(!ct.classList.contains('on'))return;if(history.state&&history.state.zc){history.back();return}hideCart()}
 function hideCart(){ct.classList.remove('on');ct.setAttribute('aria-hidden','true');unlock()}
 window.addEventListener('popstate',function(){if(ct.classList.contains('on'))hideCart()});
 document.getElementById('cartBtn').onclick=openCart;
 document.getElementById('ctX').onclick=closeCart;
 ct.onclick=function(e){if(e.target===ct)closeCart()};
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&ct.classList.contains('on'))closeCart()});
 badge(false);

 /* ===== load products from products.json (managed by admin.html) ===== */
 function load(){
  grid.appendChild(mk('div','empty','…'));
  fetch('products.json',{cache:'no-cache'}).then(function(r){return r.ok?r.json():[]}).catch(function(){return []}).then(function(d){
   PRODUCTS=Array.isArray(d)?d:[];
   PRODUCTS.forEach(function(p){p._s=norm([p.name,p.brand,p.size,(p.notes||[]).join(' '),p.desc,priceText(p)].join(' '))});
   loaded=true;render();cartSync();
  });
 }
 load();

 /* ===================== LANGUAGE (English / Kurdish Bahdini) ===================== */
 var KU={
  order_h:'داخاز بکە',
  sub:'گولاڤێن ب کوالیتیا بلند دگەهنە دەرگەهێ مالا تە د هەمی عێراقێ و هەرێما کوردستانێ دا.',
  shop:'گولاڤان ببینە',wa:'واتسئاپ',
  col:'کۆمەلە',ours:'گولاڤێن مە',
  how:'چاوا داخاز بکەم',three:'سێ پێنگاڤێن سادە',
  s1h:'هەلبژێرە',s1p:'گولاڤەکێ ڤەکە و هەمی وردەکاریان ببینە.',
  s2h:'داخاز بکە',s2p:'ب ئێک کلیک ل واتسئاپی بۆ مە دهێتە فرێکرن.',
  s3h:'دگەهیتە دەستێ تە',s3p:'ڕاستەوخۆ دگەهیتە دەرگەهێ مالا تە د عێراق و کوردستانێ دا.',
  ab:'دەربارەی مە',abh:'ڕەفاهیەت، ل دەرگەهێ مالا تە',
  abp:'ZAHA Perfume & Care د ساڵا ٢٠٢٤ دا هاتیە دامەزراندن. فرۆشگەهەکا ئۆنلاینا گولاڤێن ب کوالیتیا بلند، و دیاریێن جوان پێشکێش دکەت، ب کرینەکا ساناهی و خۆش.',
  f1:'کوالیتیا بلند',f1s:'بتنێ تشتێ ورجینال دێ بینی .',
  f2:'خزمەتگوزاریا تایبەت',f2s:'هاریکاریا کەسی ل سەر واتسئاپ.',
  f3:'گەهاندن د عێراق و کوردستانێ دا',f3s:'گەهاندنەکا بلەز و ب ساناهی بۆ دەرگەهێ مالا تە.',
  ct:'پەیوەندی',cth:'بێهنا خۆیا تایبەت ببینە',ctp:'نامەکێ بۆ مە فرێکە و ئەم دێ هاریکاریا تە کەین دا تو هەلبژێری.',cwa:'چات ل سەر واتسئاپ'
 };
 var langBtn=document.getElementById('langBtn'),metaD=document.querySelector('meta[name=description]'),metaEn=metaD?metaD.content:'';
 function applyLang(){
  var h=document.documentElement;h.lang=lang==='ku'?'ku':'en';h.dir=lang==='ku'?'rtl':'ltr';
  document.querySelectorAll('[data-t]').forEach(function(e){
   if(e.dataset.en==null)e.dataset.en=e.innerHTML;
   e.innerHTML=(lang==='ku'&&KU[e.dataset.t])?KU[e.dataset.t]:e.dataset.en;
  });
  qi.placeholder=K('Search perfumes…',' ل گولاڤا خوا تایبەت بگەرە …');
  qi.setAttribute('aria-label',K('Search perfumes','بگەرە ل گولاڤان'));
  document.title=K('ZAHA | Perfume & Care','ZAHA | گولاڤ و چاودێری');
  if(metaD)metaD.content=K(metaEn,'ZAHA Perfume & Care: گولاڤێن ب کوالیتیا بلند د هەمی عێراق و هەرێما کوردستانێ دا دگەهنە دەرگەهێ مالا تە.');
  langBtn.textContent=lang==='ku'?'EN':'کوردی';
  U=mkU();
  if(loaded)render();
  if(dt.classList.contains('on')&&curP)renderDetail();
  if(ct.classList.contains('on'))renderCart();
 }
 langBtn.onclick=function(){lang=lang==='ku'?'en':'ku';try{localStorage.setItem('zaha_lang',lang)}catch(e){}applyLang()};
 applyLang();

 /* stagger reveal */
 document.querySelectorAll('.rv').forEach(function(e){var i=Array.prototype.indexOf.call(e.parentNode.children,e);e.style.transitionDelay=(Math.min(i,5)*90)+'ms'});
 /* gold dust in hero (fewer particles on phones) */
 var hero=document.querySelector('.hero');
 if(hero&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
  var d=mk('div','dust'),N=matchMedia('(max-width:700px)').matches?8:14;
  for(var k=0;k<N;k++){var i=mk('i'),z=2+Math.random()*4;
   i.style.cssText='left:'+(Math.random()*100)+'%;width:'+z+'px;height:'+z+'px;--dx:'+((Math.random()-.5)*120)+'px;animation-duration:'+(9+Math.random()*10)+'s;animation-delay:-'+(Math.random()*16)+'s';d.appendChild(i)}
  hero.insertBefore(d,hero.firstChild);
 }
 /* scroll: progress bar + header (cheap: 1 transform + 1 class) */
 var prog=document.getElementById('prog'),hd=document.querySelector('header'),tick=false,sc=false;
 function onScroll(){
  var y=window.scrollY,m=document.documentElement.scrollHeight-innerHeight;
  prog.style.transform='scaleX('+(m>0?y/m:0)+')';
  var s=y>30;if(s!==sc){sc=s;hd.classList.toggle('sc',s)}
  tick=false;
 }
 window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});
 onScroll();
 var io=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
 document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
})();
