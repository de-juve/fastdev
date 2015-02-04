(function() {
    'use strict';

    angular.module('fastdevApp').controller('catEditController', catEditCtrl);
    catEditCtrl.$inject =  ['$log', '$routeParams', 'Cat'];
    function catEditCtrl($log, $routeParams, Cat) {
        var vm = this;
        vm.model = {
            cat: Cat.get({catId: $routeParams.catId}),
            description: ''
        };
        vm.editCat = editCat;
        vm.model.description = vm.model.cat.description;
$log.log(vm.model.cat);
        $log.log(vm.model.cat.description);

        function editCat() {
            vm.model.cat.description = vm.model.description;
            vm.model.cat.$save();
        }
    }
})();