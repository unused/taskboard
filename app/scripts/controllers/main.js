'use strict';

angular.module('yeomanTaskboardApp')
  .controller('MainCtrl', function ($scope) {
    // $scope.tasks = {
    $scope.impediments = {
      impurgent: ["something very important and urgent", "something also very important", "this has to be done very first", "we need more chicken"],
      urgent: ["something to do tomorrow"],
      important: ["something real important", "do you need some callsigns!!!!!!"],
      none: ["something to do later", "UPPERCASE IMPLIES IT IS IMPORTANT"]
    };
  });
