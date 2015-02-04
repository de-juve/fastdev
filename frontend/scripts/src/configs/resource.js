(function() {
    'use strict';
    angular.module('fastdevApp')
        .config(['$resourceProvider', function($resourceProvider) {
        // Don't strip trailing slashes from calculated URLs
        //$resourceProvider.defaults.stripTrailingSlashes = false;
    }]);
})();
