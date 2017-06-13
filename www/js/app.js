var base_url = "http://ec2-54-186-121-116.us-west-2.compute.amazonaws.com/iknow/server_side";

var fallbackSrc = 'img/no-image.png'
angular.module('app', ['ionic', 'openfb', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'app.profiles'])

.run(function($rootScope, $state, $ionicPlatform, $window, OpenFB, $http) {

    OpenFB.init('214220945743446');

    $ionicPlatform.ready(function() {

        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

    });

    /*$rootScope.$on('$stateChangeStart', function(event, toState) {
        if (toState.name !== "app.login" && toState.name !== "app.logout" && !$window.sessionStorage['fbtoken']) {
            $state.go('app.login');
            event.preventDefault();
        }
    });*/

    $rootScope.$on('$stateChangeStart', function(event, toState) {
        if (toState.name !== "tab.fblogin" && toState.name !== "tab.logout" && !$window.localStorage['fbtoken']) {
            $state.go('tab.brands');
            event.preventDefault();
        }
    });

    $rootScope.$on('OAuthException', function() {
        $state.go('tab.fblogin');
    });

})





angular.module('app.profiles', ['app.config'])