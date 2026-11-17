// Generate the galaxy stars.
const sky=document.getElementById("sky");
for(let i=0;i<90;i++){
  const star=document.createElement("i");star.className="star";
  const size=1+Math.random()*2;star.style.width=size+"px";star.style.height=size+"px";
  star.style.left=Math.random()*100+"%";star.style.top=Math.random()*100+"%";
  star.style.animationDelay=Math.random()*4+"s";
  star.style.animationDuration=(2.5+Math.random()*3)+"s";sky.appendChild(star);
}

// Add a short shower of purple sparkles.
function sparkle(){
  const symbols=["✦","✧","·","♡"],colors=["#e7d9ff","#f1c6e2","#f3dfb7","#ffffff"];
  for(let i=0;i<34;i++){
    const el=document.createElement("span");el.className="sparkle";
    el.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left=Math.random()*100+"vw";
    el.style.color=colors[Math.floor(Math.random()*colors.length)];
    el.style.fontSize=(10+Math.random()*12)+"px";
    el.style.animationDuration=(3+Math.random()*3)+"s";
    el.style.animationDelay=Math.random()*.6+"s";
    document.body.appendChild(el);setTimeout(()=>el.remove(),7000);
  }
}

document.getElementById("begin").addEventListener("click",()=>{
  document.getElementById("wish").scrollIntoView({behavior:"smooth",block:"center"});
  sparkle();
});

const secretButton=document.getElementById("secretBtn");
const secretMessage=document.getElementById("secret");
secretButton.addEventListener("click",()=>{
  const open=secretMessage.classList.toggle("show");
  secretButton.textContent=open?"Close the little note ×":"A Tiny Note, Just For You ♡";
  if(open)sparkle();
});
