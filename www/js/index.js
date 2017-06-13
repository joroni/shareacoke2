/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var base_url = "http://ec2-54-186-121-116.us-west-2.compute.amazonaws.com/iknow/server_side";
var app = {

    // Url/Path to the augmented reality experience you would like to load
    //arExperienceUrl: "http://192.168.1.5:3000/experience/index.html",
    arExperienceUrl: base_url + "/ar/" + "experience/index.html",
    // The features your augmented reality experience requires, only define the ones you really need
    requiredFeatures: ["2d_tracking", "geo"],
    // Represents the device capability of launching augmented reality experiences with specific features
    isDeviceSupported: false,
    // Additional startup settings, for now the only setting available is camera_position (back|front)
    startupConfiguration: {
        "camera_position": "back"
    },
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler

    onDeviceReady: function() {

        app.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
        app.wikitudePlugin.isDeviceSupported(app.onDeviceSupported, app.onDeviceNotSupported, app.requiredFeatures);
        var launchDemoButton = document.getElementById('launch-demo');
        launchDemoButton.onclick = function() {
            app.loadARchitectWorld();
            alert('Hi');
        }
    },
    loadARchitectWorld: function() {
        app.wikitudePlugin.isDeviceSupported(function() {
            app.wikitudePlugin.loadARchitectWorld(function successFn(loadedURL) {}, function errorFn(error) {
                    alert('Loading AR web view failed: ' + error);
                },


                // cordova.file.dataDirectory + 'www/experience/index.html', ['2d_tracking'], { camera_position: 'back' }
                cordova.file.dataDirectory + arExperienceUrl, ['2d_tracking'], { camera_position: 'back' }
            );
        }, function(errorMessage) {
            alert(errorMessage);
        }, ['2d_tracking']);
    },
    // Callback if the device supports all required features
    onDeviceSupported: function() {
        app.wikitudePlugin.loadARchitectWorld(
            app.onARExperienceLoadedSuccessful,
            app.onARExperienceLoadError,
            app.arExperienceUrl,
            app.requiredFeatures,
            app.startupConfiguration
        );
    },
    // Callback if the device does not support all required features
    onDeviceNotSupported: function(errorMessage) {
        alert(errorMessage);
    },
    // Callback if your AR experience loaded successful
    onARExperienceLoadedSuccessful: function(loadedURL) {
        /* Respond to successful augmented reality experience loading if you need to */
    },
    // Callback if your AR experience did not load successful
    onARExperienceLoadError: function(errorMessage) {
        alert('Loading AR web view failed: ' + errorMessage);
    }

};

//app.initialize();

/*
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
        var launchDemoButton = document.getElementById('launch-demo');
        launchDemoButton.onclick = function() {
            app.loadARchitectWorld();
        }
    },
    loadARchitectWorld: function() {
        app.wikitudePlugin.isDeviceSupported(function() {
            app.wikitudePlugin.loadARchitectWorld(function successFn(loadedURL) {}, function errorFn(error) {
                    alert('Loading AR web view failed: ' + error);
                },
                cordova.file.dataDirectory + 'www/experience/index.html', ['2d_tracking'], { camera_position: 'back' }
            );
        }, function(errorMessage) {
            alert(errorMessage);
        }, ['2d_tracking']);
    }
};*/