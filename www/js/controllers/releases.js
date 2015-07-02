/* jshint strict: false, -W117 */
angular.module('releases.controller', [])
    .controller('releasesCtrl', function ($scope, $state, $http, $rootScope ) {
    console.log('releasesCtrl');
        
    $scope.releases = {'info':'<p>Wow this is the release view HTML data</p>'};
    console.log($scope.releases.info);
});
