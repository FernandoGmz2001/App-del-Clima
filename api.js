button = document.querySelector("#verMas")
card = document.querySelector("#card")
cardContent2 = document.querySelector(".card-content2")
cardContent3 = document.querySelector(".card-content3")
cardContent4 = document.querySelector(".card-content4")
button.addEventListener('click', function() {
    card.classList.toggle('toggle');
    
  });

button.addEventListener('click', function() {
    cardContent2.classList.toggle('show');
    cardContent3.classList.toggle('show');
  });
    
let Fecha = Math.floor(Date.now() / 1000)
// console.log(Fecha);

let message = "api-keypmgoawwwjjeuwiuaypj0nukw98dnqxyzstation-id139322t"
let Apiformat = message + Fecha
var hash = CryptoJS.HmacSHA256(Apiformat ,"wb0zbi95gnwskkl4uybcgli6iqgaair5");
var hashInBase64 = CryptoJS.enc.Hex.stringify(hash);
// console.log(hashInBase64);

let searchWeather = "https://api.weatherlink.com/v2/current/139322?api-key=pmgoawwwjjeuwiuaypj0nukw98dnqxyz&t=" + Fecha + "&api-signature=" + hashInBase64

fetch(searchWeather)
.then(response=> response.json())
.then(data => {
  this.displayWeather(data);
})

function displayWeather(data){

  const {temp_in} = data.temp_in;
  document.querySelector(".temperatura").innerText = temp_in;
  console.log(temp_in)
}

