# react-eventable

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

An event decorator for react component

## Install

```
npm install react-eventable
```

## Usage

```javascript
import {Component} from "react";
import eventable from "react-eventable";

@eventable
class MyComponent extends Component {
    clickHandler() {
        this.emit("click", {foo: "foo"});
    }

    componentDidMount() {
        this.on("click", someMethod);
    }
}
...
```

#### Webpack Config

use `babel-plugin-transform-decorators-legacy`

```javascript
// webpack.config.js

...
test: /\.jsx$/,
loaders: [
    {
        loader: "babel-loader",
        query: {
            presets: ["es2015", "react"],
            plugins: ["transform-decorators-legacy"],
        }
    },
]
...
```

[npm-image]: https://img.shields.io/npm/v/react-eventable.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-eventable
[downloads-image]: http://img.shields.io/npm/dm/react-eventable.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/react-eventable
