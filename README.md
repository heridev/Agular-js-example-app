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

