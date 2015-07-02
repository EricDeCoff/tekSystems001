/* jshint strict: false, -W117 */
angular.module('eval.001', ['ionic',
                            'music.service',
                            'artists.controller',
                            'artistInfo.controller',
                            'releases.controller'])

    .run(['$ionicPlatform','musicService', function($ionicPlatform, musicService) {
    $ionicPlatform.ready(function() {
        musicService.initialize();
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        /*
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
            */
    });
    }])
    .config(function ($stateProvider, $urlRouterProvider) {
    console.log('.config');
    $stateProvider

    // State to represent Artists View
        .state('artists', {
        url: '/artists',
        templateUrl: 'templates/artists.html',
        controller: 'artistsCtrl'
    })
    // State to represent Release View
        .state('artistInfo', {
        url: '/artistInfo',
        templateUrl: 'templates/artistInfo.html',
        controller: 'artistInfoCtrl'
    })
    // State to represent Release View
        .state('releases', {
        url: 'artistInfo/releases',
        templateUrl: 'templates/releases.html',
        controller: 'releasesCtrl'
    });

    // set default route
    $urlRouterProvider.otherwise('/artists');
});
