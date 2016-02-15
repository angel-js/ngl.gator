ngl.gator
=========

Angular 1.x bindings to [gator](https://github.com/ccampbell/gator)

Install
-------

    bower install ngl.gator

Include the sources

```html
<script src="bower_components/gator/gator.js"></script>
<script src="bower_components/ngl.gator/src/gator.js"></script>
```

Add `ngl.gator` to your app dependencies

```js
angular.module('app', [
  'ngl.gator'
]);
```

API
---

### `gator` service

Publishes the global `Gator` exposed by **gator** into angular's DI system

```js
angular.module('app', ['ngl.gator'])
.directive('main', function (gator) {
  return function (scope, element) {
    gator(element[0]).on( ... );
  };
});
```

### `JQLite::gator`

Wrapper to `Gator::on` method.

Uses the element bound to the directive as root delegation element

```js
angular.module('app', ['ngl.gator'])
.directive('main', function () {
  return function (scope, element) {
    element.gator( ... );
  };
});
```

_`gator` has been chosen on top of `on` to reference the `Gator::on` method to
avoid shadowing native `JQLite::on` method_

Alternatives
------------

Event delegation libraries checked out:

  * [dom-delegate](https://github.com/ftlabs/ftdomdelegate)
  * [gator](https://craig.is/riding/gators)

Having both the same API, `gator` has been chosen for being the one supporting
more module systems (CommonJS and browser global)
