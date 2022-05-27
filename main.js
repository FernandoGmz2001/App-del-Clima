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
    cardContent4.classList.toggle('show');
});

  fetch("https://api.openweathermap.org/data/2.5/weather?lat=27.48&lon=-99.5105&units=metric&lang=sp&appid=75388a5617c4890016f8215a20d3ac3f")
  .then(response=> response.json())
  .then(data => {
    this.displayWeather(data);
  })

  // setInterval(displayWeather(), 1000);

  function displayWeather(data){
  const {temp} = data.main;
  const {description} = data.weather[0];
  const {lat} = data.coord;
  const {feels_like} = data.main;
  const {humidity} = data.main;
  const {temp_min} = data.main;
  const {temp_max} = data.main;
  const {speed} = data.wind;
  // console.log(temp)
  // console.log(description)
  const temperatura = Math.trunc(temp)
  document.querySelector(".temperatura").innerText = temperatura;
  document.querySelector(".descripcion").innerText = description;
  document.querySelector(".latitud").innerText = lat;
  document.querySelector(".ambiente").innerText = "Temperatura ambiente: " + temp + " °C";
  document.querySelector(".humedad").innerText = humidity + "%";
  document.querySelector(".sensacion").innerText = feels_like + " °C";
  document.querySelector(".temperaturaMaxima").innerText = temp_max + " °C";
  document.querySelector(".temperaturaMinima").innerText = temp_min + " °C";
  document.querySelector(".velocidadViento").innerText = speed + "km/h";
  


  if(description=="nubes"){
    document.querySelector(".iconoTemperatura").src="resources/clouds-icon.png";
    var fondo = document.querySelector("header");
    fondo.style.backgroundImage = "url('resources/PartlyCloudy.png')";
  }
  else if(description=="cielo claro"){
    document.querySelector(".iconoTemperatura").src="resources/Sun Cloud.png";
    var fondo = document.querySelector("header");
    fondo.style.backgroundImage = "url('/resources/sunnyBackground.png')";
  }
  else if(description=="muy nuboso"){
    document.querySelector(".iconoTemperatura").src="resources/clouds-icon.png";
    var fondo = document.querySelector("header");
  }
  else if(description=="nubes dispersas"){
    document.querySelector(".iconoTemperatura").src="resources/Sun Cloud.png";
    var fondo = document.querySelector("header");
    fondo.style.backgroundImage = "url('/resources/sunnyBackground.png')";
  }
}

const meses = [" de Enero del ", " de Febrero del ", " de Marzo del ", " de Abril del ", " de Mayo del ", " de Junio del ",
  " de Julio del ", " de Agosto del ", " de Septiembre del ", " de Octubre del ", " de Noviembre del ", " de Diciembre del"
];

const dias = ["Lunes: ", "Martes: ", "Miercoles: ", "Jueves: ", "Viernes: ", "Sábado: ",
  "Domingo: "
];

// let date = new Date().toDateString();
const fecha = new Date();
const hoy = dias[fecha.getDay()-1]
const dia = fecha.getDate();
const mes = meses[fecha.getMonth()]
const año = fecha.getFullYear();
// hoy.toDateString();
console.log(hoy,dia,mes,año)
document.querySelector(".fecha").innerText = hoy + dia + mes + año;
document.querySelector(".fecha2").innerText = hoy + dia + mes + año;




  
