/* jshint strict: false, -W117 */
angular.module('artists.controller',['music.service'])
    .controller('artistsCtrl',[ '$scope','$state','$http','$rootScope', 'musicService', 
                               function ($scope, $state, $http, $rootScope, musicService ) {
    console.log('artistsCtrl');

    $scope.getReleases = musicService.getReleases;

//    $scope.getRelease = musicService.getReleases;
    $scope.artists = {'info':'<p>Wow this is the artists view HTML data</p>'};
    console.log($scope.artists.info);
}]);
