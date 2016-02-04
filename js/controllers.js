var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function ($scope, $http) {
    //$scope - is like a super variable that you can use 
    //to pass things from your JavaScript to your application and template, 
    //and vice-versa.
    $http.get('js/data.json').success(function(data) {
        $scope.artists = data;
    });
}]);