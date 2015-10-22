angular.module('app.controllers',['app.services'])

.controller('AppCtrl',['$scope','$log','SettingsService',function($scope,$log,SettingsService){
  $log.info('*** AppCtrl created ***');
  $scope.settings = SettingsService;
}])

.controller('WeatherCtrl',['$scope','$log','WeatherService','SettingsService',function($scope,$log,WeatherService,SettingsService){
  $log.info('*** WeatherCtrl created ***');
  WeatherService
    .getWeatherAtLocation(32.42,-117)
    .then(function(res){
      $log.info(res);
    },function(err){
      alert('Unable to get current data')
      $log.error(err);
    });
}])