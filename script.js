const pages=[...document.querySelectorAll('.page')],nav=[...document.querySelectorAll('nav button')],page=document.querySelector('#page');let timerStarted=false;function go(n){pages.forEach(x=>x.classList.toggle('active',+x.dataset.p===n));nav.forEach(x=>x.classList.toggle('active',+x.dataset.go===n));page.textContent=String(n).padStart(2,'0')+' / 06';pages[n-1].scrollTop=0}document.querySelectorAll('[data-go]').forEach(x=>x.onclick=()=>go(+x.dataset.go));const reveal=document.querySelector('#reveal'),details=document.querySelector('#details');reveal.onclick=()=>{details.style.maxHeight='520px';details.style.opacity=1;document.querySelector('#hint').textContent='The auspicious wedding time is revealed ✨';reveal.textContent='♥ Auspicious Muhurtham ♥';if(!timerStarted){timerStarted=true;const target=new Date('2026-10-29T19:29:00+05:30').getTime();setInterval(()=>{let x=Math.max(0,target-Date.now());d.textContent=String(Math.floor(x/86400000)).padStart(2,'0');h.textContent=String(Math.floor(x/3600000)%24).padStart(2,'0');m.textContent=String(Math.floor(x/60000)%60).padStart(2,'0');s.textContent=String(Math.floor(x/1000)%60).padStart(2,'0')},1000)}};const petals=document.querySelector('#petals');setInterval(()=>{let p=document.createElement('i');p.className='petal';p.style.left=Math.random()*100+'vw';p.style.setProperty('--x',(Math.random()*180-90)+'px');p.style.animationDuration=7+Math.random()*7+'s';petals.appendChild(p);setTimeout(()=>p.remove(),15000)},650);go(1);

let musicOn=false;
const audio=document.getElementById('weddingMusic');
const musicBtn=document.getElementById('musicBtn');
const musicLabel=document.getElementById('musicLabel');
audio.volume=0.125;
audio.loop=true;
musicBtn.addEventListener('click',()=>{
  if(!musicOn){
    audio.play().then(()=>{
      musicOn=true;
      musicBtn.classList.add('on');
      musicBtn.setAttribute('aria-pressed','true');
      musicBtn.textContent='❚❚';
      musicLabel.textContent='Music ON';
    }).catch(()=>{musicLabel.textContent='Tap Again';});
  }else{
    audio.pause(); musicOn=false;
    musicBtn.classList.remove('on');
    musicBtn.setAttribute('aria-pressed','false');
    musicBtn.textContent='♫';
    musicLabel.textContent='Music OFF';
  }
});
