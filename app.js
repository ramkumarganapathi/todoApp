(function() {
    var app = angular.module("todoApp", [
        "ngRoute"
    ]);

    app.config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/page1', {
                template: '<h1>Page 1</h1>'
            })
            .when('/page2', {
                template: '<h1>Page 2</h1>'
            });
    }

    /* function config($routeProvider){
    	$routeProvider
    	.when('/page1',{
    		templateUrl : './views/page1.html'
    	})
    	.when('/page2',{
    		templateUrl : './views/page2.html'
    	});
    } */

    /*function config($stateProvider){
    	$stateProvider
    	.when('page1',{
    	    url : '/page1',
    		templateUrl : 'page1.html',
    		controller : 'page1Controller',
    		controllerAs : 'page1Ctrl'
    	})
    	.when('page2',{
    	    url: '/page2'
    		templateUrl : 'page2.html',
    		controller : 'page2Controller',
    		controllerAs : 'page2Ctrl'
    	});
    }*/

    app.directive("myTemplate", function() {
        return {
            restrict: 'E',
            template: '<p> is my directive</p>'
        }
    });
})();