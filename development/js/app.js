angular.module('myApp',['MyControllers', 'MyServices', 'ui.router', 'ngAnimate', 'chart.js', 'ngTable', 'nvd3', 'ngMaterial',  'ngMdIcons'])


    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider

            .state('main', {
                url: '/home',
                views: {
                    'startView': {
                        templateUrl: 'templates/main.html',
                        controller: 'HomeCtrl as vm'
                    }
                }
            })



        $urlRouterProvider.otherwise('/home');
    });