---
data: 2019-07-10
permalink: zaji-02
---


# postcss.parse()方法

::: danger
只从例子看结果，后期会对postcss进行系统的学习
:::

1. 先搭建环境
```Shell
$ npm init -y && npm i -D webpack webpack-cli postcss && touch index.scss index.js
```
2. index.scss 文件内容：
```css
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
```js
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
```js
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
:::warning
[查看在 `element` 中如何使用，请点此链接](/ele-02/#node-build-bin-iconinit-js)
:::