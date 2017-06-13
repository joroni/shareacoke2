# Sociogram for AngularJS / Ionic #

A sample application that demonstrates a lightweight approach to integrate with Facebook in your AngularJS / Ionic apps.


## Getting Started ##

1. Create an Ionic project

2. Add the inappbrowser plugin to your project

   cordova plugins add org.apache.cordova.inappbrowser

3. Replace the www folder of the Ionic project with the www folder in this repository

4. Create a Facebook app here: https://developers.facebook.com/apps.
5. Config the Facebook app. If you're using default Ionic setup, follow the following steps; if not, change `http://localhost:8100/` to your local path to your `index.html`.
    * Go to "Basic". Set "Site URL" to `http://localhost:8100/`
    * Go to "Advanced". Add these two urls to "Valid OAuth redirect URIs":
        - `https://www.facebook.com/connect/login_success.html` (for access from Cordova)
        - `http://localhost:8100/oauthcallback.html` (for access from local machine)

5. Copy the Facebook App Id and paste it as the first argument of the OpenFB.init() method invocation in the run() function in app.js.

6. To run the app in the browser: Load index.html, from a location that matches the redirect URI you defined above. For example: http://localhost/openfb/index.html

7. To run the app in Cordova: Build the Ionic project and run it as a Cordova app on your device
