// create the module and name it bankingApp
var bankingApp = angular.module('bankingApp', ['ngRoute'])
                        .config(function($routeProvider) {
                            $routeProvider
                                //route for index page
                                .when('/', {
                                    templateUrl  : 'landingPage.html',
                                    controller   : 'home',
                                })

                                // route for the home page
                                .when('/home', {
                                    templateUrl  : 'home.html',
                                    controller   : 'home',
                                    controllerAs : 'homeController'
                                })

                        });
