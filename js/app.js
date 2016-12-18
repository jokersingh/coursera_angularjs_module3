(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyCtrl = this;
    toBuyCtrl.toBuyList = ShoppingListCheckOffService.getToBuyList();
    toBuyCtrl.boughtItem = function(itemIndex){
      ShoppingListCheckOffService.boughtItem(itemIndex);
    };
  }
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBoughtCtrl = this;
    alreadyBoughtCtrl.alreadyBoughtList = ShoppingListCheckOffService.getAlreadyBoughtList();
    console.log('AlreadyBoughtController');
  }

  function ShoppingListCheckOffService(){
    var service = this;
    var toBuyList = [{
      name : 'Cookies',
      quantity : 10
    },{
      name : 'Lemon Pie',
      quantity : 1
    },{
      name : 'Cake',
      quantity : 5
    },{
      name : 'Coffee',
      quantity : 2
    },{
      name : 'Juice',
      quantity : 7
    }];
    var alreadyBoughtList = [];
    service.getToBuyList = function() {
     return toBuyList;
    };
    service.boughtItem = function(itemIndex){
      alreadyBoughtList.push(toBuyList[itemIndex]);
      toBuyList.splice(itemIndex,1);
    }

    service.getAlreadyBoughtList = function (){
      return alreadyBoughtList;
    }
  }
})();
