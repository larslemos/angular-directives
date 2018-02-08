(function() {
    'use strict';

    angular.module('directives')
          .controller('TransCludeController', TransCludeController);

          function TransCludeController(){
              var vm = this;
              vm.message = 'This is a message';

              vm.baseLocation = "My answer";

              vm.items = [1, 3, 6, 78, 5];
          }//transclude
})();
