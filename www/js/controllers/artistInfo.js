/* jshint strict: false, -W117 */
angular.module('artistInfo.controller', [])
    .controller('artistInfoCtrl', function ($scope, $state, $http, $rootScope ) {
    console.log('artistInfoCtrl');
     
    $scope.artistReleases= function(){
        $state.transitionTo('releases')
    };
    
    $scope.artistInfo = {'info':'<p>Wow this is the artist info view HTML data</p>'};
    console.log($scope.artistInfo.info);
});
