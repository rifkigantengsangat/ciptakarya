let product = [

    {  'nama': 'MOONIE',
        'image':'.././img/moonie-1.png',
        'ukuran':'1800 x 830 x 830',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20 <br>-Kaki Stainless<br>-Coil spring'    
},{
    'nama':'KENZI',
    'image':'.././img/kenji-1.png',
    'ukuran':'1950 x 865 x 870',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20<br>-Wood Leg 15cm<br>-Coil spring'

},
{
    'nama':'FLORY',
    'image':'.././img/flory-1.png',
    'ukuran':'2150 x 850 x 820',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20<br>-Wood Leg 15cm<br>-Coil spring'
},
{
    'nama':'JUNA',
    'image':'.././img/JUNA DEPAN.png',
    'ukuran':'1850 x 1070 x 800',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20<br>-Metal Leg 5cm<br>-Coil spring'
},
{
    'nama':'GABY',
    'image':'.././img/gaby-1.png',
    'ukuran':'1650 x 920 x 750mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20<br>-Wood Leg 20cm<br>-Coil spring'
},
{
    'nama':'SHEZA',
    'image':'.././img/sheza-1.png',
    'ukuran':'1360 x 770 x 850mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20<br>-Plastic Leg 5cm<br>-Coil spring'
},
{
    'nama':'EKY',
    'image':'.././img/eky-1.png',
    'ukuran':'1550 x 750 x 700mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20<br>-Plastic Leg 20cm<br>-Coil spring'
},
{
    'nama':'UZI',
    'image':'.././img/uzi-1.png',
    'ukuran':'1550 x 750 x 700mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20<br>-Plastic Leg 20cm<br>-Coil spring'
},
{
    'nama':'ONADIO',
    'image':'.././img/onadio-1.png',
    'ukuran':'1780 x 980 x 870mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20<br>-Plastic Leg 20cm<br>-Coil spring'
},
{
    'nama':'BARA',
    'image':'.././img/coca-1.png',
    'ukuran':'1780 x 980 x 870mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Busa Density 20<br>-Plastic Leg 20cm<br>-Coil spring'
},

]


const container = document.querySelector('.container-prod-1')

product.map((x)=>{
 
    let prod = `
   
   

    <div class="card">
    <div class="card-img">
        <img class='image-1' src='${x.image} 'alt="image">
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

