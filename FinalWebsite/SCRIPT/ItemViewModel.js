//ItemVM = new ItemViewModal();
//view_model = new CartViewModal();
//Used for KnockoutJS field validations
//ko.validation.configure({
//    insertMessages: false,
//    messagesOnModified: true,
//    decorateElement: true, //To ensure that the input control is highlighted when it fails validation
//    errorElementClass: "input-validation-error", //The custom class created to decorate the input control
//    deep: false,
//    enableErrorDetails: true
//});


//ko.validation.rules['selectedItemNotCaption'] = {
//    validator: function (val) {
//        return val !== undefined
//    },
//    message: 'Please select an option',
//};
//ko.validation.registerExtenders();

function ItemViewModal() {
    var self = this;
    self.item_id = ko.observable("");
    self.item_code = ko.observable("");
    self.items = ko.observableArray([]);
    self.viewItem = function (item_code) {
        alert("hi");
    }
    self.addToCart = function (itemCode) {
        alert("hello");
    }
}
//var ViewModel = function () {

//    var Product = function (id, name, price) {
//        this.id = ko.observable(id);
//        this.name = ko.observable(name);
//        this.price = ko.observable(price);
//    };
//    var CartItem = function (product, quantity) {
//        var self = this; // Scope Trick

//        self.product = ko.observable(product);
//        self.quantity = ko.observable(quantity || 1);

//        self.cost = ko.computed(function () {
//            return self.product().price() * self.quantity();
//        });
//    };

//        var self = this; 
//        self.sales_tax = ko.observable(0.07);
//        self.shipping_cost = ko.observable(10.00);
//        self.cart = ko.observableArray();
//        self.products = ko.observableArray();
//        self.subtotal = ko.computed(function () {
//            var subtotal = 0;
//            $(self.cart()).each(function (index, cart_item) {
//                subtotal += cart_item.cost();
//            });
//            return subtotal;
//        });
//        self.tax = ko.computed(function () {
//            return self.subtotal() * self.sales_tax();
//        });

//        self.total = ko.computed(function () {
//            return self.shipping_cost() + self.subtotal() + self.tax();
//        });
//        self.addToCart = function (product, event) {
//            alert("hi");
//            var cart_item = new CartItem(product, 1);
//            self.cart.push(cart_item);
//        };
//        self.removeFromCart = function (cart_item, event) {
//            self.cart.remove(cart_item);
//        };
//    }
    
//    view_model.products([
//      new Product(1, "Laptop", 1229.99),
//      new Product(2, "Mouse", 14.95),
//      new Product(3, "Keyboard", 29.99),
//      new Product(4, "Monitor", 278.93)
//    ]);
   

//Used for KnockoutJS field validations
//ko.validation.configure({
//    insertMessages: false,
//    messagesOnModified: true,
//    decorateElement: true, //To ensure that the input control is highlighted when it fails validation
//    errorElementClass: "input-validation-error", //The custom class created to decorate the input control
//    deep: false,
//    enableErrorDetails: true
//});


//ko.validation.rules['selectedItemNotCaption'] = {
//    validator: function (val) {
//        return val !== undefined
//    },
//    message: 'Please select an option',
//};
//ko.validation.registerExtenders();

var view_model = new CartViewModal();

var Product = function (id, category, name, price, image) {
    var self = this;
    self.id = ko.observable(id);
    self.category = ko.observable(category);
    self.name = ko.observable(name);
    self.price = ko.observable(price);
    self.image = ko.observable(image);
}
var Category = function (resultItemCategory, resultItemSubCategory) {
    var self = this;
    self.category_id = ko.observable(resultItemCategory.id);
    self.category_name = ko.observable(resultItemCategory.name);
    self.subCategories = ko.observableArray();
    for (var i = 0; i < resultItemSubCategory.length ; i++) {
        self.subCategories.push(new SubCategory(resultItemSubCategory[i]));
    }
}
var SubCategory = function (resultItem) {
    var self = this;
    self.Id = ko.observable(resultItem.Id);
    self.category_id = ko.observable(resultItem.categoryId);
    self.category_name = ko.observable(resultItem.categoryName);
    self.subCategory_id = ko.observable(resultItem.subCategoryId);
    self.subCategory_name = ko.observable(resultItem.subCategoryName);
}
var CartItem = function (product, quantity) {
    var self = this;
    self.product = ko.observable(product);
    self.quantity = ko.observable(quantity || 1);
    self.cost = ko.computed(function () {
        return self.product().price() * self.quantity();
    });
}
var Image = function (id, src) {
    var self = this;
    self.imageGallery_id = ko.observable(id);
    self.imageGallery_src = ko.observable(src);
}

