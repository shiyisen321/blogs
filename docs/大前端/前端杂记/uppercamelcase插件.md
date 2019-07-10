---
date: 2019-07-10
permalink: /zaji-04/
---

# uppercamelcase 插件

:::danger
仅介绍此插件在 `element` 中的用法

详细用法请移步[官方API](https://www.npmjs.com/package/uppercamelcase)
:::

:::tip
`uppercamelcase` 可以在js和json对象上进行胡子样式模板替换
:::

1. 先搭建环境
```shell
$ npm init -y && npm i -D webpack webpack-cli uppercamelcase && touch index.js
```
2. index.js 文件内容：
```javascript
let upperCamelCase = require('uppercamelcase');

let case1 = upperCamelCase('foo-bar');
let case2 = upperCamelCase('foo_bar');
let case3 = upperCamelCase('Foo-Bar');
let case4 = upperCamelCase('--foo.bar');
let case5 = upperCamelCase('__foo__bar__');
let case6 = upperCamelCase('foo bar');
let case7 = upperCamelCase('foo', 'bar');
let case8 = upperCamelCase('__foo__', '--bar');

console.log('-----------------------------------------------------');
console.log('foo-bar =>                   ' + case1);
console.log('foo_bar =>                   ' + case2);
console.log('Foo-Bar =>                   ' + case3);
console.log('--foo.bar =>                 ' + case4);
console.log('__foo__bar__ =>              ' + case5);
console.log('foo bar =>                   ' + case6);
console.log('params:[foo, bar] =>         ' + case7);
console.log('params:[__foo__, --bar] =>   ' + case8);
console.log('-----------------------------------------------------');
```
3. 执行`node index.js`
输出：
```js
-----------------------------------------------------
foo-bar =>                   FooBar
foo_bar =>                   FooBar
Foo-Bar =>                   FooBar
--foo.bar =>                 FooBar
__foo__bar__ =>              FooBar
foo bar =>                   FooBar
params:[foo, bar] =>         FooBar
params:[__foo__, --bar] =>   FooBar
-----------------------------------------------------
```

:::warning
[查看在 `element` 中如何使用，请点此链接](/ele-02/#node-build-bin-build-entry-js)
:::