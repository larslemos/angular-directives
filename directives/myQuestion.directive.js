(function() {
    'use strict';

    angular.module('directives')
          .directive('myQuestion', myQuestion);

          function myQuestion() {
              return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'templates/my-question.html',
                scope: {
                  questionText: '@q'
                }
              }
          }//myQuestion
})();
