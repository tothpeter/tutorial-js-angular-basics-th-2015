angular.module('todoListApp', [])
.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.learningNgChange = function() {
    console.log('An input changed!');
  }

  $scope.todos = [
    { name: 'clean the house' },
    { name: 'water the lawn' },
    { name: 'feed the dog' },
    { name: 'pay dem bills' },
    { name: 'run' },
    { name: 'swim' }
  ]
})
.service('dataService', function() {
  this.helloConsole = function() {
    console.log('Hello from service!');
  }
});
