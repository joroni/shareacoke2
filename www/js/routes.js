angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
    // from socio app 
    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        controller: "AppCtrl"
    })

    /** socio */
    .state('tab.fblogin', {
        url: "/fblogin",
        views: {
            'tab-fblogin': {
                templateUrl: "templates/tab-fblogin.html",
                //controller: "LoginCtrl"
                controller: "FBLoginCtrl"

            }
        }
    })

    .state('tab.logout', {
        url: "/logout",
        views: {
            'tab-login': {
                templateUrl: "templates/logout.html",
                controller: "LogoutCtrl"
            }
        }
    })

    .state('app.profile', {
        url: "/profile",
        views: {
            'menuContent': {
                templateUrl: "templates/profile.html",
                controller: "ProfileCtrl"
            }
        }
    })


    .state('app.person', {
            url: "/person/:personId",
            views: {
                'menuContent': {
                    templateUrl: "templates/person.html",
                    controller: "PersonCtrl"
                }
            }
        })
        .state('app.feed', {
            url: "/person/:personId/feed",
            views: {
                'menuContent': {
                    templateUrl: "templates/feed.html",
                    controller: "FeedCtrl"
                }
            }
        })



    .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: "AppCtrl"
        })
        // from socio app 

    /** socio */



    // Each tab has its own nav history stack:

    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
            }
        }
    })




    .state('tab.login-form', {
        url: '/login-form',
        views: {
            'tab-login': {
                templateUrl: 'templates/tab-login-form.html',
                controller: 'loginCtrl',
                resolve: {
                    "check": function($location) {
                        var LoginCtrl = localStorage.getItem('loggedin_id');
                        //  console.log('LoginCtrl', LoginCtrl);
                        if (LoginCtrl != null) {
                            console.log('LoginCtrl', LoginCtrl);
                            //$location.path('#/tab/profile');
                            window.location.href = "#/tab/profile";
                            // $state.go('tab.profile', {}, { location: "replace", reload: false });
                        } else {
                            console.log('LoginCtrl', 'None');
                            //  $state.go('tab.login', {}, { location: "replace", reload: true });
                            //  $location.path('#/tab/login');
                            window.location.href = "#/tab/login";
                        }



                        //   if (localStorage.getItem('loggedin_id')) { $location.path('#/tab/profile'); } else { $location.path('#/tab/login'); }
                    }
                }
            }



        }
    })

    .state('tab.cart', {
        url: '/cart',
        views: {
            'tab-dash': {
                templateUrl: 'templates/cart.html',
                controller: 'cartCtrl'
            }
        }
    })


    /*
        .state('tab.snapshot', {
            url: '/snapshot',
            views: {
                'tab-snapshot': {
                    templateUrl: 'templates/tab-snapshot.html'
                        // controller: 'cartCtrl'
                }
            }
        })

    */




    .state('tab.checkout', {
        url: '/checkout',
        views: {
            'tab-dash': {
                templateUrl: 'templates/checkout.html',
                controller: 'checkOutCtrl'
            }
        }

    })


    .state('tab.snap', {
        url: '/snap',
        views: {
            'tab-snap': {
                templateUrl: 'templates/tab-snap.html',
                controller: 'arCtrl'
            }
        }

    })

    .state('tab.ar', {
        url: '/ar',

        templateUrl: 'templates/ar.html',
        controller: 'arCtrl2'


    })

    .state('tab.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/tab-chats.html',
                    controller: 'ChatsCtrl'
                }
            }
        })
        .state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/chat-detail.html',
                    controller: 'ChatDetailCtrl'
                }
            }
        })


    /*
        .state('signup', {
            url: '/signup',
            templateUrl: 'templates/signup.html',
            controller: 'signupCtrl'
        })

    */

    .state('tab.signup', {
        url: '/signup',
        views: {
            'tab-login': {
                templateUrl: 'templates/signup.html',
                controller: 'signupCtrl'
            }
        }

    })

    .state('tab.login', {
        url: '/login',
        views: {
            'tab-login': {
                templateUrl: 'templates/tab-login.html',
                controller: 'loginCtrl',
                resolve: {
                    "check": function($location) {
                        if (sessionStorage.getItem('loggedin_id')) {
                            $location.path('#/tab/profile');
                        } else if (sessionStorage.getItem('authenticated')) {
                            $location.path('#/tab/fbprofile');
                        } else { $location.path('#/tab/login-form'); }
                    }
                }
            }



        }
    })




    .state('tab.profile', {
        url: '/profile',
        views: {
            'tab-login': {
                templateUrl: 'templates/tab-profile.html',
                controller: 'profileCtrl'
            }
        }

    })


    .state('tab.fbprofile', {
        url: '/fbprofile',
        views: {
            'tab-login': {
                templateUrl: 'templates/tab-fbprofile.html',
                controller: 'profileCtrl'
            }
        }

    })



    .state('tab.fbprofile2', {
        url: '/fbprofile2',
        views: {
            'tab-login': {
                templateUrl: 'templates/tab-facebook.html',
                controller: 'loginFBCtrl'
            }
        }


    })


    .state('tab.favorites', {
        url: '/favorites',
        views: {
            'tab-login': {
                templateUrl: 'templates/favorites.html',
                controller: 'profileCtrl'
            }
        }

    })


    .state('tab.editprofile', {
        url: '/editprofile',
        views: {
            'tab-login': {
                templateUrl: 'templates/editprofile.html',
                controller: 'editProfileCtrl'
            }
        }

    })


    .state('tab.filterby', {
        url: '/filterby',
        views: {
            'tab-dash': {
                templateUrl: 'templates/filterby.html',
                controller: 'filterByCtrl'
            }
        }

    })








    .state('tab.sortby', {
        url: '/sortby',
        views: {
            'tab-dash': {
                templateUrl: 'templates/sortby.html',
                controller: 'sortByCtrl'
            }
        }

    })


    .state('tab.myorders', {
        url: '/myorders',
        views: {
            'tab-login': {
                templateUrl: 'templates/myorders.html',
                controller: 'myOrdersCtrl'
            }
        }


    })



    .state('tab.payment', {
        url: '/payment',
        views: {
            'tab-dash': {
                templateUrl: 'templates/payment.html',
                controller: 'paymentCtrl'
            }
        }


    })



    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
            }
        }
    })


    .state('tab.productpage', {
        url: '/productpage',
        views: {
            'tab-dash': {
                templateUrl: 'templates/productpage.html',
                controller: 'productPageCtrl'
            }
        }

    })


    /** branding */


    .state('tab.brands', {
        url: '/brands',
        views: {
            'tab-brands': {
                templateUrl: 'templates/tab-brands.html',
                controller: 'BrandCtrl'
            }
        }
    })


    .state('tab.filterbyBrand', {
        url: '/filterbyBrand',
        views: {
            'tab-brands': {
                templateUrl: 'templates/filterbyBrand.html',
                controller: 'filterByBrandCtrl'
            }
        }

    })








    .state('tab.sortbyBrand', {
        url: '/sortbyBrand',
        views: {
            'tab-brands': {
                templateUrl: 'templates/sortbyBrand.html',
                controller: 'sortByBrandCtrl'
            }
        }

    })


    .state('tab.brandpage', {
        url: '/brandpage',
        views: {
            'tab-brands': {
                templateUrl: 'templates/brandpage.html',
                controller: 'brandPageCtrl'
            }
        }

    });



    /** branding */
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/brands');

});