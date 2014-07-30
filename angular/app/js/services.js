'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.factory('Books', ['$http', function($http){
    return{
      get: function(callback){
          $http.get('js/phones.js').success(function(data) {
          // prepare data here
          callback(data);
        });
      }
    };
}])
.factory('Movies', ['$http', function($http){
    return{
      get: function(callback){          
          var ROOT = 'https://movieapi-hrd.appspot.com/_ah/api';
          gapi.client.load('movie', 'v1', function() {
           
              gapi.client.movie.movies.list({'tags': 'action'}).execute(function(response) {          
                 callback(response.items);
              });
              
        }, ROOT); 
      }
    };
}])
.value('version', '0.1');
