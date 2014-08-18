(function(){
  //var app = angular.module('store', []);
  var app = angular.module('store', ['storeProducts']);

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
