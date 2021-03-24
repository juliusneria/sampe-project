angular.module('myApp')
.factory('sampleFactory', ['$http', '$q',function($http, $q){
    return {
        all: all
    };

    function all(){
        var deferred = $q.defer();
        $http.get('/applicant/all').then(function(obj){
            console.log(obj);
            deferred.resolve(obj.data);
        }, function(errResp){});
        return deferred.promise;
    }
}]); 