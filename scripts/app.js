angular.module('todoListApp', [])
.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  dataService.getTodos(function(response) {
    $scope.todos = response.data;
  });
})
.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log('Hello from service!');
  }

  this.getTodos = function(callback) {
    $http.get('/mocks/todos.json')
    .then(callback);
  };
});
