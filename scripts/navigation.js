var n=document.querySelector(".navigation"),a=document.querySelector(".navigation__toggle");a.addEventListener("click",()=>{n.classList.contains("navigation--closed")?(n.classList.remove("navigation--closed"),n.classList.add("navigation--opened")):(n.classList.add("navigation--closed"),n.classList.remove("navigation--opened"))});