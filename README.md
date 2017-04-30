# dig.js

Bring Ruby's **[Hash#dig](http://ruby-doc.org/core-2.3.0/Hash.html#method-i-dig)** method to JavaScript/Node.

## usage

You can use this library as a method of `Object` to make things more natural, or you can just use it as a standalone `function`.

### as a method on `Object`

#### example

```javascript
require('@drm2/dig.js').init();

var test = { hello: { world: '!' } };

test.dig('hello', 'world'); // returns '!'

test.dig('fake', 'props'); // returns null
```

### as a standalone `function`

#### example

```javascript
var dig = require('@drm2/dig.js').dig;

var test = { hello: { world: '!' } };

dig(test, 'hello', 'world'); // returns '!'

dig(test, 'fake', 'props'); // returns null
```
