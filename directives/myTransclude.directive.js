(function() {
    'use strict';

    angular.module('directives')
            .directive('myTransclude', myTransclude)
            .directive('myTransclusion', myTransclusion);


            function myTransclude() {
              return {
                restrict: 'E',
                transclude: true,
                template: '<div ng-transclude />'
              }
            }//myTransclude

            function myTransclusion() {
                return {
                  restrict: 'A',
                  transclude: 'element',
                  link: function(scope, el, attr, ctrl, transclude) {
                      console.log(el[0]);
                      transclude(scope, function(clone) {
                          el.after(clone);
                      })
                  }
                }
          }//myTransclusion

})();
