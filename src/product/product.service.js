angular.module('shoppingcart.product')
.service('productService',[function(){
    this.getProducts=function(){
        return $http.get(AppConstant.urls.product);
    };
    this.addProduct=function(){

    };
    this.getProductDetails=function(){

    };
}])