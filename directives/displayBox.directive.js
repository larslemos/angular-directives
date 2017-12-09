(function() {
    'use strict';

    angular.module('directives')
          .directive('displayBox', displayBox);

          function displayBox() {
            return {
              restrict: 'E',
              templateUrl: 'templates/display-box.html',
              controller: hide,
              transclude: true
            }

            function hide($scope) {
                $scope.hidden = false;
                $scope.close = function() {
                  $scope.hidden = true;
                }
            }//hide
          }//displayBox
})();
