(function() {
    'use strict';

    angular.module('directives')
          .controller('TransCludeController', TransCludeController);

          function TransCludeController(){
              var vm = this;
              vm.message = 'This is a message';
          }//transclude
})();
