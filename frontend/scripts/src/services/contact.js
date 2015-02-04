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