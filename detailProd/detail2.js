let product = [

    {  'nama': 'PUFF  COCA',
        'image':'.././img/coca-1.png',
        'ukuran':'420 x 420 x 440mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20 <br>-Kaki Stainless'    
},{
    'nama':'PUFF  COLA',
    'image':'.././img/cola-1.png',
    'ukuran':'435 x 435 x 430mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20<br>-Kaki Solid'

},
{
    'nama':'PUFF OTOMAN ARON',
    'image':'.././img/otto-1.png',
    'ukuran':'600 x 500 x 420mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20<br>-Kaki Solid'
},
{
    'nama':'PUFF  LEA',
    'image':'.././img/lea.png',
    'ukuran':'400 x 400 x 430mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20<br>-Kaki Solid'
},
{
    'nama':'PUFF LEA PLUS',
    'image':'.././img/lea-2.png',
    'ukuran':'400 x 400 x 450mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20<br>-Kaki Solid'
},


]
const product_container = document.querySelector('.container-product')
product.map((m)=>{
   
    let prod =`
   
   

    <div class="card">
    <div class="card-img">
        <img class='image-1' src='${m.image} 'alt="image">
        </div>
        <div class="card-title">
        <h1>${m.nama}</h1>
         <h3><span class='span'>Dimensi</span><br>${m.ukuran}</h3>
         <h3><span class ='span'>Spesifikasi</span><br>${m.desc}</h3>
         </div> 
     </div>   `
     product_container.insertAdjacentHTML('beforeend',prod)
})  
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