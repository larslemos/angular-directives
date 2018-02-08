(function() {
    'use strict';

    angular.module('directives')
          .controller('StructureController', StructureController);

          function StructureController(){
              var vm = this;
              vm.message = 'This is a message';

              vm.people = ['Berta', 'Ester', 'Eunice', 'Junior'];

              vm.baseLocation = "My answer";
          }//transclude
})();
