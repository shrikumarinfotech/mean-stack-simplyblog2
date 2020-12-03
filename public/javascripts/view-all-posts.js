'use strict';
// define and configure AngularJs Module and Controller
const appModule = angular.module('simplyBlogApp', []);
angular.module('simplyBlogApp').controller('ViewAllPostsController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache){

    // test message
    $scope.message = 'This is from view-all-posts.js';

    // default post data structure
    $scope.postdata = {
        id: "",
        title: "",
        body: "",
        category: "",
        createdDate: "",
        updatedDate: ""
    };

    // use GET function to view all posts
    $scope.viewPosts = function(){
        if($scope.postdata){
            $http.get('/api/posts').then(function(response){
                $scope.status = response.status || 'Request Failed';
                $scope.data = response.data;
                // return response.data;
            }, function(response){
                $scope.data = response.data;
                $scope.status = response.status;
            });
        }
    };

    // Load all posts from database
    $scope.allposts = $scope.viewPosts();

}]);