'use strict';

// define AngularJs module and Controller
const appModule = angular.module('simplyBlogApp', []);
angular.module('simplyBlogApp').controller('ViewCategoryPostsController', ['$scope', '$http', '$location', '$templateCache', function($scope, $http, $location, $templateCache){
    
    // test function
    $scope.message = 'This is from category-view.js';

    // setup location
    $scope.$location = {};
    angular.forEach('protocol host port path search hash'.split(' '), function(method){
        $scope.$location[method] = function(){
            var result = $location[method];
            return angular.isObject(result) ? angular.toJson(result) : result;
        }
    });

    // get the category from url
    $scope.category = $location.path();
    console.log($scope.category);

    // use GET method to view posts of a single category
    $scope.viewCategoryPosts = function(){
        if($scope.category){
            $http.get('/api' + $scope.category).then(function(response){
                $scope.status = response.status || 'Request Failed';
                $scope.data = response.data;
            }, function(response){
                $scope.data = response.data;
                $scope.status = response.status;
            });
        }
    };
    // run the view category posts function
    $scope.posts = $scope.viewCategoryPosts();

}])
.config(function($locationProvider){
    $locationProvider.html5Mode(true).hashPrefix('!');
}).run(function($rootElement){
    $rootElement.on('click', function(e){
        e.stopPropagation();
    });
});