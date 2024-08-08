var app=angular.module('prodapp',[])
app.controller('prodctr',function($scope){
    $scope.stat=0
    $scope.productlist=[
        {pid:'001',pname:'Laptop',price:'45000',image:'laptop.jpg'},
        {pid:'002',pname:'TV',price:'30000',image:'TV.jpg'},
        {pid:'003',pname:'Mobile',price:'50000',image:'Mobile.jpg'},
        {pid:'004',pname:'Teblet',price:'45000',image:'Tablet.jpg'}
    ];
    $scope.cart = [];
    $scope.total = 0;

    $scope.addtocart = function(item, q) {
        if (q <= 0) {
            alert("Quantity must be greater than 0.");
            return;
        }
        var cartItem = angular.copy(item);
        cartItem.qty = q;
        cartItem.total = item.price * q;
        $scope.cart.push(cartItem);
        $scope.total += cartItem.total;
    };

    $scope.getCartTotal = function() {
        return $scope.cart.reduce((acc, item) => acc + item.total, 0);
    };
})