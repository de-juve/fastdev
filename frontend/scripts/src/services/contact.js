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