## is-judge ![npm](https://badge.fury.io/js/is-judge.png)

a tiny, smart utility to use in js&#39;s judgement

### Installation
````
$ [sudo] npm install is-judge
````

Or

````
$ component install Tinple/is
````

### Node
````
var is = require('is-judge');
````

### Browser
````
<script src="./is.js">
````

### API

Support five primitive data types
```
is.Null(obj);
is.Undefined(obj);
is.String(obj);
is.Boolean(obj);
is.Number(obj);
```

Type Check Utility
```
is.Object(obj);
is.Array(obj);
is.ArrayLike(obj); // is.ArrayLike support node element
is.RegExp(obj)
is.Function(obj);
is.Arguments(obj);
is.Empty(obj);
is.Finite(obj);
is.Generator(obj);
is.GeneratorFunction(obj);
is.Node(obj);
is.Element(obj);
is.Window(obj);
```

Environment Check Utility
```
is.Chrome();
is.Firefox();
is.Opera();
is.Safari();
is.ie(v); // support specific ie version check
is.Mobile();
is.Tablet();
is.iphone();
is.ipad();
is.ipod();
is.ios();
is.Android();
is.AndroidPhone();
is.AndroidTablet();
is.BlackBerry();
is.WindowsPhone();
is.WindowsTablet();
is.Desktop();
is.Windows();
is.Mac();
is.Linux();
```

Other Useful Check Utility
```
is.inArray(val, arr);
is.Equal(a, b); //support object, is.Equal({}, {}) return true
```
 

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 Tinple

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.1.3