let product = [

    {  'nama': 'LENNON',
        'image':'.././img/L.-lenon.png',
        'ukuran':'2020 x 1380 x 880mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Pocket spring<br>-Soft Foam <br>-Wood Leg 15cm'    
},
{
    'nama':'CECILIA',
    'image':'.././img/sL-cecil.png',
    'ukuran':'2440 x 1630 x 860mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Soft Foam<br>-Metal Leg 15cm'
},
{
    'nama':'DARIEL',
    'image':'.././img/L-dariel.png',
    'ukuran':'1800 x 850 x 900mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Soft Foam<br>-Wood Leg 15cm'
},
{
    'nama':'BRUSSEL',
    'image':'.././img/L-brusel.png',
    'ukuran':'1940 x 1360 x 900mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Rubber Black Webbing<br>-Soft Foam<br>-Wood Leg 15cm'
},
{
    'nama':'XAVIER',
    'image':'.././img/L-xavier.png',
    'ukuran':'1420 x 1370 x 870mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Knock Down<br>-Rubber Black Webbing<br>-Soft Foam<br>-Wood Leg 15cm<br>'
},
{
    'nama':'LEONY',
    'image':'.././img/L-leony.png',
    'ukuran':'1350 x 1410 x 940mm',
        'desc':'-Rangka Full Kayu Jati Belanda<br>-Plywood 15mm<br>-Steel webbing<br>-Soft Foam<br>-Wood Leg 15cm'
}


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
