<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default6.aspx.cs" Inherits="Default6" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <%--Start CSS--%>
    <link href="CSS/CustomStyleSheet.css" rel="stylesheet" />
    <link href="CSS/SlideMenu.css" rel="stylesheet" />
    <link href="CSS/authenty.css" rel="stylesheet" />
    <link href="CSS/Amazon.css" rel="stylesheet" />
    <link href="CSS/customStyleSheet.css" rel="stylesheet" />
    <link href="CSS/bootstrap.css" rel="stylesheet" />
    <link href="CSS/bootstrap-theme.css" rel="stylesheet" />
    <%--End CSS--%>

    <%--Start JS--%>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script src="SCRIPT/jquery-2.1.1.js"></script>
    <script src="//code.jquery.com/jquery-1.9.1.js"></script>
    <script src="//code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    <script src="SCRIPT/bootstrap.js"></script>
    <script src="SCRIPT/jquery.bootstrap.wizard.js"></script>
    <script src="SCRIPT/knockout.validation.js"></script>
    <script src="SCRIPT/knockout-3.0.js"></script>
    <script src="SCRIPT/Popover.js"></script>
    <script src="SCRIPT/PushMenuLeftAndRight.js"></script>
    <script src="SCRIPT/FacebookLogin.js"></script>
    <title></title>
