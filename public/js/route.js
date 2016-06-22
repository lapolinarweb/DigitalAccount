// create the module and name it bankingApp
var bankingApp = angular.module('bankingApp', ['ngRoute'])
                        .config(function($routeProvider) {
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

                                // route for the Product Details page
                                .when('/ProductDetails', {
                                    templateUrl  : 'ProductDetails.html',
                                    controller   : 'home',
                                    controllerAs : 'homeController'
                                })

                                // route for the Product Details page
                                .when('/signature', {
                                    templateUrl  : 'Signature_Screen.html',
                                    controller   : 'home',
                                    controllerAs : 'homeController'
                                })
                                .otherwise({
                                  redirectTo : '/'
                                })


                        });
