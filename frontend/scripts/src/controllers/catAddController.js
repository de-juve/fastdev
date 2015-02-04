(function() {
    'use strict';

    angular.module('fastdevApp').controller('catAddController', catAddCtrl);
    catAddCtrl.$inject =  ['$log', 'Cat', 'Contact'];
    function catAddCtrl($log, Cat, Contact) {
        var vm = this;
        vm.model = {
            contacts: Contact.query(),
            contact: {},
            description: ''
        };
        vm.addCat = addCat;


        function addCat() {
            var cat = new Cat();
            cat.contact = vm.model.contact.id;
            cat.description = vm.model.description;
            cat.status = true;
            cat.photo = [];
           // $log.log(cat);
            cat.$save();
        }
    }
})();