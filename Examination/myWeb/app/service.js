'use strict';

angular.module('myApp.service', [])

    .service('service', function ($http, $q) {
        this.func=(url)=>{
            var defered=$q.defer()

            $http.get(url)
                .then(result=>{
                    //console.log("res",result)
                    defered.resolve(result)
                })
                .catch(err=>{
                    defered.reject(err)
                })
            return defered.promise
        }


        this.post= function(uploadUrl,data){
          var defered=$q.defer();
            var fd = new FormData();
            for(var key in data)
                fd.append(key, data[key]);
            $http.post(uploadUrl,fd, {
                transformRequest:angular.indentity,
                headers:{'Content-Type':undefined}
            }).then(function(res) {
                defered.resolve(res);
                var resErrors = res.data;
                //console.log(resErrors);

                // console.log("nnn"+res.data);
            });

            return defered.promise;
        }

    })