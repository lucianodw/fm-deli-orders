'use strict';

angular.module('deliAppApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
    {
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'New Order',
      'link': '/create'
    },
    {
      'title': 'Search',
      'link': '/search'
    },
    {
      'title': 'Inventory',
      'link': '/inventory'
    },
    {
      'title': 'Reports',
      'link': '/reports'
    },
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });