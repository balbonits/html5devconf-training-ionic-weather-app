// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic','app.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
  // routes as 'states'
  $stateProvider
    .state('app',{
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.weather',{
      url: '/weather',
      views: {
        'menuContent': {
          templateUrl: 'templates/weather.html',
          controller: 'WeatherCtrl'
        }
      }

    });

  // fallback
  $urlRouterProvider.otherwise('/app/weather');
}])

.constant('FORCAST_IO_KEY','16db9b0b93e49a32fdb93926fc5bf8d5')