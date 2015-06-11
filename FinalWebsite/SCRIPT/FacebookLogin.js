
function checkLoginState() {
    alert("hi");
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            
            console.log(response.authResponse.accessToken);
            // the user is logged in and has authenticated your
            // app, and response.authResponse supplies
            // the user's ID, a valid access token, a signed
            // request, and the time the access token 
            // and signed request each expire
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
            testAPI();
        } else if (response.status === 'not_authorized') {
            // the user is logged in to Facebook, 
            // but has not authenticated your app
            document.getElementById('status').innerHTML = 'Please log ' +
         'into this app.';
        } else {
            // the user isn't logged in to Facebook.
            document.getElementById('status').innerHTML = 'Please log ' +
          'into Facebook.';
            //FB.login();
        }
    });
    FB.login(function (response) {
        console.log(response);
        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function (response) {
                console.log('Good to see you, ' + response.name + '.');
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
        if (response.status === 'connected') {
            alert("hi " + response.name);
            // Logged into your app and Facebook.
        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
        }
        
    }, {
        scope: 'user_friends'
    },
    {
        scope: 'email,user_likes',
        auth_type: 'rerequest'
    },
    {
        scope: 'publish_actions',
        return_scopes: true
    });
    FB.logout(function (response) {
        // Person is now logged out
    });
}

// This is called with the results from from FB.getLoginStatus().
//function statusChangeCallback(response) {
//    console.log('statusChangeCallback');
//    console.log(response);
//    // The response object is returned with a status field that lets the
//    // app know the current login status of the person.
//    // Full docs on the response object can be found in the documentation
//    // for FB.getLoginStatus().
//    if (response.status === 'connected') {
//        // Logged into your app and Facebook.
//        //testAPI();
//        //FB.login();
//    } else if (response.status === 'not_authorized') {
//        // The person is logged into Facebook, but not your app.
//        document.getElementById('status').innerHTML = 'Please log ' +
//          'into this app.';
//    } else {
//        // The person is not logged into Facebook, so we're not sure if
//        // they are logged into this app or not.
//        document.getElementById('status').innerHTML = 'Please log ' +
//          'into Facebook.';
//    }
//}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
    
// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    alert("hello testAPI");
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function (response) {
        console.log(JSON.stringify(response));
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.name + '!';
    });

}
