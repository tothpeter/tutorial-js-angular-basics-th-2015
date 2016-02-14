angular.module('todoListApp', [])
.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log('Hello there from the main ctrl');
  }
})

.controller('coolCtrl', function($scope) {
  $scope.whoAmI = function() {
    console.log('Hello there from the cool ctrl');
  }
});
