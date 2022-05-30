let product = [

    {  'nama': 'GIZEL',
        'image':'.././img/s2-gizzel.png',
        'ukuran':'1800 x 830 x 830',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Steel Webbing<br>-Busa Density 20 <br>-Stainless Leg 15cm'    
},{
    'nama':'BYANCA',
    'image':'.././img/s2-byanca.png',
    'ukuran':'1950 x 865 x 870',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Soft foam 20<br>-Wood leg 15cm'

},
{
    'nama':'BORIS',
    'image':'.././img/s2-boris.png',
    'ukuran':'2135 x 840 x 825',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Knock down<br>-Steel webbing<br>-Busa Density 20 20<br>-Wood leg 15cm'
},
{
    'nama':'VACKHAEL',
    'image':'.././img/s2-vackhael.png',
    'ukuran':'1850 x 1070 x 800',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Knock down<br>-Steel webbing<br>-Busa Density 20<br>-Wood leg 15cm'
},
{
    'nama':'LEGO',
    'image':'.././img/s2-lego.png',
    'ukuran':'1650 x 920 x 750mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Stell webbing<br>-Knock down<br>-Busa Density 20<br>-Wood leg 15cm'
},
{
    'nama':'RAISA',
    'image':'.././img/s2-raisa.png',
    'ukuran':'1360 x 770 x 850mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Soft foam<br>-Wood leg 15cm'
},
{
    'nama':'ISYANA',
    'image':'.././img/s2-isyana.png',
    'ukuran':'1550 x 750 x 700mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Soft foam 20<br>-Wood leg 15cm'
},
{
    'nama':'ASHLEE',
    'image':'.././img/s2-ashlee.png',
    'ukuran':'1550 x 750 x 700mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Soft foam<br>-Wood leg 15cm'
},
{
    'nama':'LENNON',
    'image':'.././img/s2-lennon.png',
    'ukuran':'1780 x 980 x 870mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Pocket spring<br>-Busa Density 20<br>-Wood leg 15cm'
},
{
    'nama':'FELIX',
    'image':'.././img/s2-felix.png',
    'ukuran':'1780 x 980 x 870mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Soft foam<br>-Wood leg 15cm'
},

]


const container = document.querySelector('.container-prod-1')

product.map((x)=>{
 
    let prod = `
   
   

    <div class="card">
    <div class="card-img">
        <img class='image-1 image2' src='${x.image} 'alt="image">
        </div>
        <div class="card-title">
        <h1>${x.nama}</h1>
        <div class="card-dimensi">
         <h3><span class='span'>Dimensi</span><br>${x.ukuran}</h3>
         </div>
         <div class="card-spec">
         <h3><span class ='span'>Spesifikasi</span><br>${x.desc}</h3>
         </div>
         </div> 
     </div>   `
        container.insertAdjacentHTML('beforeend',prod)
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

