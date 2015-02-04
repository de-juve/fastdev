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
