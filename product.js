// let product =[{
//     "nama":" Sofabed Gaby Front",
//     "image":"./foto/Gaby_Front.jpg",
//     'detail':'lihat detail'
// },
// {
//     "nama": "Sofabed Gaby Reclined",
//     "image":"./foto/Gaby_Reclined.jpg",
//     'detail':'lihat detail'
// },
//    {"nama":"sofabed Gaby Side",
//     "image":"./foto/Sofabed Gaby_Side.jpg",
//     'detail':'lihat detail'  
// },
// {
//     "nama": "Sofabed Gaby Reclined",
//     "image":"./foto/Gaby_Reclined.jpg",
//     'detail':'lihat detail'
// },
//   {"nama": "Sofabed ",
//   "image":"./foto/Sofabed_Moonie_Front.jpg",
//   'detail':'lihat detail'
//   },
//   {"nama": "Sofabed ",
//   "image":"./foto/Sofabed_Moonie_Front.jpg",

//   },
//   {"nama": "Sofabed ",
//   "image":"./foto/Sofabed_Moonie_Reclined.jpg",
//   'detail':'lihat detail'
//   },
//   {
//       "nama": "Sofabed",
//       "image":"./foto/SofabedMoonie_Side.jpg"
//   }, {
//     "nama": "Sofabed",
//     "image":"./foto/SofabedMoonie_Side.jpg"
// },
// {
//   "nama": "Sofabed Gaby Reclined",
//   "image":"./foto/Gaby_Reclined.jpg"
// }
 
 
// ]
// let product_list = document.querySelector ('.container-prod')




// product.map((m)=>{
//     let prod = ` <div class="card">
//     <img class='image' src='${m.image} 'alt="image">
//     <h1>${m.nama}</h1>
//     <button class='button-1'>${m.detail}</button>
// </div>   `
//     product_list.insertAdjacentHTML('beforeend',prod)
// })
// const btn = document.querySelector('.button-1')
// btn.addEventListener('click', () =>{
//   window.location.href = 'index.html'
// })

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  
   
    pagination: {
      el: '.swiper-pagination',
    },
  
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });

  

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