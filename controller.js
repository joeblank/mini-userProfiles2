angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
    var promise = mainService.getUsers();
    promise.then(function(response) {
      $scope.users = response.data.data;
    });
  }
  $scope.getUsers();
});
