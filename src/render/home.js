
const searchInput=document.getElementById('searchInput')

const submit=document.getElementById('submit')
submit.addEventListener("click",async(e)=>{
  
  e.preventDefault()
  const city=await document.getElementById('searchInput').value
  if(!city){
   return alert("Plese Type City And Try Again")
  }
  try {
    const responseWeather= await fetch(`https://wheatherapp-backend.onrender.com/weather/${city}`);
    const resultWeather= await responseWeather.json();
    //forcast
    const responseForecast= await fetch(`https://wheatherapp-backend.onrender.com/forecast/${city}`);
    const resultForecast= await responseForecast.json();
    console.log(resultWeather,resultForecast)
    handleWeather(resultWeather)
    handleForecasts(resultForecast)
 } catch (error) {
       console.error(error);
     }
 
})

const handleWeather=(data)=>{
  const content=document.getElementById('content')
  content.innerHTML=
  `
     <p class="title">Today</p>
     <p>${data.name}</p>      
      <div class="img">
         <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"
             width="100"
             height="100"
             alt=""
         />
         <div class="temp">
            <p>${data.weather[0].main}</p>
            <p>${data.main.temp}°C</p>
         </div>
      </div>    
     <div class="wind">
         <p>Wind: ${data.wind.speed} KM/H</p>
         <p>Humidity: ${data.main.humidity}</p>
     </div>  
  `
}

const handleForecasts=(data)=>{
  const content=document.getElementById('content-forcasts')
  content.innerHTML=
  `
    <div class="forcasts">    
      <span>Tomorow:</span>   
      <img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png"
          width="100"
          height="100"
          alt=""
      />
      <span>Max Temp: ${data.list[0].main.temp_max}°C</span>
      <span>Min Temp: ${data.list[0].main.temp_min}°C</span>
    </div>     
  `
}


/*
onload= async() => {
    const main=document.getElementById('main')

    const response = await fetch('https://simbleblog-backend.onrender.com/blogs');
    const result = await response.json();
    
    result.forEach((data)=>{
      const container=`<div class="container-title-delete"">
      <h3 class="title-blog">Title: ${data.title}</h3>
      <div class="delete">
      <button class="delete-button" onclick="HandleDelete(${data.id})">Delete</button>
      </div>
    </div>
    <div class="content-createdAt">
        <article class="artcle">Content: ${data.content}</article>
        <div class="createdAt"><span>CreatedAt: ${formattedDate}</span></div>
        </div>`
     main.innerHTML+=container
    })
  };
*/