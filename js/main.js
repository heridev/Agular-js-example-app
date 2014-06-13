(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'my product name number 1',
      price: 4.99,
      description: 'some awesome description',
      canPurchase: truem
      image: [
        {
          full: 'some-image.png',
          thumb: 'other-image.png'
        }
      ]
    },
    {
      name: 'my product name number 2',
      price: 4.99,
      description: 'some awesome description',
      canPurchase: true,
      image: [
        {
          full: 'some-image.png',
          thumb: 'other-image.png'
        }
      ]

    },
    {
      name: 'my product name number 3',
      price: 4.99,
      description: 'some awesome description',
      canPurchase: true,
      image: [
        {
          full: 'some-image.png',
          thumb: 'other-image.png'
        }
    },
    {
      name: 'my product name number 4',
      price: 4.99,
      description: 'some awesome description',
      canPurchase: true,
      image: [
        {
          full: 'some-image.png',
          thumb: 'other-image.png'
        }
    }
  ]

})();
