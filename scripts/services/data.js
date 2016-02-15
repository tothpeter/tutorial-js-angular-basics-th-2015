'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {
  this.getTodos = function(callback) {
    $http.get('/mocks/todos.json')
    .then(callback);
  };

  this.saveTodos = function(todos) {
    console.log(todos.length + ' todos have been saved!');

    todos.forEach(function(todo) {
      todo.edited = false;
    })
    // Other logic...
  };

  this.deleteTodo = function(todo) {
    console.log('The ', todo.name, 'has been deleted!');
    // Other logic...
  };
});
