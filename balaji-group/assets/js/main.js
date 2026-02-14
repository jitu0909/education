document.getElementById("year").textContent = new Date().getFullYear();
var links=document.querySelectorAll(".navbar .nav-link");var p=location.pathname.split("/").pop()||"index.html";links.forEach(function(a){var h=a.getAttribute("href");if(h===p){a.classList.add("active")}});
var nav=document.querySelector(".navbar");function s(){if(window.scrollY>10){nav.classList.add("scrolled")}else{nav.classList.remove("scrolled")}}window.addEventListener("scroll",s);s();
var obs=new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(e.isIntersecting){
      var t=e.target;
      t.classList.add("in");
      // Hero word-by-word animation
      var words=t.querySelectorAll(".display-hero .word");
      if(words.length){
        words.forEach(function(w,i){
          setTimeout(function(){w.classList.add("show")}, i*120);
        });
      }
      // Stagger children inside revealed section
      var sel=".product-card, .gallery-item, .card, .card-luxe, .card-feature, .why-item, .timeline .step, .masonry-item, .row > [class*='col-']";
      var kids=t.querySelectorAll(sel);
      if(kids.length){
        kids.forEach(function(k, i){
          if(!k.classList.contains("reveal")){k.classList.add("reveal")}
          if(!k.style.transitionDelay){k.style.transitionDelay=(i*0.1).toFixed(1)+"s"}
          // trigger reveal shortly after
          setTimeout(function(){k.classList.add("in")}, 10);
        });
      }
      obs.unobserve(t);
    }
  })
},{threshold:0.12,rootMargin:"0px 0px -10% 0px"});
document.querySelectorAll(".reveal").forEach(function(el){obs.observe(el)});
var cObs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var v=e.target;var t=parseInt(v.getAttribute("data-target"),10)||0;var d=1200;var st=null;function step(ts){if(!st)st=ts;var p=Math.min((ts-st)/d,1);var curr=Math.floor(p*t);v.textContent=curr+(t>=100?"+":"");if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step);cObs.unobserve(v)}})},{threshold:0.3});document.querySelectorAll(".value[data-target]").forEach(function(el){cObs.observe(el)});
var back=document.getElementById("backTop");if(back){window.addEventListener("scroll",function(){if(window.scrollY>300){back.classList.add("show")}else{back.classList.remove("show")}});back.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})}
var lb=document.getElementById("lightbox");if(lb){var img=lb.querySelector("img");document.querySelectorAll(".masonry-item").forEach(function(it){it.addEventListener("click",function(){var i=it.querySelector("img");img.src=i.src;img.alt=it.getAttribute("data-lightbox")||"";lb.classList.add("open")})});lb.addEventListener("click",function(){lb.classList.remove("open")});document.addEventListener("keydown",function(e){if(e.key==="Escape"){lb.classList.remove("open")}})}
var loader=document.getElementById("page-loader");if(loader){window.addEventListener("load",function(){setTimeout(function(){loader.classList.add("hide")},200)})}
var tag=document.getElementById("tagline");if(tag&&tag.hasAttribute("data-rotate")){var lines=["Where Stone Meets Perfection","Crafting Luxury Spaces","Premium Stone, Timeless Elegance","From Quarry to Quality","Elegance Built in Stone"];var i=0;setInterval(function(){i=(i+1)%lines.length;tag.style.opacity=0;setTimeout(function(){tag.textContent=lines[i];tag.style.opacity=1},250)},3500)}

var hero=document.querySelector(".hero");var vid=hero?hero.querySelector(".hero-video"):null;var ticking=false;function onScroll(){if(!hero||!vid)return;if(!ticking){window.requestAnimationFrame(function(){var r=hero.getBoundingClientRect();var y=Math.max(0,-r.top);var h=Math.max(1,Math.min(window.innerHeight,hero.offsetHeight||window.innerHeight));var p=Math.min(Math.max(y/h,0),1);var t=y*0.2;var sc=1+0.08*p;vid.style.transform="translateY("+t+"px) scale("+sc+")";ticking=false})}ticking=true}window.addEventListener("scroll",onScroll,{passive:true});onScroll();

function pickPlaceholder(alt){
  var a=(alt||"").toLowerCase();
  if(a.includes("marble"))return "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200&auto=format&fit=crop";
  if(a.includes("granite"))return "https://images.unsplash.com/photo-1562254490-53f2f7dc35cb?q=80&w=1200&auto=format&fit=crop";
  if(a.includes("tile")||a.includes("tiles"))return "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1200&auto=format&fit=crop";
  if(a.includes("bath")||a.includes("toilet")||a.includes("faucet"))return "https://images.unsplash.com/photo-1584622906489-1cdb2d326f48?q=80&w=1200&auto=format&fit=crop";
  return "https://images.unsplash.com/photo-1618221350008-1f6c6a95f3cf?q=80&w=1200&auto=format&fit=crop";
}
var missingImgs=[];
document.querySelectorAll("img").forEach(function(im){
  im.addEventListener("error",function(){
    if(im.getAttribute("data-fallback")==="1")return;
    im.setAttribute("data-fallback","1");
    var c=im.closest(".product-card, .gallery-item, .masonry-item");
    if(c){
      c.classList.add("gradient-ph");
      c.removeAttribute("data-placeholder");
      if(!c.querySelector(".ph-content")){
        var alt=(im.alt||"").toLowerCase();
        var txt="Premium Collection";
        var ico="gem";
        if(alt.includes("marble")){txt="Premium Marble Collection";ico="gem"}
        else if(alt.includes("granite")){txt="High Quality Granite";ico="boxes"}
        else if(alt.includes("tile")||alt.includes("tiles")){txt="Premium Tiles Collection";ico="bricks"}
        else if(alt.includes("bath")||alt.includes("toilet")||alt.includes("faucet")){txt="Luxury Bathroom Setup";ico="droplet-half"}
        var wrap=document.createElement("div");
        wrap.className="ph-content";
        var icon=document.createElement("i");
        icon.className="bi bi-"+ico+" ph-icon";
        var title=document.createElement("div");
        title.className="ph-title";
        title.textContent=txt;
        wrap.appendChild(icon);
        wrap.appendChild(title);
        c.appendChild(wrap);
      }
    }
    im.style.display="none";
    missingImgs.push({src:im.currentSrc||im.src,alt:im.alt||"",page:location.pathname});
  },{once:false});
});

function renderImgDebug(){
  if(!/debug=img/.test(location.search)&&location.hash!=="#img-debug")return;
  var box=document.createElement("div");
  box.className="img-debug";
  var h=document.createElement("div");
  h.className="img-debug-head";
  h.textContent="Missing Images ("+missingImgs.length+")";
  var list=document.createElement("div");
  list.className="img-debug-list";
  missingImgs.forEach(function(it){
    var row=document.createElement("div");
    row.className="img-debug-row";
    row.textContent=(it.alt?it.alt+" – ":"")+it.src;
    list.appendChild(row);
  });
  box.appendChild(h);box.appendChild(list);
  document.body.appendChild(box);
}
window.addEventListener("load",function(){setTimeout(renderImgDebug,600)});
