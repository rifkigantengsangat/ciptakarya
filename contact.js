const scriptURL = 'https://script.google.com/macros/s/AKfycbyCBnwPuqNHCT-Qg690ORDXlSTdrxx4hLXJBZKldbYrDGmItKonvIkTxeDy5Mat8xtF/exec'
const form = document.forms['submit-to-google-sheet']
const btnKirim = document.querySelector('.buttonBlue')
const loading = document.querySelector('.loading')
const alertku = document.querySelector('.contact-alert')

form.addEventListener('submit', e => {
  e.preventDefault()
  loading.classList.toggle('d-none')
  btnKirim.classList.toggle('d-none')
  
 
  

  fetch(scriptURL,
     { method: 'POST', body: new FormData(form)})
    .then(response => 
      {btnKirim.classList.toggle('d-none');
      loading.classList.toggle('d-none');
      alertku.classList.toggle('d-none');
      form.reset();
        console.log('Success!', response)})
    .catch(error => console.error('Error!', error.message))

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