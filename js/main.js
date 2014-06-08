(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'my product name',
    price: 4.99,
    description: 'some awesome description'
  }
})();
