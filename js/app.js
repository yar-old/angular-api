(function() {
  var app = angular.module('api-app', []);

  app.controller("HelloController", function() {
    var helloTo = {};
    helloTo.title = "AngularJS";
  });

  app.controller("UserController", ['$http', function($http) {
    var userCtrl = this;
    userCtrl.users = [ ];

    $http.get("http://api.randomuser.me/?nat=us,au,gb,ca&results=8")
    .success(function(data) {
      userCtrl.users = data.results;
    })
    .error(function(data) {
      console.log("ERROR!");
    });
  }]);

  app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
})();
