angular
    .module('cytoscapeSample', [
        'ngRoute',
    ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/graph', {
        templateUrl: 'graph/graph.html',
        controller: 'CytoscapeCtrl'
      });
    }])

