angular.module('ngl.gator', [])

.factory('gator', function ($window) { return $window.Gator; })

.run(function (gator) {
  'use strict';

  angular.element.prototype.gator = gator;
});
