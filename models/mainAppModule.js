var myApp = angular.module('myApp',['ngRoute','ngAnimate','ngTouch','ui.bootstrap'])
myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "index.html",
      controller: "ValidationCtrl"       
    })
    $routeProvider.otherwise({redirectTo:'/'})
  
}])