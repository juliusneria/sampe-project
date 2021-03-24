angular.module('myApp')
    .directive('footerDir', footerDir);
function footerDir() {
    return {
        restrict: 'E',
        templateUrl: 'directive/view/footer.html',
        controller: 'footerCtrl',
        link: function (scope, elements, attrs) {
            if (attrs.headername) {
                console.log(attrs);
                scope.headername = scope.$eval(attrs.headername);
            }
        }
    };
}