(function(){
  var app = angular.module('store', []);

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelectedTab = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('panelOne', function(){
    return {
      restrict: 'E',
      templateUrl: 'tab-1.html'
    };
  });

  app.directive('panelTwo', function(){
    return {
      restrict: 'E',
      templateUrl: 'tab-2.html'
    };
  });

  app.directive('panelThree', function(){
    return {
      restrict: 'E',
      templateUrl: 'tab-3.html'
    };
  });

  app.directive('panels', function(){
    return {
      restrict: 'E',
      templateUrl: 'panels.html'
    };
  });

  var gems = [
    {
      name: 'my product name number 1',
      price: 4.99,
      description: 'some awesome description',
      canPurchase: true,
      reviews: [],
      images: [
        {
          full: 'images/product1.jpg',
          thumb: 'images/other-image.png'
        }
      ]
    },
    {
      name: 'my product name number 2',
      price: 4.99,
      description: 'some awesome description',
      canPurchase: true,
      reviews: [],
      images: [
        {
          full: 'images/product1.jpg',
          thumb: 'images/other-image.png'
        }
      ]
    },
    {
      name: 'my product name number 3',
      price: 4.99,
      description: 'some awesome description',
      canPurchase: true,
      reviews: [],
      images: [
        {
          full: 'images/product1.jpg',
          thumb: 'images/other-image.png'
        }
      ]
    },
    {
      name: 'my product name number 4',
      price: 4.99,
      description: 'some awesome description',
      canPurchase: true,
      reviews: [],
      images: [
        {
          full: 'images/product1.jpg',
          thumb: 'images/other-image.png'
        }
      ]
    }
  ]

})();
