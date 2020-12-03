'use strict';

// define AngularJs module and Controller
const appModule = angular.module('simplyBlogApp', []);
angular.module('simplyBlogApp').controller('ViewPostController', ['$scope', '$http', '$location', '$templateCache', function($scope, $http, $location, $templateCache){
    
    // test function
    $scope.message = 'This is from view-post.js';

    // location configuration: reference: https://docs.angularjs.org/guide/$location
    $scope.$location = {};
    angular.forEach('protocol host port path search hash'.split(' '), function(method){
        $scope.$location[method] = function(){
            var result = $location[method];
            return angular.isObject(result) ? angular.toJson(result) : result;
        }
    });
    // dave the path
    $scope.postid = $location.path();
    console.log($scope.postid);

    // default post data structure
    $scope.postdata = {
        id: "",
        title: "",
        body: "",
        category: "",
        createdDate: "",
        updatedDate: ""
    };

    // use GET method to view single post
    $scope.viewSinglePost = function(){
        if($scope.postid){
            $http.get('/api' + $scope.postid).then(function(response){
                $scope.status = response.status || 'Request Failed';
                $scope.data = response.data;
            }, function(response){
                $scope.data = response.data;
                $scope.status = response.status;
            });
        }
    };
    // run the view single post function
    $scope.post = $scope.viewSinglePost();

}])
.config(function($locationProvider){
    $locationProvider.html5Mode(true).hashPrefix('!');
}).run(function($rootElement){
    $rootElement.on('click', function(e){
        e.stopPropagation();
    });
});