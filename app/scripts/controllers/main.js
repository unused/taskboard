'use strict';

angular.module('yeomanTaskboardApp')
  .controller('MainCtrl', function ($scope,$http,$timeout) {
    $http.get('tasks.json').success( function(data) { $scope.impediments = data; });
  });
