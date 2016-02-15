angular.module('ngl.gator', [])

.factory('gator', function ($window) { return $window.Gator; })

.run(function (gator) {
  'use strict';

  angular.element.prototype.gator = function (/* events, selector, callback */) {
    var element = this[0];
    var delegate = gator(element);
    delegate.on.apply(delegate, arguments);
    return this;
  };
});
