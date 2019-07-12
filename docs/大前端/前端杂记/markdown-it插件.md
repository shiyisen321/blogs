---
date: 2019-07-11
permalink: /zaji-05/
---

# markdown-it 插件
:::tip
`markdown-it` 是将 markdown 语法解析为 html 的插件。

`element` 官方 API 文档编写用的 `markdown` 语法，因此必然用到此插件。
:::

## 安装
**node.js & bower**
```shell
npm install markdown-it --save
bower install markdown-it --save
```
**browser(CDN):**
- [jsDeliver CDN](http://www.jsdelivr.com/#!markdown-it)
- [cdnjs.com CDN](https://cdnjs.com/libraries/markdown-it)

## 用法举例
### 简单用法
```js
// node.js, 典型用法
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('# 我是markdown的一级标题');

// node.js, 一样的用法，但是加了糖(原文：node.js, the same, but with sugar)
var md = require('markdown-it')();
var result = md.render('## 我是markdown的二级标题');

// 再浏览器环境下通过 AMD 方式引入，需要在脚本加载完后挂载到 window 上
var md = window.markdownit();
var result = md.render('### 我是markdown的三级标题');
```
单行渲染，没有段落换行：
```js
var md = require('markdown-it')();
var result = md.renderInline('__markdown-it__ 喵喵喵');
```
### 使用预设和配置选项进行初始化
(*)预先定义运行规则和配置选项。可以使用 `commonmark`, `zero` 或者 `default`。更多细节请看 [API文档](/aaa/)。
```js
// commonmark 模式
var md = require('markdown-it')('commonmark');

// default 模式
var md = require('markdown-it')();

// 启用所有功能
var md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true
});

// 所有默认配置选项
var md = require('markdown-it')({
  html:         false,        // 可以识别 HTML 标签
  xhtmlOut:     false,        // 使用 '/' 去闭合单独标签 (<br />).
                              // 这仅适用于完整的 CommonMark 兼容性（貌似没什么用）
  breaks:       false,        // 是否将 \n 转换为 <br />标签
  langPrefix:   'language-',  // 用于代码块中，添加类名前缀
  linkify:      false,        // 自动将类似url的文本转换为链接

  // 启用一些语言中立的替换 + 引号美化
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externaly.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: function (/*str, lang*/) { return ''; }
});
```

### 使用插件
```js
var md = require('markdown-it')()
            .use(plugin1)
            .use(plugin2, opts, ...)
            .use(plugin3);
```

### 语法高亮
使用 `highlight` 选项将语法高亮应用于受保护的代码块:
```js
var hljs = require('highlight.js'); // https://highlightjs.org/

// 实际的默认值
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return '';
  }
});
```
或者使用完整的包装器覆盖(如果要给 `<pre>` 标签加类名):
```js
var hljs = require('highlight.js') // https://highlightjs.org/

// Actual default values
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});
```

## API 文档
|模式|介绍|
|---|---|
|[commonmark](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js)|严格按照公共markdown语法解析模式|
|[default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js)|默认模式|
|[zero](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js)|禁用所有规则。通过`.enable()`快速设置配置非常有用。例如，当您只需要粗体和斜体标记而不需要其他内容时。|

|选项(options)|默认值|介绍|
|---|---|---|
|**html**|`false`|是否有能力解析html标签|
|**xhtmlOut**|`false`|设置为true在关闭单个标记时添加'/' (<br />)。只有在完全兼容CommonMark时才需要这样做。在现实世界中，您将需要HTML输出。|
|**breaks**|`false`|是否将 `\n` 编译为 `<br/>` 标签|
|**langPrefix**|`language-`|给代码块的 `code` 标签类名添加指定前缀|
|**linkify**|`false`|是否将类似于url的文本串解析为链接|
|**typographer**|`false`|设置为true时：[执行replacements.js文件](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) + 引用美化|
|**quotes**|`“”‘’`|String or Array. Double + single quotes replacement pairs, when typographer enabled and smartquotes on. For example, you can use `'«»„“'` for Russian, `'„“‚‘'` for German, and `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).|
|**highlight**|`null`|语法高亮配置|

## 解析规则源码
:::warning
在很多场景确实需要手动改写内置的解析规则

比如在 element 中改写的 `fence` 规则：
```js
md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    // 判断该 fence 是否在 :::demo 内
    const prevToken = tokens[idx - 1];
    const isInDemoContainer = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/);
    if (token.info === 'html' && isInDemoContainer) {
        return `<template slot="highlight"><pre v-pre><code class="html">${md.utils.escapeHtml(token.content)}</code></pre></template>`;
    }
    return defaultRender(tokens, idx, options, env, self);
};
```
上述代码替换了内置默认的fence转换规则。

插件默认转换规则请看下面源代码：
:::
```js
/**
 * class Renderer
 *
 * Generates HTML from parsed token stream. Each instance has independent
 * copy of rules. Those can be rewritten with ease. Also, you can add new
 * rules if you create plugin and adds new token types.
 **/
