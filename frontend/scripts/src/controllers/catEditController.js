(function() {
    'use strict';

    angular.module('fastdevApp').controller('catEditController', catEditCtrl);
    catEditCtrl.$inject =  ['$log', '$location', '$timeout', '$routeParams', 'Cat'];
    function catEditCtrl($log, $location, $timeout, $routeParams, Cat) {
        var vm = this;
        vm.model = {
            cat: Cat.get({catId: $routeParams.catId}),
            description: ''
        };
        vm.updateCat = updateCat;

        $timeout(function() { vm.model.description = vm.model.cat.description;},100);


        function updateCat() {
            vm.model.cat.description = vm.model.description;
            Cat.update({catId: $routeParams.catId}, vm.model.cat);

        //    vm.model.cat.$save();
            $timeout(function() {$location.path('#/cats');},200);
        }
    }
})();