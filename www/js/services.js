angular.module('app.services',[])

.factory('SettingsService',[function(){
  return {
    units: 'us'
  };
}])

.factory('WeatherService',['$resource','$http','$log','FORCAST_IO_KEY',SettingsService,function($resource,$http,$log,FORCAST_IO_KEY,SettingsService){
  var url = 'https://api.forecast.io/forecast/'+FORCAST_IO_KEY+'/';
  
  function getWeatherAtLocation(lat,long){
    return $http.jsonp(url + lat + ',' + long + '?callback=JSON_CALLBACK&units='+ SettingsService.units);
  }

  return {
    getWeatherAtLocation : getWeatherAtLocation
  };
}])

.factory('LcationService'[function(){
  return {
    lat : 0,
    long : 0
  };
}])