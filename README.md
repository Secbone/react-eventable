# react-eventable

An event decorator for react component

## Install

```
npm install react-eventable
```

## Usage

```
import {Component} from "react";
import eventable from "react-eventable";

@eventable
class MyComponent extends Component {
    ...
}
...
```

#### Webpack Config

use `babel-plugin-transform-decorators-legacy`

```
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
