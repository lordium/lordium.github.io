'use strict';

/**
 * @ngdoc overview
 * @name lordiumApp
 * @description
 * # lordiumApp
 *
 * Main module of the application.
 */
angular
  .module('lordiumApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/install', {
        templateUrl: 'views/install.html',
        controller: 'InstallCtrl',
        controllerAs: 'install'
      })
      .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactusCtrl',
        controllerAs: 'contactus'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
