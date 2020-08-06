---
date: 2020-08-05
permalink: /js-instanceof/
---

# instanceof运算符深入剖析
深入理解 instanceof 运算符的用法，写好复杂的 JavaScript 程序

## instanceof 运算符见解
在 JavaScript 中，判断一个变量的类型常常会用 `typeof` 运算符，
在使用 `typeof` 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回 `"object"`。

ECMAScript 引入了另一个 Java 运算符 `instanceof` 来解决这个问题。`instanceof` 运算符与 `typeof` 运算符相似，
用于识别正在处理的对象的类型。

与 `typeof` 方法不同的是，`instanceof` 方法要求开发者明确地确认对象为某特定类型。例如：

**清单1. `instanceof` 示例**
```js
var str = new Object('hello world');
console.log(str instanceof String); // true
```
这段代码问的是`变量 str 是否为 String 对象的实例？`str 的确是 String 对象的实例，因此结果是 `true`。
尽管不像 `typeof` 方法那样灵活，但是在 `typeof` 方法返回 `object` 的情况下，`instanceof` 方法还是很有用的。

## instanceof 运算符的常规用法
通常来讲，使用 `instanceof` 就是判断一个实例是否属于某种类型。例如：

**清单2. instanceof 常规用法**
```js
// 判断 foo 是否是 Foo 类的实例
class Foo {}
var foo = new Foo();
console.log(foo instanceof Foo); // true
```

另外，更重要的一点是 `instanceof` 可以在继承关系中用来判断一个实例是否属于它的父类型。例如：

**清单3. instanceof 在继承关系中的用法**
```js
// 判断 foo 是否是 Foo 类的实例，并且是否是其父类型的实例
class Aoo {}
class Foo extends Aoo {}; // 继承

var foo = new Foo();
console.log(foo instanceof Foo); // true
console.log(foo instanceof Aoo); // true
```
上面的代码中是判断了一层继承关系中的父类，在多层继承关系中，`instanceof` 运算符同样适用。

## 你真的了解 instanceof 操作符吗？
看了上面的代码示例，是不是觉得 `instanceof` 操作符很简单，下面来看点复杂的用法。

**清单4. instanceof 复杂用法**
```js
console.log(Object instanceof Object); // true
console.log(Function instanceof Function); // true
console.log(Number instanceof Number); // false
console.log(String instanceof String); // false

console.log(Function instanceof Object); // true

class Foo {};
console.log(Foo instanceof Function); // true
console.log(Foo instanceof Foo); // false
```
看了上面的代码是不是又晕头转向了？为什么 `Object` 和 `Function instanceof` 自己等于 `true`，而其他类 `instanceof` 自己却又不等于 `true` 呢？ 如何解释？

::: tip 要想从根本上了解 `instanceof` 的奥秘，需要从两个方面着手：
1. 语言规范中是如何定义这个运算符的；
2. JavaScript 原型继承机制。
:::

**清单5. JavaScript instanceof 运算符代码**

规范定义比较晦涩难懂，直接将规范翻译为代码：
```js
function instance_of(L, R) { // L 标示左表达式，R 标示右表达式
    var O = R.prototype; // 取 R 的显式原型
    L = L.__proto__; // 取 L 的隐式原型
    while (true) {
        if (L === null) {
            return false;
        }
        if (O === L) {
            return true;
        }
        L = L.__proto__;
    }
}
```

## JavaScript 原型继承机制
> 隐式原型：用 `__proto__` 属性表示
>
> 显示原型：用 `prototype` 属性表示

<img :src="$withBase('/img/js/proto.jpg')">
