'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl2', ['$scope', 'Books',function($scope, Books) {
  Books.get(function(data){
      $scope.books = data;
    });
 $scope.orderProp = 'name';
 
  }])
  .controller('MyCtrl1', ['$scope', 'Movies',function($scope, Movies) {

   Movies.get(function(data){
      $scope.movies = data;
    });
   $scope.orderProp = 'title';
   
   // myapi.client.movie.movies.list({'tags': 'action'}).execute(function(response) {          
     //           $scope.movies =  response.items;
   //           });
   //https://groups.google.com/forum/#!msg/angular/zU4AhW-PSEM/poHHtSQW1hgJ
   /*http://www.slideshare.net/vierjp/appengine-ja-night-24-google-cloud-endpoints-and-bigquery-english
$scope.getAppData=function(){
              //Execute API
                gapi.client.movie.movies.list({'tags': 'action' }).execute(function(response) {          
                   $scope.appData= response;
                   $scope.$apply();
                   $scope.orderProp = 'title';
                });
             
             
              };
              */

  }]);