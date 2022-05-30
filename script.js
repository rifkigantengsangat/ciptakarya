const nav = document.querySelector('.list-item');
const menu = document.querySelector('.menu-btn');
const exit = document.querySelector('.exit-btn');


menu.addEventListener("click",()=>{
  nav.classList.add("active")
  menu.classList.add("hide")
})
exit.addEventListener("click",()=>{
  nav.classList.remove("active")
  menu.classList.remove("hide")
  
})
const loadTl = gsap.timeline({ defaults: { opacity: 0, ease: 'ease-in', duration: 1 } });
                                      
window.addEventListener('DOMContentLoaded', () => {
  
  loadTl.add(headerLoadAnimation(), '<0');
  aboutAnimation();
  
});
function headerLoadAnimation() {
    const tl = gsap.timeline({ defaults: { opacity: 0, ease: 'ease-in', duration: 1 }});
    tl.from('.logo', { x: -40 }, '<1')
          .from('.item', { y: -20, stagger: .2 }, '<');
    return tl;
}

gsap.from(".text-left", {duration: 2, x: -300, opacity: 0});
gsap.from(".home-container", {duration: 2, x:-100 , opacity: 0})

AOS.init();



