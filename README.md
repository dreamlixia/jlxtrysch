
[![Static Badge](https://img.shields.io/badge/jlxtrysch-v1.0.0-blue?labelColor=gray)](https://github.com/dreamlixia/jlxtrysch)

This is my first npm package!

Install
---
```bash
npm install @lynseyjen/jlxtrysch
```
Usage
---
```js
const jlxtrysch = require('@lynseyjen/jlxtrysch');

jlxtrysch('Such a big cherry!');
// => Hi, you entered Suchabigcherry!

jlxtrysch(1997);
//=> Uncaught TypeError: jlxtrysch wants a string!
//  at tiny(<anonymous>:2:41)
//  at<anonymous>:1:1
```
