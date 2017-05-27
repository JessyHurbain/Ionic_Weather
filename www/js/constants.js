angular.module('weather')

.constant('OpenWeatherConfig', {
  searchUrl: 'http://api.openweathermap.org/data/2.5/weather?',
  units: '&units=metric',
  appid: '&appid=YOUR API KEY',
  imgUrl: 'http://openweathermap.org/img/w/'
})
