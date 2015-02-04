(function() {
    'use strict';
    angular.module('fastdevApp', ['ngResource', 'ngRoute']);
})();
(function() {
    'use strict';
    angular.module('fastdevApp')
        .config(['$resourceProvider', function($resourceProvider) {
        // Don't strip trailing slashes from calculated URLs
        //$resourceProvider.defaults.stripTrailingSlashes = false;
    }]);
})();

(function() {
    'use strict';
    angular.module('fastdevApp')
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider.
                    when('/cats', {
                        templateUrl: 'views/cat-list.html',
                        controller: 'catListController as vm'
                    }).
                    when('/cats/:catId', {
                        templateUrl: 'views/cat-detail.html',
                        controller: 'catDetailController as vm'
                    }).
                    when('/cat-edit/:catId', {
                        templateUrl: 'views/cat-edit.html',
                        controller: 'catEditController as vm'
                    }).
                    when('/cat-add', {
                        templateUrl: 'views/cat-add.html',
                        controller: 'catAddController as vm'
                    }).
                    otherwise({
                        redirectTo: '/cats'
                    });
            }]);
})();

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
(function() {
    'use strict';
    angular.module('fastdevApp')
        .factory('Cat', cat);

    cat.$inject =  ['$resource'];

    function cat($resource) {
        return $resource('http://local.fastdev2.com/api/web/v1/cats/:catId', {}, {
            query: {method:'GET', params:{catId:'@id'}, isArray:true}
        });
        /*var Cats = $resource('http://local.fastdev2.com/api/web/v1/cats');
        Cats.get(function(u, getResponseHeaders){
            $log.log(u);
            $log.log(getResponseHeaders);
            *//* u.abc = true;
             u.$save(function(u, putResponseHeaders) {
             //u => saved user object
             //putResponseHeaders => $http header getter
             });*//*
        });*/

        /* var token = btoa({username:'admin', password: 'admin'});
         var Cat = $resource('http://local.fastdev2.com/api/web/v1/cats/:catId', {catId:'@id'});
         Cat.get({catId:1}, function(u, getResponseHeaders){
         $log.log(u);
         $log.log(getResponseHeaders);
         *//* u.abc = true;
         u.$save(function(u, putResponseHeaders) {
         //u => saved user object
         //putResponseHeaders => $http header getter
         });*//*
         });*/
    }
})();
(function() {
    'use strict';
    angular.module('fastdevApp')
        .factory('Contact', cat);

    cat.$inject =  ['$resource'];

    function cat($resource) {
        return $resource('http://local.fastdev2.com/api/web/v1/contacts/:contactId', {}, {
            query: {method:'GET', params:{contactId:'@id'}, isArray:true}
        });
    }
})();