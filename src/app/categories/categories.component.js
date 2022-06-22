(function () {
'use strict';

angular.module('data')
.component('menuApp', {
  templateUrl: 'src/app/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();

