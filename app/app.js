'use strict';
const radioListPath = 'http://allpress.today/assets/radio-list';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
run(['$http', '$rootScope', ($http, $rootScope) => {
  $http.get(`${radioListPath}/radiolist-md.json`).then((radios) => {
    $rootScope.radios = radios.data
  })
}]);

