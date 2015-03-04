(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
      this.products = gems;
  });

  var gems = [
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'We need to have description',
    canPurchase: true,
  },
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: "this is a pentagonal gem",
    canPurchase: false,
  }
];

})();
