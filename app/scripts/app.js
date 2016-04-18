'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngclipboard'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('teal');
//      .dark();
    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl',
//        controllerAs: 'main'
//      })
//      .when('/about', {
//        templateUrl: 'views/about.html',
//        controller: 'AboutCtrl',
//        controllerAs: 'about'
//      })
      .when('/short', {
        templateUrl: 'views/short.html',
        controller: 'ShortCtrl',
        controllerAs: 'short'
      })
      .otherwise({
        redirectTo: '/short'
      });
  }).run(function ($http) {  
//      $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//      $http.defaults.headers.post['dataType'] = 'json';
});
