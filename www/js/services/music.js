/* jshint strict: false, -W117 */
angular.module('music.service',[])
    .service('musicService',function($rootScope, $state, $http) {
    var musicService = {
        name:'musicService',
        initialize:function(){
            $rootScope.artistIDs = [ 
                '83d91898-7763-47d7-b03b-b92132375c47',
                'a3cb23fc-acd3-4ce0-8f36-1e5aa6a18432',
                'b071f9fa-14b0-4217-8e97-eb41da73f598',
                '8e68819d-71be-4e7d-b41d-f1df81b01d3f',
                'b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d',
                '73e5e69d-3554-40d8-8516-00cb38737a1c',
                '5182c1d9-c7d2-4dad-afa0-ccfeada921a8',
                '534ee493-bfac-4575-a44a-0ae41e2c3fe4'
            ];
            
            this.getArtists();
        },
        getArtists:function(){
            console.log(this.name+':getArtists');
            $rootScope.artistDetails=[];            
            angular.forEach($rootScope.artistIDs,function(id){
                url = 'http://musicbrainz.org/ws/2/artist/'+id+'?inc=aliases&fmt=json';
                console.log(url);
                $http.get(url)
                    .success(function(data, status, header, config){
                    console.log(data);
                    $rootScope.artistDetails.push(data);
                });
            });
    
            console.log('**************');
            console.log('artistDetails:');
            console.log($rootScope.artistDetails);
            console.log('**************');
        },
        getReleases:function(artistSelected){
            console.log(this.name+':getReleases');
            console.log('artistSelected:');
            console.log(artistSelected);
            $rootScope.artistSelected = artistSelected;
            console.log('artistSelected.id:');
            console.log(artistSelected.id);
            url = 'http://musicbrainz.org/ws/2/release?artist='+artistSelected.id;
            console.log(url);
            $rootScope.artistReleases = [];
            $http.get(url)
                .success(function(data, status, header, config){
                console.log(data);
                $rootScope.artistReleases = data;
                $state.transitionTo('artistInfo');
            });
        }
    };
    return musicService;
});