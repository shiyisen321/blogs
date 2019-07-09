---
title: "初识框架"
date: "2019-07-04"
permalink: "ele-01"
comments: false
---
# package.json
> 先从`package.json`开始看起

## 脚本
```json
"scripts": {
    "bootstrap": "yarn || npm i",
    "build:file": "node build/bin/iconInit.js & node build/bin/build-entry.js & node build/bin/i18n.js & node build/bin/version.js",
    "build:theme": "node build/bin/gen-cssfile && gulp build --gulpfile packages/theme-chalk/gulpfile.js && cp-cli packages/theme-chalk/lib lib/theme-chalk",
    "deploy:build": "npm run build:file && cross-env NODE_ENV=production webpack --config build/webpack.demo.js && echo element.eleme.io>>examples/element-ui/CNAME",
    "dev": "npm run bootstrap && npm run build:file && cross-env NODE_ENV=development webpack-dev-server --config build/webpack.demo.js & node build/bin/template.js",
    "dev:play": "npm run build:file && cross-env NODE_ENV=development PLAY_ENV=true webpack-dev-server --config build/webpack.demo.js",
    "dist": "npm run clean && npm run build:file && npm run lint && webpack --config build/webpack.conf.js && webpack --config build/webpack.common.js && webpack --config build/webpack.component.js && npm run build:utils && npm run build:umd && npm run build:theme",
    "i18n": "node build/bin/i18n.js",
    "lint": "eslint src/**/* test/**/* packages/**/* build/**/* --quiet",
    "pub": "npm run bootstrap && sh build/git-release.sh && sh build/release.sh && node build/bin/gen-indices.js && sh build/deploy-faas.sh",
    "test": "npm run lint && npm run build:theme && cross-env CI_ENV=/dev/ BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    "test:watch": "npm run build:theme && cross-env BABEL_ENV=test karma start test/unit/karma.conf.js"
  }
```

## 生产依赖
```json
"dependencies": {
    // 异步验证插件
    "async-validator": "~1.8.1",
    // JSX语法
    "babel-helper-vue-jsx-merge-props": "^2.0.0",
    // 深度合并插件
    "deepmerge": "^1.2.0",
    // 滚轮插件
    "normalize-wheel": "^1.0.1",
    // 实现响应式VUE组件
    "resize-observer-polyfill": "^1.5.0",
    // 防抖节流插件
    "throttle-debounce": "^1.0.1"
  },
```

