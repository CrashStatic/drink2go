var r=document.querySelector(".slider__list"),l=Array.from(r.querySelectorAll(".slider__item")),t=document.querySelector(".slider__button--prev"),s=document.querySelector(".slider__button--next"),e=0;t.setAttribute("disabled",null);var n=()=>{l.forEach((i,d)=>{d===e?i.style.display="flex":i.style.display="none"})},o=()=>{e>1?(e--,s.removeAttribute("disabled")):(t.setAttribute("disabled",null),e=0),n(e)},u=()=>{e+1<l.length-1?(e++,t.removeAttribute("disabled")):(e=l.length-1,s.setAttribute("disabled",null)),n(e)};t.addEventListener("click",o);s.addEventListener("click",u);n(e);
