angular.module('myApp')
.controller('View1Ctrl', ['$scope', 'sampleFactory', '$localStorage', '$sessionStorage', function($scope, sampleFactory, $localStorage, $sessionStorage) {
  $scope.headername = "View 1 Controller";
  $scope.name = "";
  $scope.applicant = [];
  $localStorage.name = "arnold";
  $sessionStorage.name = "arnold";


  sampleFactory.all().then(function(res){
    console.log(res, 'logs');
    $scope.applicant = res;
  }, function(err){
    console.log(err);
  })

  $scope.clicked = function(){
    console.log($scope.name, 'clicked');
  }
}]);