(function() {
    'use strict';

    angular.module('directives')
            .directive('panel', panel);

            function panel() {
                return {
                  restrict: 'E',
                  transclude: true,
                  templateUrl: 'views/userPanel.html'
                }
            }
})();
