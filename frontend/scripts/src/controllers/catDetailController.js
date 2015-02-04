(function() {
    'use strict';

    angular.module('fastdevApp').controller('catDetailController', catDetailCtrl);
    catDetailCtrl.$inject =  ['$log', '$routeParams', 'Cat'];
    function catDetailCtrl($log, $routeParams, Cat) {
        var vm = this;
        vm.model = {
            cat: Cat.get({catId: $routeParams.catId})
        };
        vm.deleteCat = deleteCat;

        function deleteCat() {
            Cat.$delete({catId: $routeParams.catId});
        }
    }
})();