angular.module('app3').controller('mainCtrl', function($scope, myService) {

  $scope.testResult = "Success!";

  $scope.dataCapture = myService.dataCapture();

});
