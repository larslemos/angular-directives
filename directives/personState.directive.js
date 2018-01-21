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
                    $scope.promoteMeI = function(user) {
                      $scope.person.rank = "Promoted";
                    }
                    $scope.nextLevel = function() { 
                      $scope.person.level++;
                      $scope.person.level = $scope.person.level % 3 ;
                    }
                    $scope.removeFriend = function(friend) {
                      var idx = $scope.person.friends.indexOf(friend);
                      if(idx > -1)
                        $scope.person.friends.splice(idx, 1);
                    }
                }
            }



})();
