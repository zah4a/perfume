/* ZAHA — click sounds, sparkle, spotlight, photo backdrop (no audio files needed) */
(function(){
 var ctx,mg,on=true,lastH=0,rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
 try{on=localStorage.getItem('zaha-snd')!=='0'}catch(e){}
 function init(){
  if(ctx){if(ctx.state==='suspended')ctx.resume();return true}
  var A=window.AudioContext||window.webkitAudioContext;if(!A)return false;
  ctx=new A();var comp=ctx.createDynamicsCompressor(),d=ctx.createDelay(),fb=ctx.createGain(),wet=ctx.createGain();
  mg=ctx.createGain();mg.gain.value=.7;d.delayTime.value=.17;fb.gain.value=.32;wet.gain.value=.3;
  mg.connect(comp);mg.connect(d);d.connect(fb);fb.connect(d);d.connect(wet);wet.connect(comp);comp.connect(ctx.destination);return true}
 function n(f,t,dur,v){var o=ctx.createOscillator(),g=ctx.createGain(),s=ctx.currentTime+t;o.type='sine';o.frequency.value=f;
  g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(v,s+.006);g.gain.exponentialRampToValueAtTime(.0001,s+dur);
  o.connect(g);g.connect(mg);o.start(s);o.stop(s+dur+.05)}
 function bell(f,t,d,v){n(f,t,d,v);n(f*2.76,t,d*.45,v*.35);n(f*5.4,t,d*.2,v*.12)}
 function seq(a,gap,d,v){a.forEach(function(f,i){bell(f,i*gap,d,v)})}
 var S={
  tap:function(){bell(1175,0,.45,.16);bell(1760,.04,.35,.08)},
  hover:function(){n(2349,0,.07,.022)},
  open:function(){seq([523,659,784,1047],.06,.7,.13)},
  close:function(){seq([784,587,440],.07,.5,.1)},
  tick:function(){bell(1568,0,.3,.12)},
  add:function(){seq([880,1175,1568,2093],.055,.6,.14)},
  remove:function(){seq([660,440],.06,.4,.1)},
  order:function(){seq([523,659,784,1047,1319],.08,1.1,.15);bell(262,0,1.4,.12)},
  on:function(){seq([1047,1319,1568,2093],.07,.8,.12)}
 };
 function play(k){if(!on||!init())return;try{S[k]()}catch(e){}}
 function burst(x,y){
  if(rm)return;var r=document.createElement('i');r.className='rip';r.style.left=x+'px';r.style.top=y+'px';
  for(var k=0;k<8;k++){var p=document.createElement('b'),a=k/8*6.283+Math.random()*.4,d=34+Math.random()*30;
   p.style.setProperty('--x',Math.cos(a)*d+'px');p.style.setProperty('--y',Math.sin(a)*d+'px');r.appendChild(p)}
  document.body.appendChild(r);setTimeout(function(){r.remove()},800)}
 var snd=document.getElementById('snd');
 function sync(){if(snd){snd.classList.toggle('off',!on);snd.setAttribute('aria-pressed',on)}}
 sync();
 document.addEventListener('click',function(e){
  var t=e.target;if(!t||!t.closest)return;burst(e.clientX,e.clientY);
  if(t.closest('#snd')){on=!on;try{localStorage.setItem('zaha-snd',on?'1':'0')}catch(x){}sync();if(on)play('on');return}
  if(t.closest('.ct-wa')||t.closest('.order:not(.off)'))return play('order');
  if(t.closest('.addc'))return play('add');
  if(t.closest('.dt-x')||t.id==='dt'||t.id==='ct')return play('close');
  if(t.closest('.rm'))return play('remove');
  if(t.closest('.qt button,.thumbs button'))return play('tick');
  if(t.closest('.pc,#cartBtn'))return play('open');
  if(t.closest('a,button,.pill,.btn,select'))play('tap');
 },true);
 document.addEventListener('keydown',function(e){
  if(e.key==='Escape'&&document.querySelector('#dt.on,#ct.on'))play('close')});
 var q=document.getElementById('q'),lt=0;
 if(q)q.addEventListener('input',function(){var now=Date.now();if(now-lt>70){lt=now;play('tick')}});
 if(fine){
  document.addEventListener('pointerover',function(e){
   if(!ctx||ctx.state!=='running'||!e.target.closest)return;
   var h=e.target.closest('.pc,.btn,.pill,.cartbtn,.addc,.snd');if(!h||h.contains(e.relatedTarget))return;
   var now=Date.now();if(now-lastH>90){lastH=now;play('hover')}});
  var qq=false,px=0,py=0;
  document.addEventListener('pointermove',function(e){px=e.clientX;py=e.clientY;if(qq)return;qq=true;requestAnimationFrame(function(){
   document.documentElement.style.setProperty('--cx',px+'px');document.documentElement.style.setProperty('--cy',py+'px');qq=false})},{passive:true});
 }
 /* blurred photo backdrop behind each product photo (fills the empty sides nicely) */
 var shop=document.getElementById('shop');
 function tag(){if(!shop)return;shop.querySelectorAll('.pimg:not([data-b])').forEach(function(b){var i=b.querySelector('img');if(!i)return;
  b.setAttribute('data-b','1');b.style.setProperty('--bgimg','url("'+i.getAttribute('src')+'")')})}
 if(shop){new MutationObserver(tag).observe(shop,{childList:true,subtree:true});tag()}
})();