## 开发依赖
```json
  "devDependencies": {
    // 编译.vue文件
    "@vue/component-compiler-utils": "^2.6.0",
    // 一个托管的全文、数字和分面搜索引擎，能够在第一次按键时提供实时结果。
    "algoliasearch": "^3.24.5",

    // babel
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-plugin-add-module-exports": "^0.2.1",
    "babel-plugin-istanbul": "^4.1.1",
    "babel-plugin-module-resolver": "^2.2.0",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-vue-jsx": "^3.7.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-2": "^6.24.1",
    "babel-regenerator-runtime": "^6.5.0",

    // chai断言库
    "chai": "^4.2.0",
    // node fs工具
    "chokidar": "^1.7.0",
    // 将单个文件或整个目录复制到构建目录。
    "copy-webpack-plugin": "^5.0.0",
    // 代码测试覆盖率
    "coveralls": "^3.0.3",
    // 跨平台支持UNIX命令
    "cp-cli": "^1.0.2",
    // 运行在平台上设置和使用环境变量的脚本。
    "cross-env": "^3.1.3",
    // CSS加载器
    "css-loader": "^2.1.0",
    // es6 promise支持
    "es6-promise": "^4.0.5",

    // eslint
    "eslint": "4.14.0",
    "eslint-config-elemefe": "0.1.1",
    "eslint-loader": "^2.0.0",
    "eslint-plugin-html": "^4.0.1",
    "eslint-plugin-json": "^1.2.0",

    // 文件加载
    "file-loader": "^1.1.11",
    // 文件保存
    "file-save": "^0.2.0",

    // gulp
    "gulp": "^4.0.0",
    "gulp-autoprefixer": "^6.0.0",
    "gulp-cssmin": "^0.2.0",
    "gulp-sass": "^4.0.2",

    // js 高亮
    "highlight.js": "^9.3.0",
    // html webpack插件
    "html-webpack-plugin": "^3.2.0",
    // json加载器
    "json-loader": "^0.5.7",
    // json和js的模版生成工具
    "json-templater": "^1.0.4",

    // karma测试库
    "karma": "^4.0.1",
    "karma-chrome-launcher": "^2.2.0",
    "karma-coverage": "^1.1.2",
    "karma-mocha": "^1.3.0",
    "karma-sinon-chai": "^2.0.2",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-spec-reporter": "^0.0.32",
    "karma-webpack": "^3.0.5",

    // 将markdown变为html的解析器
    "markdown-it": "^8.4.1",
    "markdown-it-anchor": "^5.0.2",
    "markdown-it-chain": "^1.3.0",
    "markdown-it-container": "^2.0.0",
    
    // 压缩css
    "mini-css-extract-plugin": "^0.4.1",
    // mocha测试库
    "mocha": "^6.0.2",
    // node.js的sass
    "node-sass": "^4.11.0",
    // 优化/最小化css资源
    "optimize-css-assets-webpack-plugin": "^5.0.1",
    // 视差滚动 https://perspective.js.org/#/zh-cn/
    "perspective.js": "^1.0.0",
    "postcss": "^7.0.14",
    // 命令行进度条插件
    "progress-bar-webpack-plugin": "^1.11.0",
    // node.js 深度删除模块
    "rimraf": "^2.5.4",
    // sass加载器
    "sass-loader": "^7.1.0",
    // 选择发布版本
    "select-version-cli": "^0.0.2",

    // sinon测试框架
    "sinon": "^7.2.7",
    "sinon-chai": "^3.3.0",
    "style-loader": "^0.23.1",

    // utf-8 字符转换
    "transliteration": "^1.1.11",
    // 压缩js插件
    "uglifyjs-webpack-plugin": "^2.1.1",
    // 驼峰写法
    "uppercamelcase": "^1.1.0",
    // url加载器
    "url-loader": "^1.0.1",

    // vue
    "vue": "2.5.21",
    "vue-loader": "^15.7.0",
    "vue-router": "^3.0.1",
    "vue-template-compiler": "2.5.21",
    "vue-template-es2015-compiler": "^1.6.0",

    // webpack
    "webpack": "^4.14.0",
    "webpack-cli": "^3.0.8",
    "webpack-dev-server": "^3.1.11",
    "webpack-node-externals": "^1.7.2"
  }
```

## 脚本
```
"scripts": {
    "bootstrap": "yarn || npm i",
    "build:file": "node build/bin/iconInit.js & node build/bin/build-entry.js & node build/bin/i18n.js & node build/bin/version.js",
    "build:theme": "node build/bin/gen-cssfile && gulp build --gulpfile packages/theme-chalk/gulpfile.js && cp-cli packages/theme-chalk/lib lib/theme-chalk",
    "build:utils": "cross-env BABEL_ENV=utils babel src --out-dir lib --ignore src/index.js",
    "build:umd": "node build/bin/build-locale.js",
    "clean": "rimraf lib && rimraf packages/*/lib && rimraf test/**/coverage",
    "deploy:build": "npm run build:file && cross-env NODE_ENV=production webpack --config build/webpack.demo.js && echo element.eleme.io>>examples/element-ui/CNAME",
    "dev": "npm run bootstrap && npm run build:file && cross-env NODE_ENV=development webpack-dev-server --config build/webpack.demo.js & node build/bin/template.js",
    "dev:play": "npm run build:file && cross-env NODE_ENV=development PLAY_ENV=true webpack-dev-server --config build/webpack.demo.js",
    "dist": "npm run clean && npm run build:file && npm run lint && webpack --config build/webpack.conf.js && webpack --config build/webpack.common.js && webpack --config build/webpack.component.js && npm run build:utils && npm run build:umd && npm run build:theme",
    "i18n": "node build/bin/i18n.js",
    "lint": "eslint src/**/* test/**/* packages/**/* build/**/* --quiet",
    "pub": "npm run bootstrap && sh build/git-release.sh && sh build/release.sh && node build/bin/gen-indices.js && sh build/deploy-faas.sh",
    "test": "npm run lint && npm run build:theme && cross-env CI_ENV=/dev/ BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    "test:watch": "npm run build:theme && cross-env BABEL_ENV=test karma start test/unit/karma.conf.js"
  }
```

## 执行`npm run dev`
```
 "dev": "npm run bootstrap && npm run build:file && cross-env NODE_ENV=development webpack-dev-server --config build/webpack.demo.js & node build/bin/template.js"

```
### 一、`npm run bootstrap`
```
"bootstrap": "yarn || npm i"
```
> 安装所有依赖

