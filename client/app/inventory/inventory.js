'use strict';

angular.module('deliAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('inventory', {
        url: '/inventory',
        templateUrl: 'app/inventory/inventory.html',
        controller: 'CreateCtrl'
      });
  });