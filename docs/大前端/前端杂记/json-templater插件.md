---
date: 2019-07-10
permalink: zaji-03
---


# `json-templater/string` 插件

:::danger
仅介绍此插件在 `element` 中的用法

详细用法请移步[官方API](https://www.npmjs.com/package/json-templater)
:::

:::tip
`json-templater` 可以在js和json对象上进行胡子样式模板替换
:::

1. 先搭建环境
```shell
$ npm init -y && npm i -D webpack webpack-cli json-template && touch index.js
```

2. index.js 文件内容：
```javascript
const render = require('json-templater/string');
const IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}/index.js\';';

parseStrTemplate = render(IMPORT_TEMPLATE, {name: 'input', package: 'input'});

console.log('-----------------------------------------------------');
console.log(parseStrTemplate);
console.log('-----------------------------------------------------');
```

3. 执行`node index.js`
输出：
```js
-----------------------------------------------------
import input from '../packages/input/index.js';
-----------------------------------------------------
```

:::warning
[查看在 `element` 中如何使用，请点此链接](/ele-02/#node-build-bin-build-entry-js)
:::