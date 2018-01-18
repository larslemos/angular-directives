(function() {
    'use strict';

    angular.module('directives')
            .controller('PersonController', PersonController);

            // PersonController.$inject = [''];

            function PersonController() {
                var vm = this;

                vm.user = {
                  scope: 'vm',
                  name: 'Tiago Guilherme Devesse Junior',
                  address: {
                    street: 'Av. Eduardo Mondlane',
                    city: 'Maputo',
                    planet: 'Earth'
                  },
                  friends: [
                    'Hermenegildo', 'Eunice', 'Lars', 'Yuran'
                  ],
                  level: 1
                };

                vm.droid = {
                  name: 'R2-D2',
                  specifications: {
                    manufacturer: 'Industrial Automation',
                    type: 'G&E',
                    productLine: 'R2 Series'
                  }
                };


            }//bussinessController
})();
