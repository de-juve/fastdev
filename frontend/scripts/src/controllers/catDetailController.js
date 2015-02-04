(function() {
    'use strict';

    angular.module('fastdevApp').controller('catDetailController', catDetailCtrl);
    catDetailCtrl.$inject =  ['$log', '$location', '$timeout', '$routeParams', 'Cat'];
    function catDetailCtrl($log, $location, $timeout, $routeParams, Cat) {
        var vm = this;
        vm.model = {
            cat: Cat.get({catId: $routeParams.catId})
        };
        vm.deleteCat = deleteCat;

        function deleteCat() {
            vm.model.cat.$delete({catId: $routeParams.catId});
            $timeout(function() {$location.path('#/cats');},200);
        }
    }
})();