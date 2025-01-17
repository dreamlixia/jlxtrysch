
![Static Badge](https://img.shields.io/badge/jlxtrysch-v1.0.0-blue?labelColor=gray)

<!-- ![](github:) -->
<!-- ![](https://github.com/dreamlixia/jlxtrysch) -->
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

Tree
---
```bash
jlxtrysch
.
├── LICENSE
├── README.md
├── config
│   ├── rollup.config.base.js（rollup基础配置）
│   ├── rollup.config.dev.js（rollup开发配置）
│   └── rollup.config.js（rollup正式配置）
├── lib（存放打包后的文件）
│   ├── bundle.browser.js
│   ├── bundle.cjs.js
│   └── bundle.esm.js
├── package-lock.json
├── package.json
└── src（源码）
      └── index.js
```