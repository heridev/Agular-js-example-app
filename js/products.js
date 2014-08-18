(function(){
  var app = angular.module('storeProducts', [ ]);

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

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'panels.html',
      controller: function(){
        this.tab = 1;
        this.selectTab = function(setTab){
          this.tab = setTab;
        };

        this.isSelectedTab = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      //this is the alias used for the controller
      controllerAs: 'panel'
    };
  });
})();

