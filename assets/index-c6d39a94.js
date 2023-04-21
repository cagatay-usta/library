(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function d(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=d(t);fetch(t.href,a)}})();const o=[{title:"Street Coder",author:"Sedat Kapanoglu",pages:"314",read:"Not read",id:0},{title:"Code: The Hidden Language of Computer Hardware and Software",author:"Charles Petzold",pages:"393",read:"Read",id:1},{title:"Deep Work",author:"Cal Newport",pages:"304",read:"Read",id:2},{title:"Clean Code",author:"Robert Cecil Martin",pages:"464",read:"Not read",id:3}];class f{constructor(r,d,s,t){this.title=r,this.author=d,this.pages=s,this.read=t,this.id=o.length?+o[o.length-1].id+1:0,o.push(this)}}function m(e){const r=document.createElement("template");return r.innerHTML=e.trim(),r.content.firstElementChild}function c(e){return m(`
<div
        data-number="${e.id}"
        class="bg-support dark:bg-neutral dark:text-support p-6 shadow-xl rounded-lg h-full flex flex-col justify-between"
      >
        <div class="flex flex-col w-full h-full">
          <p class="font-bold text-2xl">
            ${e.title}
          </p>
          <p class="text-lg">by ${e.author}</p>
          <p class="mt-auto">Pages: ${e.pages}</p>
          <p class="read">${e.read}</p>

        </div>

        <div class="my-4 flex gap-4 justify-around">
          <span class="material-symbols-rounded big text-neutral dark:text-support readButton">
            check_circle
          </span>
          <span class="material-symbols-rounded big text-brand delete">
            delete
          </span>
        </div>
      </div>

`)}const i=document.querySelector("#add"),g=document.querySelector("#darkMode"),u=document.querySelector("#read"),p=document.querySelector(".form-card");let l="Not read";function h(){const e=document.querySelector("#title"),r=document.querySelector("#author"),d=document.querySelector("#pages"),s=l;if(e.value&&r.value&&d.value){const t=new f(e.value,r.value,d.value,s);document.getElementById("main").appendChild(c(t)),l="Not read",e.value="",r.value="",d.value="",u.classList.remove("clicked"),p.classList.toggle("closed"),i.classList.toggle("clicked")}}function y(e){e.forEach(r=>{document.getElementById("main").appendChild(c(r))})}y(o);document.addEventListener("click",e=>{if(e.preventDefault(),e.target.matches(".delete")){const r=e.target.parentNode.parentNode,d=o.filter(t=>t.id===+r.dataset.number),s=o.indexOf(d[0]);s!=-1&&o.splice(s,1),r.remove()}else if(e.target.matches("#add"))i.classList.toggle("clicked"),p.classList.toggle("closed");else if(e.target.matches("#read"))u.classList.toggle("clicked"),l=l==="Not read"?"Read":"Not read";else if(e.target.matches("#addLibrary"))h();else if(e.target.matches(".readButton")){const r=e.target.parentNode.parentNode,d=e.target.parentNode.parentNode.firstElementChild.lastElementChild,s=o.filter(a=>a.id===+r.dataset.number),t=o.indexOf(s[0]);t!=-1&&(o[t].read=o[t].read==="Not read"?"Read":"Not read",d.innerHTML=o[t].read)}else e.target.matches("#darkMode")&&(document.documentElement.classList.toggle("dark"),g.classList.toggle("clicked"))});
