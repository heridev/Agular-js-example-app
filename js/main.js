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

  var gems = [
    {
      name: 'my product name number 1',
      price: 4.99,
      description: 'some awesome description',
      canPurchase: true,
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
      images: [
        {
          full: 'images/product1.jpg',
          thumb: 'images/other-image.png'
        }
      ]
    }
  ]

})();
