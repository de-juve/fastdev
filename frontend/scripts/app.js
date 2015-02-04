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
        return $resource('http://fastdev2.local.com/api/web/v1/cats/:catId', {}, {
            query: {method:'GET', params:{catId:'@id'}, isArray:true},
            update: { method:'PATCH' }
        });
    }
})();
(function() {
    'use strict';
    angular.module('fastdevApp')
        .factory('Contact', cat);

    cat.$inject =  ['$resource'];

    function cat($resource) {
        return $resource('http://fastdev2.local.com/api/web/v1/contacts/:contactId', {}, {
            query: {method:'GET', params:{contactId:'@id'}, isArray:true}
        });
    }
})();