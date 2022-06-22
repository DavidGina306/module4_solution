(function () {
  "use strict";

  angular.module("data").config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise("/");

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state("home", {
        url: "/",
        templateUrl: "src/app/templates/home.template.html",
      })

      // Categories
      .state("mainList", {
        url: "/main-list",
        templateUrl: "src/app/templates/main-categories.template.html",
        controller: "CategoriesController as mainList",
        resolve: {
          items: [
            "DataService",
            function (DataService) {
              return DataService.getAllCategories();
            },
          ],
        },
      })

      .state("itemDetail", {
        url: "/item-detail/{itemId}",
        templateUrl: "src/app/templates/item-detail.template.html",
        controller: "ItemDetailController as itemDetail",
        resolve: {
          item: [
            "$stateParams",
            "DataService",
            function ($stateParams, DataService) {
              return DataService.getItemsForCategory($stateParams.itemId).then(
                function (items) {
                  return items.menu_items;
                }
              );
            },
          ],
        },
      });
  }
})();
