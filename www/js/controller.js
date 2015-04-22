angular.module('starter.controllers', ['firebase'])
  .controller('HomeCtrl', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {

    $scope.login = {};

    $scope.signin = function () {
      var username = $scope.login.username;
      var password = $scope.login.password;

      console.log(username, password)
    }

  }]);
