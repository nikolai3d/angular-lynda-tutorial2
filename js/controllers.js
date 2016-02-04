var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
    //$scope - is like a super variable that you can use 
    //to pass things from your JavaScript to your application and template, 
    //and vice-versa.
    
    $scope.author = {
        'name' : 'Nikolai Svakhin',
        'title': 'Software Developer',
        'company': 'adobe.com'
    };
});