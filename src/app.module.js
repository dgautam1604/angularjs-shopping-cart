angular.module('shoppingcart',[
    'ui.router',
    'shoppingcart.shared',
    'shoppingcart.product',
    'shoppingcart.cart'
]);

angular.module('shoppingcart').config(['$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider){
    $stateProvider.state({
        name:'home',
        url:'/',
        component:'productList'
    });
    $stateProvider.state({
        name:'addProduct',
        url:'/add-Product',
        component:'addProduct'
    });
    $stateProvider.state({
        name:'productList',
        url:'/product-list',
        component:'Product List'
    });
    $stateProvider.state({
        name:'cart',
        url:'/cart',
        component:'cart'
    });
    $urlRouterProvider.otherwise('/');
}]);