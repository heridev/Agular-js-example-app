##### Angular example application built following the codeschool course

##### What I have learnt in this course was:

- There are directives in angular.js for eg: ng-controller
 https://github.com/heridev/Agular-js-example-app/commit/aa83e9eeac03ec02a2376fc6975bba4067d8b58f


- There are filters:

For example a filter that shows the currency and format a price:
```
<h2>{{ product.price | currency }}<h2>
```

They have the structure of:
```
{{ data | filter:options }}
```

#### How to show and image using angular from an object:
https://github.com/heridev/Agular-js-example-app/commit/e8a2e8aba27ea162c93f103dced0ff7e139a5f9b

#### if you want to show a div or element only if the array is not
 empty you can code something like:


```
<div class='some-class' ng-show='!myobject.imaages.length'>
</div>

or avoid !negativecondition

<div class='some-class' ng-hide='myobject.imaages.length'>
</div>

```
#### A little dirty tabs control using directives
https://github.com/heridev/Agular-js-example-app/commit/8ab2b245c70a1f96a61c8fe99122deac1c94e059

#### Tabs control after some refactoring:
https://github.com/heridev/Agular-js-example-app/commit/db9c2b2eb0d1e8e2975812bb85bae781c48c264d


#### Directives

using directives

##### Using attribute directives example:

in your javascript:
```
  app.directive('productSpecs', function(){
    return {
      restrict: 'A',
      templateUrl: 'product-specs.html'
    };
  });
```


in index.html
```
<div ng-show="tab.isSet(2)" product-specs>
</div>
```

your product-description.html
```
<h4>Specs</h4>
<ul class="list-unstyled">
  <li>
    <strong>Shine</strong>
    : {{product.shine}}</li>
  <li>
    <strong>Faces</strong>
    : {{product.faces}}</li>
  <li>
    <strong>Rarity</strong>
    : {{product.rarity}}</li>
  <li>
    <strong>Color</strong>
    : {{product.color}}</li>
</ul>
```

##### Using element directives example:

in your javascript:

```
  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    }
  });
```

in your html
```
<product-title></product-title>
```

your template:
```
<h2>{{ product.name }}</h2>
```

