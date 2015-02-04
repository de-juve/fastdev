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