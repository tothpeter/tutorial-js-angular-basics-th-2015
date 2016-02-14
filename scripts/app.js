angular.module('todoListApp', [])
.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log('Hello there from the main ctrl');
  }

  $scope.todos = [
    { name: 'clean the house' },
    { name: 'water the lawn' },
    { name: 'feed the dog' },
    { name: 'pay dem bills' },
    { name: 'run' },
    { name: 'swim' }
  ]
});
