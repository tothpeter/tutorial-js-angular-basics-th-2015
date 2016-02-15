angular.module('todoListApp', [])
.controller('mainCtrl', function($scope, dataService) {
  $scope.addTodo = function functionName() {
    var todo = {name: 'This is a new todo.'}
    $scope.todos.push(todo);
  };

  dataService.getTodos(function(response) {
    $scope.todos = response.data;
  });

  $scope.saveTodo = function(todo) {
    dataService.saveTodo(todo);
  };

  $scope.deleteTodo = function(todo, index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice(index, 1);
  }
})
.service('dataService', function($http) {
  this.getTodos = function(callback) {
    $http.get('/mocks/todos.json')
    .then(callback);
  };

  this.saveTodo = function(todo) {
    console.log('The ', todo.name, 'has been saved!');
    todo.edited = false;
    // Other logic...
  };

  this.deleteTodo = function(todo) {
    console.log('The ', todo.name, 'has been deleted!');
    // Other logic...
  };
});
