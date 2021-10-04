import { useState } from 'react';
import './Main.css'
import ApiResult from './ApiResult'

function Main() {
    const [city, setCity] = useState('')
    const [weatherInfo, setWeatherInfo] = useState([])

    /**
     * after clicking the btn "handleWeatherBtn" will call & load weather data
     * here dynamic city found by user given input  
     */
    function handleWeatherBtn() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=841218244979a82d9ada69c23d770258&units=metric`)
            .then(res => res.json())
            .then(data => setWeatherInfo(data.main))
    }

    return (
        <main>
            <div className='search-container'>
                <input onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder='Enter city name'
                />
                <button onClick={handleWeatherBtn}>Enter</button>
            </div>
            {
             
                    <ApiResult key={weatherInfo.id} weather={weatherInfo}/>
            }

        </main>
    );
}

export default Main;