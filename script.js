
function getWeather(){
    const apiKey='177e1b4f4ffac8cdb5a0060649736013';
    const cirty=document.getElementById('city').ariaValueMax;
    if(!city){
        alert('please enter a city');
        return;
    }
     const currentWeatherUrl='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}';
     const forecastUrl='https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}';


}