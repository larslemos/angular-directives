(function() {
    'use strict';

    angular.module('directives')
            .directive('myLazyRender', myLazyRender)


            function myLazyRender() {
              return {
                restrict: 'A',
                transclude: true,
                priority: 1200,
                link: function(scope, el, attr, ctrl, transclude) {
                  console.info(el);
                  var hasBeenShow = false;
                  console.info(attr);
                  var unwatchFn = scope.$watch(attr.myLazyRender, function(value) {
                    if(value  && !hasBeenShow) {
                        hasBeenShow = true;
                        transclude(scope, function(clone) {
                          el.after(clone);
                        });
                        unwatchFn();
                      }
                    })
                  }
              }
            }//myLazyRender
})();
