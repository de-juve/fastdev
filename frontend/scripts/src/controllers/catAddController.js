(function() {
    'use strict';

    angular.module('fastdevApp').controller('catAddController', catAddCtrl);
    catAddCtrl.$inject =  ['$log', '$location', '$timeout', 'Cat', 'Contact'];
    function catAddCtrl($log, $location, $timeout, Cat, Contact) {
        var vm = this;
        vm.model = {
            contacts: Contact.query(),
            contact: {},
            description: ''
        };
        vm.addCat = addCat;


        function addCat() {
            var cat = new Cat();
            cat.contact_id = vm.model.contact.id;
            cat.description = vm.model.description;
            cat.status = 1;
            cat.photo = null;
            cat.$save();
            $timeout(function() {$location.path('#/cats');},200);
        }
    }
})();