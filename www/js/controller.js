angular.module('starter.controllers', ['firebase'])
  .controller('HomeCtrl', ['$scope', '$firebaseAuth', '$state', function ($scope, $firebaseAuth, $state) {

    $scope.login = {};

    var firebaseObj = new Firebase('https://burning-fire-1723.firebaseio.com/');
    var loginObj = $firebaseAuth(firebaseObj);

    $scope.signin = function () {
      var username = $scope.login.username;
      var password = $scope.login.password;

      loginObj.$authWithPassword({
        email: username,
        password: password
      })
        .then(function (user) {
          // Success callback
          console.log('Auth successful', user);
          $state.go('userHome');
        }, function (error) {
          // Failure callback
          console.log('Auth failure', error);
        })
    };

  }])
  .controller('UserHomeCtrl', ['$scope', function ($scope) {

  }]);