'use strict';


var assign          = require('./common/utils').assign;
var unescapeAll     = require('./common/utils').unescapeAll;
var escapeHtml      = require('./common/utils').escapeHtml;


////////////////////////////////////////////////////////////////////////////////

var default_rules = {};

// 行内代码(``)转化规则
default_rules.code_inline = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];
  // console.log('code_inline:')
  // console.log('<code' + slf.renderAttrs(token) + '>' +
  //           escapeHtml(tokens[idx].content) +
  //           '</code>');

  return  '<code' + slf.renderAttrs(token) + '>' +
          escapeHtml(tokens[idx].content) +
          '</code>';
};

// 代码块(tab缩进生成的代码块)转化规则
default_rules.code_block = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  // console.log('code_block:');
  // console.log('<pre' + slf.renderAttrs(token) + '><code>' +
  // escapeHtml(tokens[idx].content) +
  // '</code></pre>\n');

  return  '<pre' + slf.renderAttrs(token) + '><code>' +
          escapeHtml(tokens[idx].content) +
          '</code></pre>\n';
};

// 代码块(```)转化规则
default_rules.fence = function (tokens, idx, options, env, slf) {
  var token = tokens[idx],
      info = token.info ? unescapeAll(token.info).trim() : '',
      langName = '',
      highlighted, i, tmpAttrs, tmpToken;

  if (info) {
    langName = info.split(/\s+/g)[0];
  }

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }

  if (highlighted.indexOf('<pre') === 0) {
    // console.log('fence:')
    // console.log(highlighted + '\n')
    return highlighted + '\n';
  }

  // If language exists, inject class gently, without modifying original token.
  // May be, one day we will add .clone() for token and simplify this part, but
  // now we prefer to keep things local.
  if (info) {
    i        = token.attrIndex('class');
    tmpAttrs = token.attrs ? token.attrs.slice() : [];

    if (i < 0) {
      tmpAttrs.push([ 'class', options.langPrefix + langName ]);
    } else {
      tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
    }

    // Fake token just to render attributes
    tmpToken = {
      attrs: tmpAttrs
    };

    // console.log('fence:')
    // console.log('<pre><code' + slf.renderAttrs(tmpToken) + '>'
    // + highlighted
    // + '</code></pre>\n');
    return  '<pre><code' + slf.renderAttrs(tmpToken) + '>'
          + highlighted
          + '</code></pre>\n';
  }


  // console.log('fence:');
  // console.log('<pre><code' + slf.renderAttrs(token) + '>'
  // + highlighted
  // + '</code></pre>\n');
  return  '<pre><code' + slf.renderAttrs(token) + '>'
        + highlighted
        + '</code></pre>\n';
};

// 图片(![NAME](URL))转化规则
default_rules.image = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  // "alt" attr MUST be set, even if empty. Because it's mandatory and
  // should be placed on proper position for tests.
  //
  // Replace content with actual value

  token.attrs[token.attrIndex('alt')][1] =
    slf.renderInlineAsText(token.children, options, env);

    // console.log('image:');
    // console.log(slf.renderToken(tokens, idx, options));
  return slf.renderToken(tokens, idx, options);
};

// 换行(两个以上的空格再回车)转化规则
default_rules.hardbreak = function (tokens, idx, options /*, env */) {
  // console.log('hardbreak:');
  // console.log(options.xhtmlOut ? '<br />\n' : '<br>\n')
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};
// \n 转换规则
default_rules.softbreak = function (tokens, idx, options /*, env */) {
  // console.log('softbreak:');
  // console.log(options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n');
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
};

