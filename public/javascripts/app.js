// initiate AngularJs app
// define angular module and controller
const appModule = angular.module('simplyBlogApp', []);
angular.module('simplyBlogApp').controller('MainController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache){

    // test function
    $scope.message = 'Hello from app.js';

    // default post data structure
    $scope.postdata = {
        id: "",
        title: "",
        body: "",
        category: "",
        createdDate: "",
        updatedDate: ""
    };

    // reset data structure
    $scope.master = {};

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

    // use POST function to add new post
    $scope.addPost = function(){
        $http.post('/api/post/new', $scope.postdata).then(function(response){
            $scope.status = response.status || 'Request Failed';
            $scope.data = response.data;
        }, function(response){
            $scope.data = response.data;
            $scope.status = response.status;
        });
    };

    // use GET method to view single post
    $scope.viewSinglePost = function(){
        if($scope.postdata.id){
            $http.get('/api/post/' + $scope.postdata.id).then(function(response){
                $scope.status = response.status || 'Request Failed';
                $scope.data = response.data;
            }, function(response){
                $scope.data = response.data;
                $scope.status = response.status;
            });
        }
    };

    // use GET method to view posts of a single category
    $scope.viewCategoryPosts = function(){
        if($scope.postdata.category){
            $http.get('/api/category/' + $scope.postdata.category).then(function(response){
                $scope.status = response.status || 'Request Failed';
                $scope.data = response.data;
            }, function(response){
                $scope.data = response.data;
                $scope.status = response.status;
            });
        };
    }

    /**
     * Reset form
     */
    // reset form function
    $scope.reset = function(){
        $scope.postdata = angular.copy($scope.master);
    };

    // call reset function
    $scope.reset();

}]);