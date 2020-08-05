const sidebar = require('./sidebar');

module.exports = {
    // 是否启用所有页面的导航栏
    navbar: true,
    // 会在导航栏中自动生成一个 GitHub 链接，并在每个页面的底部显示「编辑此页面」链接
    repo: 'YisenFE/blogs',
    base: '/YisenFE.github.io/',
    // 可以编辑 GitHub 链接显示的文本
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    docsDir: 'docs',
    lastUpdated: '更新于',
    sidebarDepth: 2,
    sidebar,
    nav: [
        {
            text: '首页', link: '/',
        },
        {
            text: '大前端',
            items: [
                {
                    text: 'VUE',
                    items: [
                        {text: 'element源码学习', link: '/ele-01/'},
                        {text: 'Vue.js 技术揭秘', link: '/vue-analysis/'}
                    ]
                },
                {
                    text: '前端杂记',
                    items: [
                        {text: '从零开发一个node命令行工具', link: '/zaji-09/'},
                        {text: 'vscode调试webpack', link: '/zaji-08/'},
                        {text: 'provisional headers are shown 知多少', link: '/zaji-07/'},
                        {text: '浏览器解析和渲染', link: '/zaji-06/'},
                        {text: 'markdown-it插件', link: '/zaji-05/'},
                        {text: 'uppercamelcase插件', link: '/zaji-04/'},
                        {text: 'json-templater/string插件', link: '/zaji-03/'},
                        {text: 'postcss.parse()方法', link: '/zaji-02/'},
                        {text: 'shell中&&和&的区别', link: '/zaji-01/'},
                    ]
                },
                {
                    text: 'JavaScript深入',
                    items: [
                        {text: '详解JS原型链与继承', link: '/js-prototype/'},
                        {text: '词法作用域和动态作用域', link: '/js-scope/'},
                        {text: 'instanceof运算符深入剖析', link: '/js-instanceof/'},
                    ]
                },
                {
                    text: 'CSS',
                    items: [
                        {text: '什么是BFC', link: '/css-01/'}
                    ]
                }
            ]
        },
        { text: '导航', link: 'https://YisenFE.github.io/guide/' }
    ],
}