// 文本转换规则
default_rules.text = function (tokens, idx /*, options, env */) {
  // console.log('text:');
  // console.log(arguments);
  // console.log(escapeHtml(tokens[idx].content));
  return escapeHtml(tokens[idx].content);
};


default_rules.html_block = function (tokens, idx /*, options, env */) {
  console.log('html_block:');
  console.log(tokens[idx].content);
  return tokens[idx].content;
};
default_rules.html_inline = function (tokens, idx /*, options, env */) {
  console.log('html_inline:');
  // console.log(tokens[idx].content);
  return tokens[idx].content;
};


/**
 * new Renderer()
 *
 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
 **/
function Renderer() {

  /**
   * Renderer#rules -> Object
   *
   * Contains render rules for tokens. Can be updated and extended.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.renderer.rules.strong_open  = function () { return '<b>'; };
   * md.renderer.rules.strong_close = function () { return '</b>'; };
   *
   * var result = md.renderInline(...);
   * ```
   *
   * Each rule is called as independent static function with fixed signature:
   *
   * ```javascript
   * function my_token_render(tokens, idx, options, env, renderer) {
   *   // ...
   *   return renderedHTML;
   * }
   * ```
   *
   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
   * for more details and examples.
   **/
  this.rules = assign({}, default_rules);
}


/**
 * Renderer.renderAttrs(token) -> String
 *
 * Render token attributes to string.
 **/
Renderer.prototype.renderAttrs = function renderAttrs(token) {
  var i, l, result;

  if (!token.attrs) { return ''; }

  result = '';

  for (i = 0, l = token.attrs.length; i < l; i++) {
    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
  }

  return result;
};


/**
 * Renderer.renderToken(tokens, idx, options) -> String
 * - tokens (Array): list of tokens
 * - idx (Numbed): token index to render
 * - options (Object): params of parser instance
 *
 * Default token renderer. Can be overriden by custom function
 * in [[Renderer#rules]].
 **/
Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
  var nextToken,
      result = '',
      needLf = false,
      token = tokens[idx];

  // Tight list paragraphs
  if (token.hidden) {
    return '';
  }

  // Insert a newline between hidden paragraph and subsequent opening
  // block-level tag.
  //
  // For example, here we should insert a newline before blockquote:
  //  - a
  //    >
  //
  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += '\n';
  }

  // Add token name, e.g. `<img`
  result += (token.nesting === -1 ? '</' : '<') + token.tag;

  // Encode attributes, e.g. `<img src="foo"`
  result += this.renderAttrs(token);

  // Add a slash for self-closing tags, e.g. `<img src="foo" /`
  if (token.nesting === 0 && options.xhtmlOut) {
    result += ' /';
  }

  // Check if we need to add a newline after this tag
  if (token.block) {
    needLf = true;

    if (token.nesting === 1) {
      if (idx + 1 < tokens.length) {
        nextToken = tokens[idx + 1];

        if (nextToken.type === 'inline' || nextToken.hidden) {
          // Block-level tag containing an inline tag.
          //
          needLf = false;

        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
          // Opening tag + closing tag of the same type. E.g. `<li></li>`.
          //
          needLf = false;
        }
      }
    }
  }

  result += needLf ? '>\n' : '>';

  return result;
};


/**
 * Renderer.renderInline(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * The same as [[Renderer.render]], but for single token of `inline` type.
 **/
Renderer.prototype.renderInline = function (tokens, options, env) {
  var type,
      result = '',
      rules = this.rules;

  for (var i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (typeof rules[type] !== 'undefined') {
      result += rules[type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options);
    }
  }

  return result;
};


/** internal
 * Renderer.renderInlineAsText(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Special kludge for image `alt` attributes to conform CommonMark spec.
 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
 * instead of simple escaping.
 **/
Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
  var result = '';

  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === 'text') {
      result += tokens[i].content;
    } else if (tokens[i].type === 'image') {
      result += this.renderInlineAsText(tokens[i].children, options, env);
    }
  }

  return result;
};


/**
 * Renderer.render(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Takes token stream and generates HTML. Probably, you will never need to call
 * this method directly.
 **/
Renderer.prototype.render = function (tokens, options, env) {
  var i, len, type,
      result = '',
      rules = this.rules;

  for (i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type] !== 'undefined') {
      result += rules[tokens[i].type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options, env);
    }
  }

  return result;
};

module.exports = Renderer;

```