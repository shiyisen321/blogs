const elementUI = [
    {
        title: 'element源码学习',
        collapsable: false,
        children: [
            'elementUI/01-认识element框架',
            'elementUI/02-执行dev脚本'
        ]
    },
];

const zaji = [
    {
        title: '前端杂记',
        collapsable: false,
        children: [
            'markdown-it插件',
            'uppercamelcase插件',
            'json-templater插件',
            'postcss.parse()方法',
            'shell中&&和&的区别',
        ]
    },
]

module.exports = {
    '/大前端/VUE学习/': elementUI,
    '/大前端/前端杂记/': zaji,
}