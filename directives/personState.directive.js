(function() {
    'use strict';

    angular.module('directives')
            .directive('personState', personState);

            function personState() {
                return {
                  restrict: 'E',
                  templateUrl: 'templates/personInfoCard.template.html',
                  controller: personController,
                  scope: {
                    person: '='
                  }
                }

                function personController($scope) {
                    console.info($scope);
                    $scope.promoteMeI = function(user) {
                      $scope.person.rank = "Promoted";
                      console.log($scope.person);
                    }
                    $scope.nextLevel = function() {

                    }
                    $scope.removeFriend = function(friend) {
                      console.log(friend);
                      console.info($scope.person);
                      var idx = $scope.person.friends.indexOf(friend);
                    }
                }
            }



})();
