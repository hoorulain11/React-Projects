import axios from 'axios';
import { useState } from "react";

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey ='966a0d24c8bcfa605eeb7bf468c696b0';

  const getWeather = async(city)=>{
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      setWeather(response.data)
      console.log(response.data)
    } catch (error) {
      setError('city not found');
      setWeather(null);
    }
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    getWeather(city);
  }

  return (
    
    <div className='bg-gradient-to-r from-red-400 to-red-900 uppercase border border-purple-800 rounded-lg w-fit text-white p-4 mx-auto my-8'>
      <h1 className='drop-shadow-lg m-3 p-3 font-extrabold text-4xl text-rose-300'>Weather Application </h1>
      <form onSubmit={handleSubmit}>
      <input className='outline-none bg-rose-200  capitalize rounded-md border text-rose-700 border-l-rose-400 p-2 mx-6 font-bold'
          type="text" 
          placeholder="Enter city name..."
          value={city} 
          onChange={(e)=>setCity(e.target.value)}
        />
        <button  className=' text-rose-950 bg-rose-500 outline-none border border-rose-500 active:bg-rose-300 m-4 p-2 hover:bg-rose-400 rounded-md' type="submit">Get Weather</button>
      </form>
      {error && <p className='m-8 text-rose-950'>{error}</p>}
      {weather && (
        <div className='mx-11 p-2  text-rose-950 text-2xl  font-semibold capitalize'>
          <h2 className='m-2 p-1'>{weather.name}</h2>
          <p className='m-2 p-2'>{Math.floor(weather.main.temp-273.15)}°C</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} width={80} height={80} />
          <p className='m-2 p-2'>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

export default App