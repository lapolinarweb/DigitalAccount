// create the module and name it bankingApp
var bankingApp = angular.module('bankingApp', ['ngRoute','ngToast'])
.config(function($routeProvider , $locationProvider) {
  $routeProvider
  //route for index page
  .when('/', {
    templateUrl  : 'Homepage.html',
    controller   : 'home',
    controllerAs : 'homeController'
  })

  // route for the home page
  .when('/Services', {
    templateUrl  : 'Services.html',
    controller   : 'home',
    controllerAs : 'homeController'
  })

  // route for the Personal Details page
  .when('/PersonalDetails', {
    templateUrl  : 'PersonalDetails.html',
    controller   : 'home',
    controllerAs : 'homeController'
  })

  // route for the Personal Details page
  .when('/IDUpload', {
    templateUrl  : 'UploadID.html',
    controller   : 'home',
    controllerAs : 'homeController'
  })

  // route for the Product Details page
  .when('/signature', {
    templateUrl  : 'Signature_Screen.html',
    controller   : 'home',
    controllerAs : 'homeController'
  })

  .when('/fundingoptions', {
    templateUrl  : 'FundingOptions.html',
    controller   : 'home',
    controllerAs : 'homeController'
  })
  .when('/confirmation', {
    templateUrl  : 'Confirmation.html',
    controller   : 'home',
    controllerAs : 'homeController'
  })
  .when('/captureSelfie', {
    templateUrl  : 'SelfieUploadScreen.html',
    controller   : 'home',
    controllerAs : 'homeController'
  })
  .otherwise({
    redirectTo : '/'
  })

  $locationProvider.html5Mode(true)
}).config(['ngToastProvider', function(ngToast) {
    ngToast.configure({
      maxNumber: 2
    });
  }]);
