import React, { useEffect, useState } from 'react'
import {SearchContext} from '../Context.js'
import {useContext} from 'react'
 function HomePage() {
  const [Temprature,setTamprature]=useState(null)
const {cityName} =useContext(SearchContext)

  const [weather,setWeather]=useState(null)

const foreCast=weather?[
    {rainChance:weather.weather[0].hourly[0].chanceofrain,icon:weather.weather[0].hourly[0].weatherIconUrl[0].value,date:weather.weather[0].date,maxTemp:weather.weather[0].maxtempC,minTemp:weather.weather[0].mintempC},
  {rainChance:weather.weather[1].hourly[1].chanceofrain,icon:weather.weather[0].hourly[1].weatherIconUrl[0].value,date:weather.weather[1].date,maxTemp:weather.weather[1].maxtempC,minTemp:weather.weather[2].mintempC},
  {rainChance:weather.weather[2].hourly[2].chanceofrain,icon:weather.weather[2].hourly[2].weatherIconUrl[0].value,date:weather.weather[2].date,maxTemp:weather.weather[2].maxtempC,minTemp:weather.weather[2].mintempC}


]:[]
const weatherCards = [
  {
    id: 1,
    icon: "fa-solid fa-droplet",
    label: "Humidity",
    value: weather?.current_condition?.[0]?.humidity
  },
  {
    id: 2,
    icon: "fa-solid fa-temperature-half",
    label: "FeelsLike",
    value: weather?.current_condition?.[0]?.FeelsLikeC
  },
  {
    id: 3,
    icon: "fa-solid fa-wind",
    label: "Pressure",
    value: weather?.current_condition?.[0]?.pressure
  },
    {
    id: 4,
    icon: "fa-solid fa-droplet",
    label: "Rain Chance",
    value: weather?.weather?.[0].hourly[0]?.chanceofrain
  }
];

  useEffect(()=>{
getWeather()

  },[cityName])

   

 
  const getWeather =async ()=>{
try {
  const res=await fetch(`https://wttr.in/${cityName}?format=j1`)
  const data= await res.json()
  setWeather(data)
  console.log(data)

} catch (error) {
  console.log(error)
}

  

    }
  return (
    <div className='flex item-center justify-center'>
      <div className='min-h-screen  mt-40 md:mt-30 '>
     
    <div className=' m-3 p-5 bg-linear-to-r from-sky-500 to-sky-400 text-white rounded-2xl
    '>
        {!weather && (
        <h1 className='text-3xl  font-bold text-center'>
          loading...<i className="fa-solid fa-spinner animate-spin"></i>
        </h1>
      )}

<div className='  items-center  gap-4'>
  {weather && (<>
    <div className='m-6 flex gap-5 md:gap-7'>
      <div className=''>
          <h1 className='text-4xl md:text-8xl font-bold'>
          {weather.current_condition[0].temp_C}°C
           
        </h1>
       
      <div className=''>
       <span>
        <h2 className='text-xl font-bold md:text-2xl '>
         {weather.current_condition[0].weatherDesc[0].value}
        </h2>
      </span>
  <span className='flex flex-col gap-2'>
     <h3 className='md:text-xl text-lg'>
    {weather.nearest_area[0].areaName[0].value} ,
         {weather.nearest_area[0].country[0].value}

   </h3>
   <h3>
         {weather.current_condition[0].localObsDateTime}

   </h3>
   
   
  </span>
          
      </div></div>
      <div>
      <img className='h-30 w-30 mt-2 rounded-full ' src=
         {weather.current_condition[0].weatherIconUrl[0].value}/>

      </div>
          
     
      </div>
     
 <div className="m-3 flex gap-4 flex-wrap">
  {weatherCards.map((item) => (
    <div
      key={item.id}
      className="p-4 border flex items-center gap-3 border-sky-400 rounded-2xl w-45"
    >
      <i className={item.icon}></i>

      <h1>
        <strong>{item.label}</strong> : {item.value}
      </h1>
    </div>
  ))}
</div>
      
      </>
      )}
</div>
    </div><br/><br/>
<div className="m-3">
  {weather && (
    <h1 className="text-2xl text-center md:text-start font-bold mb-4 text-sky-700">
      3 Days Forecast
    </h1>
  )}

  {weather && (
    <div className="flex gap-6 md:gap-8 p-4 flex-wrap justify-center ">
      {foreCast.map((items, index) => (
        <div
          key={index}
          className="w-72 p-5 :w-full md:w-80 lg:w-90 xl:w-100 rounded-2xl border border-sky-300 bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-md hover:scale-102 transition-transform duration-300"
        >
          <div className="flex flex-col items-center text-center gap-3">

            {/* Icon */}
            <img
              src={items.icon}
              alt="weather icon"
              className="w-16 h-16"
            />

            {/* Temperature */}
            <h1 className="text-xl font-semibold">
              {items.maxTemp}° / {items.minTemp}°
            </h1>
            <h1 className='font-semibold'>
          <i class='fa-solid fa-droplet'></i> Rain : {items.rainChance}%
            </h1>

            {/* Date */}
            <h2 className="text-md opacity-90">
              {items.date}
            </h2>

          </div>
        </div>
      ))}
    </div>
  )}
</div>
      </div><br/>

      <br/>



    </div>
  )
}
export default HomePage