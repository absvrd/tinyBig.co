var app = angular.module('ui-routes', ['ui.router'])


.config(["$urlRouterProvider", "$stateProvider","$locationProvider",   function ($urlRouterProvider, $stateProvider,$locationProvider){
  $urlRouterProvider.otherwise('/');
    
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl : 'templates/home.html',
      controller  : 'homeController as home',
    })
    .state('about', {
      url: '/about',
      templateUrl : 'templates/about.html',
      controller  : 'aboutController as about',
      
    })
    .state('projects', {
      url: '/projects',
      templateUrl : 'templates/about.html',
      controller  : 'projectsController as projects',
      
    })

    .state('blog', {
      url: '/blog',
      templateUrl : 'templates/blog.html',
      controller  : 'blogController as blog',
      
    });

    // $stateProvider
    //     .state('index', {
    //         url: "/",
    //         views: {
    //             "viewA": {
    //                 templateUrl: "templates/about.html"
    //             },
    //             "viewB": {
    //                 template: "index.viewB"
    //             }
    //         }
    //     })
    //     .state('route1', {
    //         url: "/route1",
    //         views: {
    //             "viewA": {
    //                 template: "route1.viewA"
    //             },
    //             "viewB": {
    //                 template: "route1.viewB"
    //             }
    //         }
    //     })
    //     .state('route2', {
    //         url: "/route2",
    //         views: {
    //             "viewA": {
    //                 template: "route2.viewA"
    //             },
    //             "viewB": {
    //                 template: "route2.viewB"
    //             }
    //         }
    //     });
//http://stackoverflow.com/questions/25494908/slide-left-right-with-angular-ui-router-on-state-change-back-button-for-mobil

}]);