/* ZAHA — click sounds + sparkle + spotlight (no audio files needed) */
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
 var S={
  tap:function(){bell(1175,0,.45,.16);bell(1760,.04,.35,.08)},
  hover:function(){n(2349,0,.07,.022)},
  open:function(){[523,659,784,1047].forEach(function(f,i){bell(f,i*.06,.7,.13)})},
  close:function(){[784,587,440].forEach(function(f,i){bell(f,i*.07,.5,.1)})},
  thumb:function(){bell(1568,0,.3,.12)},
  order:function(){[523,659,784,1047,1319].forEach(function(f,i){bell(f,i*.08,1.1,.15)});bell(262,0,1.4,.12)},
  on:function(){[1047,1319,1568,2093].forEach(function(f,i){bell(f,i*.07,.8,.12)})}
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
  if(t.closest('.order:not(.off)'))return play('order');
  if(t.closest('.dt-x')||t.id==='dt')return play('close');
  if(t.closest('.pc'))return play('open');
  if(t.closest('.thumbs button'))return play('thumb');
  if(t.closest('a,button,.pill,.btn'))play('tap');
 },true);
 document.addEventListener('keydown',function(e){var dt=document.getElementById('dt');if(e.key==='Escape'&&dt&&dt.classList.contains('on'))play('close')});
 if(fine){
  document.addEventListener('pointerover',function(e){
   if(!ctx||ctx.state!=='running'||!e.target.closest)return;
   var h=e.target.closest('.pc,.btn,.pill,.fab,.snd');if(!h||h.contains(e.relatedTarget))return;
   var now=Date.now();if(now-lastH>90){lastH=now;play('hover')}});
  var q=false,px=0,py=0;
  document.addEventListener('pointermove',function(e){px=e.clientX;py=e.clientY;if(q)return;q=true;requestAnimationFrame(function(){
   document.documentElement.style.setProperty('--cx',px+'px');document.documentElement.style.setProperty('--cy',py+'px');q=false})},{passive:true});
 }
})();
