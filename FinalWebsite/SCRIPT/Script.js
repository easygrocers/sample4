$(document).ready(function () {
    $("#print").click(function () {
        alert("1");
        view_model.callServiceReport();
    });
    $("#btnUserResetPassword").click(function () {
        view_model.callWebServiceResetPassword();
    });
    $("#btnUserSignIn").click(function () {
        view_model.callWebserviceSignIn();
    });
    $("#btnSignInFacebook").click(function () {
        checkLoginState();
    });
    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_UK/all.js', function () {
        FB.init({
            appId: '643816505732279',
            cookie: true,  // enable cookies to allow the server to access 
            // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.1' // use version 2.1
        });
        $('#loginbutton,#feedbutton').removeAttr('disabled');
    });
    //$("#btnSignUp").click(function () {
    //    view_model.callWebServiceCreateUser();
    //});
    view_model.callWebServiceCategoryList();
    $("#btnContactUs").click(function () {
        $("#buttonGroup").hide();
        $("#itemList").hide();
        $("#xyz").hide();
        $("#ViewCart").hide();
        $("#product-detail").hide();
        $("#viewContactUs").show();
    });

    $("#btnViewCart").click(function () {
        $("#buttonGroup").hide();
        $("#itemList").hide();
        $("#xyz").hide();
        $("#ViewCart").show();
        $("#product-detail").hide();
    });
    $("#btnSignInView").click(function () {
        //alert("hi");
        $("#buttonGroup").hide();
        $("#itemList").hide();
        $("#xyz").hide();
        $("#ViewCart").hide();
        $("#product-detail").hide();
        $("#viewContactUs").hide();
        $("#viewSignIn").show();
    });
    $("#btnSignUp").click(function () {
        //alert("hi");
        $("#buttonGroup").hide();
        $("#itemList").hide();
        $("#xyz").hide();
        $("#ViewCart").hide();
        $("#product-detail").hide();
        $("#viewContactUs").hide();
        $("#viewSignIn").hide();
        $("#signup_window").show();
    });
    $("#btnContinue").click(function () {
        $("#buttonGroup").hide();
        $("#itemList").hide();
        $("#xyz").hide();
        $("#ViewCart").hide();
        $("#product-detail").hide();
        $("#viewContactUs").hide();
        $("#viewSignIn").hide();
        $("#signup_window").hide();
        $("#newDeliveryAddress").show();
    });
    $("#btnDeliveryContinue").click(function () {
        $("#buttonGroup").hide();
        $("#itemList").hide();
        $("#xyz").hide();
        $("#ViewCart").hide();
        $("#product-detail").hide();
        $("#viewContactUs").hide();
        $("#viewSignIn").show();
        $("#signup_window").hide();
        $("#newDeliveryAddress").hide();
    });

    $("#backToItemList").click(function () {
        $("#buttonGroup").show();
        $("#xyz").hide();
        $("#itemList").show();
        $("#ViewCart").hide();
        $("#product-detail").hide();
    });

    $("#btnitemListTable").click(function () {
        $("#itemListInline").hide();
        $("#itemListTable").show();
    });
    $("#btnitemListInline").click(function () {
        $("#itemListTable").hide();
        $("#itemListInline").show();
    });

    $('.dropdown-toggle').dropdown();

    var showLeftPush = document.getElementById('showLeftPush'),
        showRightPush = document.getElementById('showRightPush'),
        menuLeft = document.getElementById('slideMenuListLeft'),
        menuRight = document.getElementById('slideMenuListRight'),
        body = document.body;
    showLeftPush.onclick = function () {
        classie.toggle(this, 'active');
        classie.toggle(body, 'cbp-spmenu-push-toright');
        classie.toggle(menuLeft, 'cbp-spmenu-open');
        disableOther('showLeftPush');
    };
    showRightPush.onclick = function () {
        classie.toggle(this, 'active');
        classie.toggle(body, 'cbp-spmenu-push-toleft');
        classie.toggle(menuRight, 'cbp-spmenu-open');
        disableOther('showRightPush');
    };
    function disableOther(button) {
        if (button !== 'showLeftPush') {
            classie.toggle(showLeftPush, 'disabled');
        }
        if (button !== 'showRightPush') {
            classie.toggle(showRightPush, 'disabled');
        }
    }
    ko.applyBindings(view_model, document.getElementById("view_model"));
});




function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function formatValue(number) {
    var formattedvalue = "$" + numberWithCommas(parseFloat(number).toFixed(2));
    return formattedvalue;
}
function removeCommas(x) {
    a = x.replace(/\,/g, '');
    a = a.substring(1);
    return a;
}
$('body').on('keypress', 'input, select', function (e) {
    var self = $(this)
    , form = $('body')
      , focusable = form.find('input,a,button,select,textarea').filter(':enabled')
      , next
    ;
    if (e.keyCode == 13) {
        var nextIndex = focusable.index(this) == focusable.length - 1 ? 0 : focusable.index(this) + 1;
        next = focusable.eq(nextIndex);
        next.focus();
        if (next.hasClass('xyz')) {
            next.trigger("click");
        }
        return false;
    }
});