(function() {
  var app = angular.module('api-app', []);

  app.controller("HelloController", function() {
    var helloTo = {};
    helloTo.title = "AngularJS";
  });

  app.controller("UserController", ['$http', function($http) {
    var userCtrl = this;
    userCtrl.users = [ ];

    $http.get("http://jsonplaceholder.typicode.com/users")
    .success(function(data, status, headers, config) {
      userCtrl.users = data;
    })
    .error(function(data, status, headers, config) {
      console.log("ERROR!");
    });
  }]);
})();
