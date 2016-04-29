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
      console.log("Error retrieving users.");
    });
  }]);

  app.controller("PostController", ['$http', function($http) {
    var postCtrl = this;
    postCtrl.posts = [ ];

    $http.get("http://jsonplaceholder.typicode.com/comments")
    .success(function(data) {
      for (var i = 0; i < 6; ++i) {
        postCtrl.posts.push(data[i]);
      }
    })
    .error(function(data) {
      console.log("Error retrieving posts.");
    });
  }]);

  app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
})();
