angular.module('app.profiles', ['app.config'])


.config(function($stateProvider, FB_APP_ID) {

    openFB.init({ appId: FB_APP_ID });

    $stateProvider

        .state('tab.fbprofile', {
        url: '/fbprofile',
        views: {
            'tab-login': {
                templateUrl: 'templates/tab-fbprofile.html',
                controller: 'profileFBCtrl'
            }
        }

    })






})

.controller('ProfileFBCtrl', function($scope) {


    openFB.api({

        path: '/me',
        params: { fields: 'id,name' },
        success: function(user) {
            $scope.$apply(function() {
                // initial state is visible


                $scope.user = user;
                console.log(user.id)
                console.log(user.name)
                localStorage.setItem('authenticated', 1);


            });
        },
        error: function(error) {


            alert('Error connecting to Facebook. Did you log in?');
            localStorage.setItem('authenticated', 0);


        }
    });

})



/*//facebookConnectPlugin.logout(Function success, Function failure)*/