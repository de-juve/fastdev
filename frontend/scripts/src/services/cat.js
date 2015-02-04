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