---
date: 2019-11-06
permalink: zaji-08
---

# vscode调试webpack

## 前言
Webpack是前端开发的常用工具。

有时候不可避免要自己写一些webpack插件，是代码就会有bug，这时候我们就需要进行调试。或者是我们学习webpack的时候希望了解webpack的打包过程。

本文就向大家介绍如何用 VSCode 调试 webpack。

首先我们需要准备好一个webpack搭起来框架。

## 配置 VSCode 调试功能

通常情况下，我们会在 package.json script 里配 `"dev": "webpack --config webpack.config.js"`，然后执行 `npm run dev` 来起服务。

但是如果要用 vscode 调试的话，就需要新加脚本`"debugger": "node --inspect-brk=8080 ./node_modules/.bin/webpack --config webpack.config.js"`。`--inspect-brk` 是调试端口号，传给 node 进程后，node 就能对外暴露调试端口，进而在 VSCode 里调试。可参考[node调试指南](https://nodejs.org/zh-cn/docs/guides/debugging-getting-started/)

然后我们修改一下 .vscode/launch.json 文件，配置调试参数。
```json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "debugger",
            "runtimeExecutable": "npm",
            "runtimeArgs": ["run", "debugger"],
            "port": 8080,
        }
    ]
}
```
:::tip 有几个参数比较重要：
`runtimeExecutable`: 程序执行器，就是启动程序的脚本。默认是 node，但我们这里用 `npm` 来启动 webpack debugger 指令，所以这里要配 `npm`

`runtimeArgs`: 传递给程序执行器的参数

`port`: node 调试端口号，和刚才在 package.json script 中配的 `--inspect-brk` 保持一致
:::

## 启动调试
package.json script 和 .vscode/launch.json 都配置妥当后，我们在 webpack.config.js 里打一个断点，然后进入调试模式。
<img :src="$withBase('/img/zaji/08-1.png')">