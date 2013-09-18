'use strict';

angular.module('yeomanTaskboardApp')
  .controller('MainCtrl', function ($scope) {
    // $scope.tasks = {
    $scope.impediments = {
      impurgent: ["something very important and urgent", "something also very important", "store tasks", "this has to be done very first", "we need more chicken"],
      urgent: ["something to do tomorrow", "set same height for all sections", "move tasks between sections"],
      important: ["we need a done action", "something real important", "do you need some callsigns!!!!!!", "add add action, hehe add add ;)"],
      none: ["something to do later", "UPPERCASE IMPLIES IT IS IMPORTANT", "add delete action"]
    };
  });
