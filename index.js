import{a as u,S as g,b as p,i as a}from"./assets/vendor-DsRbAYL4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const f="49318761-deb5d950ade63202697546ac6",m="https://pixabay.com/api/";async function y(o){try{const e=await u.get(m,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,t:new Date().getTime()}});return console.log(e.data),e.data.hits}catch(e){return console.error("Error fetching images:",e),[]}}const c=document.querySelector(".gallery");function h(o){return o.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
        </a>
        <div class="info">
          <p><strong>Likes:</strong> ${e.likes}</p>
          <p><strong>Views:</strong> ${e.views}</p>
          <p><strong>Comments:</strong> ${e.comments}</p>
          <p><strong>Downloads:</strong> ${e.downloads}</p>
        </div>
      </li>
    `).join("")}function w(o){c.innerHTML="",c.insertAdjacentHTML("beforeend",h(o)),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const L=document.querySelector(".form"),i=document.querySelector("#loader"),d=new p({color:"red",lines:12,width:8,radius:14});L.addEventListener("submit",async o=>{o.preventDefault();const e=o.target.elements["search-text"].value.trim();if(!e){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}i.classList.remove("hidden"),d.spin(i);try{const s=await y(e);s.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):w(s)}catch{a.error({title:"Error",message:"Something went wrong. Try again!",position:"topRight"})}finally{d.stop(),i.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
