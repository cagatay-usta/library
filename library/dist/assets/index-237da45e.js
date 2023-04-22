(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const d=[{title:"Street Coder",author:"Sedat Kapanoglu",pages:"314",read:"Not read",id:0},{title:"Code: The Hidden Language of Computer Hardware and Software",author:"Charles Petzold",pages:"393",read:"Read",id:1},{title:"Deep Work",author:"Cal Newport",pages:"304",read:"Read",id:2},{title:"Clean Code",author:"Robert Cecil Martin",pages:"464",read:"Not read",id:3}];class f{constructor(r,a,s,t){this.title=r,this.author=a,this.pages=s,this.read=t,this.id=d.length?+d[d.length-1].id+1:0,d.push(this)}}function m(e){const r=document.createElement("template");return r.innerHTML=e.trim(),r.content.firstElementChild}function c(e){return m(`
<div
        data-number="${e.id}"
        class="bg-support dark:bg-neutral dark:text-support p-6 shadow-xl rounded-lg h-full flex flex-col justify-between "
      >
        <div class="flex flex-col w-full h-full gap-2">
          <p class="font-bold text-3xl ">
            ${e.title}
          </p>
          <p class="text-xl">by ${e.author}</p>
          <p class="mt-auto">Pages: ${e.pages}</p>
          <p class="read">${e.read}</p>

        </div>

        <div class="my-3 flex gap-4 justify-around">
          <span class="material-symbols-rounded big text-neutral dark:text-support readButton">
            check_circle
          </span>
          <span class="material-symbols-rounded big text-brand delete">
            delete
          </span>
        </div>
      </div>

`)}const i=document.querySelector("#add"),g=document.querySelector("#darkMode"),u=document.querySelector("#read"),p=document.querySelector(".form-card"),h=new Audio("lightSwitch.wav");let l="Not read";function y(){const e=document.querySelector("#title"),r=document.querySelector("#author"),a=document.querySelector("#pages"),s=l;if(e.value&&r.value&&a.value){const t=new f(e.value,r.value,a.value,s);document.getElementById("main").appendChild(c(t)),l="Not read",e.value="",r.value="",a.value="",u.classList.remove("clicked"),p.classList.toggle("closed"),i.classList.toggle("clicked")}}function v(e){e.forEach(r=>{document.getElementById("main").appendChild(c(r))})}v(d);document.addEventListener("click",e=>{if(e.preventDefault(),e.target.matches(".delete")){const r=e.target.parentNode.parentNode,a=d.filter(t=>t.id===+r.dataset.number),s=d.indexOf(a[0]);s!=-1&&d.splice(s,1),r.remove()}else if(e.target.matches("#add"))i.classList.toggle("clicked"),p.classList.toggle("closed");else if(e.target.matches("#read"))u.classList.toggle("clicked"),l=l==="Not read"?"Read":"Not read";else if(e.target.matches("#addLibrary"))y();else if(e.target.matches(".readButton")){const r=e.target.parentNode.parentNode,a=e.target.parentNode.parentNode.firstElementChild.lastElementChild,s=d.filter(o=>o.id===+r.dataset.number),t=d.indexOf(s[0]);t!=-1&&(d[t].read=d[t].read==="Not read"?"Read":"Not read",a.innerHTML=d[t].read,a.classList.add("new-text"),setTimeout(()=>a.classList.remove("new-text"),1e3))}else e.target.matches("#darkMode")&&(document.documentElement.classList.toggle("dark"),g.classList.toggle("clicked"),h.play())});
