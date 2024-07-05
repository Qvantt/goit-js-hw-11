import{S as a,i as c}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l="44792549-8b3a4a2cfb17648b3cdad98bf",u="https://pixabay.com/api/";async function d(t){return(await(await fetch(`${u}?key=${l}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`)).json()).hits}function f(){const t=document.querySelector(".gallery");t.innerHTML=""}function p(t){const o=document.querySelector(".gallery"),n=t.map(e=>`
    <a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy"/>
      <div class="info">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </a>
  `).join("");o.insertAdjacentHTML("beforeend",n),new a(".gallery a").refresh()}function m(){c.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function y(){document.querySelector(".loader").classList.add("visible")}function g(){document.querySelector(".loader").classList.remove("visible")}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#search-form");t.addEventListener("submit",async o=>{o.preventDefault();const s=t.querySelector('input[name="searchQuery"]').value.trim();if(!s){iziToast.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}f(),y();try{const e=await d(s);e.length===0?m():p(e)}catch{iziToast.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{g()}})});
//# sourceMappingURL=commonHelpers.js.map
