(function() {
    'use strict';

    angular.module('fastdevApp').controller('catListController', catListCtrl);
    catListCtrl.$inject =  ['$log', 'Cat', 'Contact'];
    function catListCtrl($log, Cat) {
        var vm = this;
        vm.model = {
            cats: Cat.query()
        };
    }
})();