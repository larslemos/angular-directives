(function() {
    'use strict';

    var app = angular.module('directives')
                      .controller('DecoratorController', DecoratorController);

    DecoratorController.$inject = ['$scope','$window','$locale'];

    function DecoratorController($scope, $window, $locale) {
        var vm = this;
        // console.log(vm);
        // console.info($scope);

        vm.messages = [];

        vm.handlePause = function(evt) {
            // vm.messages.push('paused!');  //This will create error in the Ng Repeat for duplicates
            vm.messages.push({text: 'paused!'});
        }

        vm.data = {message: 'I have not been clicked'};
        vm.clickHandler = function(para) {
          para.message = 'I have been clicked';
        };

        vm.size = 150;

        vm.user = {
          name: 'Junior',
          selected: false
        };

    }//DecoratorController

})();