### 二、`npm run build:file`
```
"build:file": "node build/bin/iconInit.js & node build/bin/build-entry.js & node build/bin/i18n.js & node build/bin/version.js"

```
> 使用node运行了几个文件

# `node build/bin/iconInit.js`
```javascript
// build/bin/iconInit.js
'use strict';

var postcss = require('postcss');
var fs = require('fs');
var path = require('path');
var fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'), 'utf8'); // 异步读取文件
var nodes = postcss.parse(fontFile).nodes;
var classList = [];

nodes.forEach((node) => {
  var selector = node.selector || ''; // 选择器
  var reg = new RegExp(/\.el-icon-([^:]+):before/);
  var arr = selector.match(reg);

  if (arr && arr[1]) {
    classList.push(arr[1]);
  }
});

classList.reverse(); // => ["platform-eleme","eleme","delete-solid","delete","s-tools","setting", ...]

fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(classList), () => {});
```
> 以上方法通过解析 icon.scss 最终导出 icon.json 文件，该文件保存了各种图标。

## 看看postcss.parse()方法是啥
1. 先搭建环境
```shell
$ npm init -y && npm i -D webpack webpack-cli postcss && touch index.scss index.js
```
2. index.scss 文件内容：
```javascript
div {
    background: red;
    .a {
        color: green;
    }
}
.wrap .b {
    font-size: 19px;
}
```
3. index.js 文件内容：
```shell
let postcss = require('postcss');
let fs = require('fs');
let path = require('path');

let fileCont = fs.readFileSync(path.resolve(__dirname, './index.scss'), 'utf-8');
let parseCss = postcss.parse(fileCont);
let nodes = parseCss.nodes;

console.log('-----------------------------------------------------');
console.log('文件内容：');
console.log(fileCont);
console.log('-----------------------------------------------------');
console.log('postcss 解析 css：');
console.log(parseCss);
console.log('-----------------------------------------------------');
console.log('postcss 解析 css 返回对象的 nodes 属性：');
console.log(nodes);
console.log('-----------------------------------------------------');
```
4. 执行`node index.js`
输出：
```
-----------------------------------------------------
文件内容：
div {
    background: red;
    .a {
        color: green;
    }
}
.wrap .b {
    font-size: 19px;
}
-----------------------------------------------------
postcss 解析 css：
Root {
  raws: { semicolon: false, after: '' },
  type: 'root',
  nodes:
   [ Rule {
       raws: [Object],
       type: 'rule',
       nodes: [Array],
       parent: [Circular],
       source: [Object],
       selector: 'div' },
     Rule {
       raws: [Object],
       type: 'rule',
       nodes: [Array],
       parent: [Circular],
       source: [Object],
       selector: '.wrap .b' } ],
  source:
   { input:
      Input {
        css: 'div {\n    background: red;\n    .a {\n        color: green;\n    }\n}\n.wrap .b {\n    font-size: 19px;\n}',
        hasBOM: false,
        id: '<input css 1>' },
     start: { line: 1, column: 1 } } }
-----------------------------------------------------
postcss 解析 css 返回对象的 nodes 属性：
[ Rule {
    raws: { before: '', between: ' ', semicolon: false, after: '\n' },
    type: 'rule',
    nodes: [ [Object], [Object] ],
    parent:
     Root {
       raws: [Object],
       type: 'root',
       nodes: [Circular],
       source: [Object] },
    source: { start: [Object], input: [Object], end: [Object] },
    selector: 'div' },
  Rule {
    raws: { before: '\n', between: ' ', semicolon: true, after: '\n' },
    type: 'rule',
    nodes: [ [Object] ],
    parent:
     Root {
       raws: [Object],
       type: 'root',
       nodes: [Circular],
       source: [Object] },
    source: { start: [Object], input: [Object], end: [Object] },
    selector: '.wrap .b' } ]
-----------------------------------------------------
```
## 项目结构
|目录名|目录描述|
|--|--|
|`build`|放置webpack的配置文件|
|`examples`|放置element api的页面文档|
|`packages`|放置element的组件（css样式放置在这个目录的`theme-chalk`下）|
|`src/directives`|放置自定义指令|
|`src/locale`|放置语言的配置文件|
|`src/mixins`|放置组件用的混入文件|
|`src/transitions`|放置动画配置文件|
|`src/utils`|放置用到的工具函数|
|`src/index.js`|组件注册的入口文件|
|`test`|测试文件|
|`types`|这个文件里放了typescript的数据类|

<!-- <Valine/> -->
<!-- <Valine></Valine> -->