var Report = function (Results) {
    var self = this;
    self.Report_id = ko.observable(Results.id);
    self.Report_name = ko.observable(Results.name);
}
function CartViewModal() {
    var self = this;

    self.Report = ko.observableArray();
    self.Report_id = ko.observable("");
    self.Report_name = ko.observable("");

    self.itemCount = ko.observable(0);
    self.itemCountMessage = ko.observable("Your Shopping Cart is Empty...");
    self.sales_tax = ko.observable(0.07);
    self.shipping_cost = ko.observable(10.00);
    self.cart = ko.observableArray();
    self.products = ko.observableArray();
    self.categories = ko.observableArray();
    //*************create start*************
    self.user_id = ko.observable();
    self.user_name = ko.observable("");
    self.user_password = ko.observable("");
    self.user_email = ko.observable("");
    self.user_phone = ko.observable("");
    self.user_address = ko.observable("");
    self.user_zipcode = ko.observable("");
    self.user_city = ko.observable("");
    self.user_country = ko.observable("");
    self.user_comment = ko.observable("");
    self.user_new_customer = ko.observable("New Customer?");
    self.user_start_here = ko.observable("Start Here");
    self.user_btnSignIn = ko.observable("Sign In");
    self.user_btnSignInView = ko.observable("Sign In");
    //*************create end*************
    self.imageGallery = ko.observableArray();
    self.itemCount.subscribe(function (newValue) {
        if (newValue == 0) {
            self.itemCountMessage("Your Shopping Cart is Empty...");
        }
        else {
            self.itemCountMessage("");
        }
    });
    self.subtotal = ko.computed(function () {
        var subtotal = 0;
        $(self.cart()).each(function (index, cart_item) {
            subtotal += cart_item.cost();
        });
        return subtotal;
    });
    self.tax = ko.computed(function () {
        return self.subtotal() * self.sales_tax();
    });

    self.total = ko.computed(function () {
        return self.shipping_cost() + self.subtotal() + self.tax();
    });
    self.addToCart = function (product, event) {
        var cart_item = new CartItem(product, 1);
        self.cart.push(cart_item);
        self.itemCount(self.cart().length);
    };
    self.removeFromCart = function (cart_item, event) {
        self.cart.remove(cart_item);
        self.itemCount(self.cart().length);
    };
    self.currentFilter = ko.observable();
    self.filterProducts = ko.computed(function () {
        if (!self.currentFilter()) {
            return self.products();
        }
        else {
            return ko.utils.arrayFilter(self.products(), function (product) {
                return product.category() == self.currentFilter();
            });
        }
    });
    self.showCategoryItem = function (category, event) {
        self.category_id = ko.observable(category.category_id());
        self.category_name = ko.observable(category.category_name());
        self.currentFilter(self.category_id());
    }
    self.viewProductDetails = function () {
        $("#buttonGroup").hide();
        $("#xyz").hide();
        $("#itemList").hide();
        $("#ViewCart").hide();
        $("#product-detail").show();
    }
    self.callWebServiceCategoryList = function () {
        category.ListCategory(self.retCategoryList);
    }
    self.retCategoryList = function (results) {
        for (var i = 0; i < results.length ; i++) {
            subCategory(results[i].id, results[i]);
        }
        function subCategory(categoryID, resultCategory) {
            category.ListSubCategory(categoryID,
                    self.retSubCategoryList = function (resultSubCategory) {
                        self.categories.push(new Category(resultCategory, resultSubCategory));
                    });
        }
    }
    self.callWebServiceCreateUser = function () {
        alert("in webservice " + self.user_name() + " " + self.user_email() + " " + self.user_phone());
        category.create(self.user_name(), self.user_password(), self.user_email(), self.user_phone(), self.user_address(), self.user_zipcode(), self.user_city(), self.user_country(), self.user_comment(), self.retStatusCreateUser);
    }
    self.retStatusCreateUser = function (result) {
        alert(result.errorMessage);
    }
    self.callWebserviceSignIn = function () {
        alert("user name " + self.user_name() + " password " + self.user_password());
        category.signIn(self.user_name(), self.user_password(), self.retStatusSignIn);
    }
    self.retStatusSignIn = function (results) {
        self.user_id(results[0].id);
        self.user_name(results[0].name);
        self.user_password(results[0].password);
        self.user_email(results[0].email);
        self.user_phone(results[0].phone);
        self.user_address(results[0].address);
        self.user_zipcode(results[0].zipcode);
        self.user_city(results[0].city);
        self.user_country(results[0].country);
        self.user_comment(results[0].comment);
        self.user_new_customer("");
        self.user_start_here("");
        self.user_btnSignIn(results[0].name);
        self.user_btnSignInView("");
    }
    self.callWebServiceResetPassword = function () {
        category.resetPassword(self.user_email(), self.retStatusResetPassword);
    }
    self.retStatusResetPassword = function (results) {
        alert(results.errorMessage);
    }
    self.callServiceReport = function () {
        alert("2");
        ActiveReports.ReportService.ListCategory(self.retReportView);
    }
    self.retReportView = function (ListResults) {
        for (var i = 0; i < ListResults.length; i++) {
            self.Report.push(new Report(ListResults));
        }
    }
}
view_model.products([
       new Product(1, 1, "Flour1", 1229.99, "Image/image11.jpg"),
       new Product(2, 1, "Flour2", 14.95, "Image/image11.jpg"),
       new Product(3, 1, "Flour3", 29.99, "Image/image11.jpg"),
       new Product(4, 2, "Grains1", 278.93, "Image/image2.jpg"),
       new Product(1, 2, "Grains2", 1229.99, "Image/image2.jpg"),
       new Product(2, 2, "Grains3", 14.95, "Image/image2.jpg"),
       new Product(3, 2, "Grains5", 29.99, "Image/image2.jpg"),
       new Product(4, 2, "Grains6", 278.93, "Image/image2.jpg"),
       new Product(1, 2, "Grains7", 1229.99, "Image/image2.jpg"),
       new Product(2, 3, "Fresh Vegetables1", 14.95, "Image/image10.jpg"),
       new Product(3, 3, "Fresh Vegetables2", 29.99, "Image/image10.jpg"),
       new Product(4, 3, "Fresh Vegetables3", 278.93, "Image/image10.jpg"),
       new Product(1, 4, "Frozen Vegetables1", 1229.99, "Image/image10.jpg"),
       new Product(2, 4, "Frozen Vegetables2", 14.95, "Image/image10.jpg"),
       new Product(3, 4, "Frozen Vegetables3", 29.99, "Image/image10.jpg"),
       new Product(4, 5, "Snacks1", 278.93, "Image/image6.jpg"),
       new Product(1, 5, "Snacks2", 1229.99, "Image/image6.jpg"),
       new Product(2, 5, "Snacks3", 14.95, "Image/image6.jpg"),
       new Product(3, 5, "Snacks4", 29.99, "Image/image6.jpg"),
       new Product(4, 5, "Snacks5", 278.93, "Image/image6.jpg"),
       new Product(1, 6, "Spices1", 1229.99, "Image/chanamasala.jpg"),
       new Product(2, 6, "Spices2", 14.95, "Image/chanamasala.jpg"),
       new Product(3, 6, "Spices3", 29.99, "Image/chanamasala.jpg"),
       new Product(4, 6, "Spices4", 278.93, "Image/chanamasala.jpg"),
       new Product(1, 6, "Spices5", 1229.99, "Image/chanamasala.jpg"),
       new Product(2, 7, "Oil And Beverages1", 14.95, "Image/image3.jpg"),
       new Product(3, 7, "Oil And Beverages2", 29.99, "Image/image7.jpg"),
       new Product(4, 7, "Oil And Beverages3", 278.93, "Image/image8.jpg"),
       new Product(1, 7, "Oil And Beverages4", 1229.99, "Image/image9.jpg"),
       new Product(2, 8, "Chutney and Souces1", 14.95, "Image/image9.jpg"),
       new Product(2, 8, "Chutney and Souces2", 14.95, "Image/image9.jpg"),
       new Product(2, 8, "Chutney and Souces3", 14.95, "Image/image9.jpg"),
       new Product(2, 8, "Chutney and Souces4", 14.95, "Image/image9.jpg"),
       new Product(2, 8, "Chutney and Souces5", 14.95, "Image/image9.jpg"),
       new Product(2, 8, "Chutney and Souces6", 14.95, "Image/image9.jpg"),
       new Product(3, 9, "Pickles1", 29.99, "Image/image2.jpg"),
       new Product(3, 9, "Pickles2", 29.99, "Image/image2.jpg"),
       new Product(3, 9, "Pickles3", 29.99, "Image/image2.jpg"),
       new Product(3, 9, "Pickles4", 29.99, "Image/image2.jpg"),
       new Product(3, 9, "Pickles5", 29.99, "Image/image2.jpg"),
       new Product(3, 9, "Pickles6", 29.99, "Image/image2.jpg"),
       new Product(4, 10, "Pooja Items1", 278.93, "Image/image5.jpg"),
       new Product(4, 10, "Pooja Items2", 278.93, "Image/image5.jpg"),
       new Product(4, 10, "Pooja Items3", 278.93, "Image/image5.jpg"),
       new Product(4, 11, "Tiffin Service1", 278.93, "Image/image7.jpg"),
       new Product(4, 11, "Tiffin Service2", 278.93, "Image/image7.jpg"),
       new Product(4, 11, "Tiffin Service3", 278.93, "Image/image7.jpg"),
       new Product(4, 11, "Tiffin Service4", 278.93, "Image/image7.jpg"),
       new Product(4, 12, "Vessels1", 278.93, "Image/image3.jpg"),
       new Product(4, 12, "Vessels2", 278.93, "Image/image3.jpg"),
       new Product(4, 13, "Fruits1", 278.93, "Image/image1.jpg"),
       new Product(4, 13, "Fruits2", 278.93, "Image/image1.jpg")
]);
view_model.imageGallery([
    new Image(1, "Image/image1.jpg"),
    new Image(1, "Image/image2.jpg"),
    new Image(1, "Image/image3.jpg"),
    new Image(1, "Image/image4.jpg"),
    new Image(1, "Image/image5.jpg"),
    new Image(1, "Image/image6.jpg"),
    new Image(1, "Image/image7.jpg")
]);