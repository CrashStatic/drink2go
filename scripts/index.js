var t=document.querySelector(".navigation"),c=document.querySelector(".navigation__toggle");c.addEventListener("click",()=>{t.classList.contains("navigation--closed")?(t.classList.remove("navigation--closed"),t.classList.add("navigation--opened")):(t.classList.add("navigation--closed"),t.classList.remove("navigation--opened"))});var r=document.querySelector(".slider__list"),n=Array.from(r.querySelectorAll(".slider__item")),l=document.querySelector(".slider__button--prev"),o=document.querySelector(".slider__button--next"),e=0,s=()=>{n.forEach((i,a)=>{a===e?i.style.display="flex":i.style.display="none"})},d=()=>{e>0?e--:(l.ariaDisabled=!0,e=0),s(e)},u=()=>{e<n.length-1?e++:(o.ariaDisabled=!0,e=n.length-1),s(e)};l.addEventListener("click",d);o.addEventListener("click",u);s(e);
