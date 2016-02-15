'use strict';

angular.module('todoListApp')
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
