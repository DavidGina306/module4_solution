(function () {
  "use strict";

  angular
    .module("data")
    .controller("CategoriesController", CategoriesController);

  CategoriesController.$inject = ["DataService", "items"];
  function CategoriesController(DataService, items) {
    var mainList = this;
    mainList.items = items;
  }
})();
