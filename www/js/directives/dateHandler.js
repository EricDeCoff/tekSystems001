/* jshint strict: false, -W117 */
angular.module('date.directives', [])
    .directive('artistDatehandler', function() {
    return {
        restrict: 'E',
        link: function compile(scope, element, attrs) {
            console.log('my-datehandler:link');
            scope.$watch('artistSelected',function(){
                var date1 = String(scope.artistSelected['life-span'].begin);
    
                var date2 = (scope.artistSelected['life-span'].ended) ?
                        String(scope.artistSelected['life-span'].end) :
                        'Present';
                element.html('<span>'+date1+'&nbsp;-&nbsp;'+date2+'</span>');
            });
        }
    };
});