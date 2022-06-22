(function () {
  "use strict";

  angular.module("data").component("items", {
    templateUrl: "src/app/templates/item-detail.template.html",
    bindings: {
      items: "<",
    },
  });
})();
