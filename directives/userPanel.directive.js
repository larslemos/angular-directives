(function() {
    'use strict';

    angular.module('directives')
            .directive('userPanel', userPanel);

            function userPanel() {
                return {
                  restrict: 'E',
                  transclude: true,
                  templateUrl: 'templates/userPanel.template.html',
                  scope: {
                    name: '@',
                    level: '=',
                    initialCollapsed: '@collapsed',
                    person: '='
                  }
                }
            }
})();