</head>
<body class="cbp-spmenu-push">
    
    <div id="alphaLayer">
        <!--Begin Header-->
        <div id="headerNav" class="refresh">
            <div class="navbar-header">
                <button id="showLeftPush" type="button" class="navbar-toggle btnLeftMenu">
                    <span class="sr-only">Toggle Navigation</span>
                    <span style="background-color: beige;" class="icon-bar"></span>
                    <span style="background-color: beige;" class="icon-bar"></span>
                    <span style="background-color: beige;" class="icon-bar"></span>
                </button>
                <button id="showRightPush" type="button" class="navbar-toggle btnRightMenu">
                    <span>
                        <img src="IMAGE/ecommerce4.png" />
                    </span>
                    <span class="cart-item badge" style="margin-right: 3px;"><span data-bind="text: itemCount" class="cart-item"></span></span>
                </button>
            </div>
            <div id="navbarCollapse" class="collapse navbar-collapse">
                <div id="topHeader" class="row">
                    <div class="innerPadding col-lg-12">
                        <a href="#">
                            <div id="help_top">
                                <div id="help_top_img">
                                </div>
                            </div>
                        </a>
                        <ul class="nav navbar-nav">
                            <li id="freshLogo">
                                <a href="#" id="fresh_logo_link">
                                    <img src="#" alt="AmazonFresh Home" />
                                    <span></span>
                                </a>
                            </li>
                            <li class="dropdown dropdown-menu-on-hover pointer">
                                <a id="A4" class="dropdown-toggle border-on-hover" data-toggle="dropdown" style="color: beige">WishList <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li class="list-group-item-text"><span>Your Wish List is Emply.</span></li>
                                </ul>
                            </li>
                            <li class="pointer">
                                <a id="A5" class="border-on-hover" style="color: beige">Your Deliveries </a>
                            </li>
                            <li class="pointer">
                                <a id="A3" class="border-on-hover" style="color: beige">Messages</a>
                            </li>
                            <li class="pointer">
                                <a id="A6" class="border-on-hover" style="color: beige">Past Purchases</a>
                            </li>
                            <li>
                                <ul class="nav navbar-nav">
                                    <li><a href="https://www.facebook.com" target="_blank" xclass="facebook">&nbsp;<img src="IMAGE/FacebookIcon.png" /></a></li>
                                    <li><a href="https://twitter.com" target="_blank" xclass="twitter">&nbsp;<img src="IMAGE/twitter.png" /></a></li>
                                    <li><a href="https://plus.google.com" target="_blank" xclass="google-plus">&nbsp;<img src="IMAGE/google-plus.png" /></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="bottomHeader" class="row" style="display: none;">
                    <div class="col-lg-12">
                        <ul class="nav navbar-nav">
                            <li class="dropdown dropdown-menu-on-hover col-lg-2 text-center" style="padding-top: 10px;">
                                <button id="shopButton" class="btn dropdown-toggle" data-toggle="dropdown">Shop By Department<span class="caret"></span></button>
                                <ul class="dropdown-menu" role="menu" data-bind="foreach: categories">
                                    <li class="list-group-item-text border-on-hover">
                                        <a href="#" data-bind="text: category_name, value: category_id, click: $parent.showCategoryItem"></a>
                                        <ul class="dropdown-menu dropdown-menu1 toggle-left" role="menu" data-bind="foreach: subCategories">
                                            <li class="list-group-item-text border-on-hover">
                                                <a href="#" data-bind="text: subCategory_name, value: subCategory_id, click: $parent.showCategoryItem"></a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="col-lg-6">
                                <div class=" input-group" style="margin-top: 10px;">
                                    <input type="text" class="form-control" placeholder="Search" style="float: left" />
                                    <a class="input-group-addon">Go</a>
                                </div>
                            </li>
                            <li class="dropdown dropdown-menu-on-hover pointer">
                                <a id="btnShoppingCart" class="dropdown-toggle border-on-hover" style="padding: 5px 10px 5px 10px;" data-toggle="dropdown">
                                    <span>
                                        <img src="Image/ecommerce4.png" />
                                    </span>
                                    <span id="cart_items" class="cart-item menu-font-color" data-bind="text: itemCount"></span>
                                    <span class="menu-font-color">Items </span>
                                    <div class="caret"></div>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li class="list-group-item-text"><span data-bind="text: itemCountMessage"></span></li>
                                    <li class="list-group-item-text">
                                        <button id="btnViewCart" class="btn btn-warning btn-block">
                                            <span>View Cart ( <span data-bind="text: itemCount" class="cart-item"></span>items )</span>
                                        </button>
                                    </li>
                                </ul>


                            </li>
                            <li class="dropdown dropdown-menu-on-hover pointer">
                                <a id="btnSignIn" class="dropdown-toggle border-on-hover" style="padding: 5px 10px 5px 10px;" data-toggle="dropdown">
                                    <span class="btn-line-1 menu-font-color">Hello, Sign In</span>
                                    <span class="btn-line-2 menu-font-color font-bold">MyAccount <span class="caret"></span></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    <li class="list-group-item-text">
                                        <button id="btnSignInView" class="btn btn-warning btn-block">Sign In</button>
                                        <span>New Customer?<a href="#">Start here</a></span>
                                    </li>

                                    <li class="taskbar_menubutton" title="Your Account">
                                        <a href="#" id="your_account_link">Your Account</a>
                                    </li>
                                    <li class="taskbar_menubutton" title="Manage Your Dash">
                                        <a href="#" id="manage_your_rio_link">Manage Your Dash</a>
                                    </li>
                                    <li class="taskbar_menubutton" title="Help">
                                        <a href="#" id="help_link">Help</a>
                                    </li>
                                    <li class="taskbar_menubutton" id="signout" title="Sign Out">
                                        <a href="#" id="signout_link">SignOut</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown dropdown-menu-on-hover pointer">
                                <a id="btnSpecialOffer" class="border-on-hover" style="padding: 5px 10px 5px 10px;">
                                    <span class="btn-line-1 menu-font-color">Free Delivery on</span>
                                    <span class="btn-line-2 menu-font-color font-bold">$50.00 and Over</span></a>
                            </li>
                            <li class="dropdown dropdown-menu-on-hover pointer">
                                <a id="A2" class="border-on-hover" style="padding: 5px 10px 5px 10px;">
                                    <span class="btn-line-1 menu-font-color">Order By Phone</span>
                                    <span class="btn-line-2 menu-font-color font-bold">111-111-1111<span><i class="glyphicon glyphicon-phone"></i></span></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal col-lg-12" id="loginModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title">AmazonFresh Delivers Groceries and More to Your Door</h3>
                        </div>
                        <br />
                        <div class="modal-body">
                            <div id="divLoginModal" class="margin-top-medium table-details-modal">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="rightborder">
                                                    <div id="iconbox">
                                                        <div id="icontext1" class="icontext">
                                                            <img id="selecticon1" src="Image/Search_icon2.png" class="selecticon" />
                                                            Grocery
                                                        </div>
                                                        <div id="Div2" class="icontext">
                                                            <img src="Image/Search_icon2.png" class="selecticon" />
                                                            Amazon.com
                                                            <br />
                                                            Items
                                                        </div>
                                                        <div id="Div3" class="icontext">
                                                            <img src="Image/Search_icon2.png" class="selecticon" />
                                                            Neighborhood Shops &amp; Restaurants
                                                        </div>
                                                    </div>

                                                    <div id="introprops">
                                                        <ul>
                                                            <li>Same-day and early morning delivery</li>
                                                            <li>Huge selection, from milk to electronics</li>
                                                            <li>Discover products from local shops and restaurants</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="zipbox">
                                                    <div style="font-weight: 500;">
                                                        Check your zip code to see if we
                                            <br />
                                                        deliver to your area: 

                                                    </div>
                                                    <div id="zipentry" class="zipentry">
                                                        <form method="post" action="zipEntrySubmit" name="zipEntryForm">
                                                            <input name="referer" value="" type="hidden" />
                                                            <input name="zip" value="" maxlength="10" class="form-control" placeholder="Enter your zipcode" type="text" />
                                                            <input id="btncheckZipcode" value="Check" type="button" class="btn btn-success" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        
        <div id="unreadUrgentMessages" class="tab-pane">
            

        </div>

        <div id="deliveriesMenu" class="menu tab-pane" tabindex="-1">
            <div class="message">
                <p class="messagebody">You have no upcoming deliveries</p>
            </div>
            <div class="message">
                Click here to
                <a href="#AllOrders">
                    view all orders in
                    <strong>Your Account</strong>
                </a>
            </div> 
            <div class="messagepopupoption">
                <a href="javascript:closeOpenMenu()">x close</a>
            </div>
        </div>

        <div id="messagesMenu" class="menu tab-pane" tabindex="-1">
            <input type="hidden" name="refId" value="419-256569-5689447"/>
            <div class="message">
                <a class="messagebody">You have no messages</a>
            </div>
            <div class="messagepopupoption">
                <a href="javascript:closeOpenMenu()">x close</a>
            </div>
        </div>

        <div id="lightboxblockout" class="centered tab-pane">
            <div id="lightbox">
                <div id="lb-cancel"></div>
                <div id="lb-preloaded"></div>
                <div id="lb-ondemand"></div>
            </div>
        </div>

        <div id="orderProcessing" class="tab-pane">
            <div id="orderCheckoutSpinner">
                <div id="spinnerText">We're processing your order.</div>
                <div id="spinnerImg">
                    <img src="#" id="greenTruck" alt=""/>
                </div>
            </div>
        </div>
        <!--End of Header-->
        
        <div id="pageWrapper" class="hasCart tab-pane" style="display: none; margin-top: 100px;">
            <div id="shoppingCart">

            </div>
            <div id="pageContent" >
                <div id="topBox">
                     <div id="slideshow" class="carousel slide col-lg-9 padding-none">
                            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                                <!-- Indicators -->
                                <ol class="carousel-indicators" style="text-align: right;">
                                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="4"></li>
                                </ol>
                                <!-- Wrapper for slides -->
                                <div class="carousel-inner">
                                    <div class="item active">
                                        <img src="Image/slideImage1.jpg" />
                                    </div>
                                    <div class="item ">
                                        <img src="Image/slideImage2.jpg" />
                                    </div>
                                    <div class="item ">
                                        <img src="Image/slideImage3.jpg" />
                                    </div>
                                    <div class="item ">
                                        <img src="Image/slideImage4.jpg" />
                                    </div>
                                    <div class="item ">
                                        <img src="Image/slideImage5.jpg" />
                                    </div>
                                </div>
                                <!-- Controls -->
                                <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                    <span class="glyphicon glyphicon-chevron-left" style="color: black;"></span>
                                </a>
                                <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                    <span class="glyphicon glyphicon-chevron-right" style="color: black;"></span>
                                </a>
                            </div>
                        </div>
                </div>
                <div id="middleBox">
                    <div id="middleRightBox">
                        <!-- BOX 4 (SPOTLIGHT) -->
                        <div class="merchBox" id="spotlightBox">
                            <div class="merchslot">
                                <a href="/Category?cat=spotlight&amp;appendmp=true&amp;pf_rd_s=center-4&amp;pf_rd_p=1769645262&amp;pf_rd_t=101&amp;pf_rd_i=1&amp;pf_rd_r=0GVR04PYTKKEKT3S73V9">
                                    <img class="largeimg" src="https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/spotlight/NeighborhoodSpotlight._V342373485_.jpg"/></a>
                            </div>

                        </div>
                        <!-- MOBILE -->
                        <div class="featureHighlight">
                            <strong>Shop any time, anywhere with our mobile apps.</strong>
                            Shop our complete grocery and selected Amazon.com aisles, choose home delivery times, view past purchases and place your order quickly and easily. Enjoy convenient ways to shop for groceries, including search and browse, barcode scanning and expert picks.
                        <div class="links">
                            <a href="http://www.amazon.com/dp/B005DTBAU2" class="first">Get Android app from Amazon Appstore</a><br />
                            <a href="http://itunes.apple.com/us/app/amazonfresh/id474067631?ls=1&amp;mt=8">Get iPhone app from iTunes</a><br />
                            <a href="https://fresh.amazon.com//Category?cat=mobile"><strong>Learn More</strong></a>
                        </div>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/mobile/mobile-trio" />
                        </div>
                    </div>

                </div>
                <div id="bottomBox"></div>
                <div class="amg-adstripe, gatewayBtfAmg" id="DA_hp_btf">
                    <div id="DA_hpb"></div>
                </div>
            </div>
        </div>
    </div>
    <img src="Image/slideImage5.jpg" style="display: none;"/>
    <div id="refreshFooter" style="display: none;">
        <div id="column1" class="column">
            <a href="#">Help</a>
            <a href="#">Condition of Use</a>
            <a href="#">Privacy Notice</a>
        </div>
        <div id="column2" class="column">
            <a href="#">About</a>
            <a href="#">Career</a>
        </div>
        <div id="copyrightAndDisclaimer">
            © 2007-2014 IndianGroceryOnline, LLC or its affiliates&nbsp;
        All items sold by and ship from IndianGroceryOnline unless otherwise specified.
        </div>
    </div>
    <script type="text/javascript">

        $(document).ready(function () {
            $("#loginModal").show();
            $("#btncheckZipcode").click(function () {
                $("#loginModal").hide();
                $("#bottomHeader").show();
                $("#pageWrapper").show();
            });
        });
        </script>
     <form id="form1" runat="server">
    <asp:ScriptManager ID="scriptmanager2" runat="server">
        <Services>
            <asp:ServiceReference Path="http://localhost:62662/FinalWebsite/category.asmx" />
            </Services>
        </asp:ScriptManager>
         </form>
    <script src="SCRIPT/Script.js"></script>
    <script src="SCRIPT/ItemViewModel.js"></script>
</body>
</html>
