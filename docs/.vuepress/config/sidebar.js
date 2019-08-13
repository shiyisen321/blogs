const ElementUI = [
    {
        title: 'element源码学习',
        collapsable: false,
        children: [
            '01-认识element框架',
            '02-执行dev脚本'
        ]
    },
];

const VueAnalysis = [
    {
        title: 'Vue.js 技术揭秘',
        collapsable: false,
        children: [
            'Vue.js 技术揭秘',
            {
                title: '准备工作',
                collapsable: false,
                children: [
                    'prepare/Introduction',
                    'prepare/认识 Flow',
                    'prepare/Vue.js 源码目录设计',
                    'prepare/Vue.js 源码构建',
                    'prepare/从入口开始',
                ]
            },
            {
                title: '数据驱动',
                collapsable: false,
                children: [
                    'data-driven/数据驱动',
                    'data-driven/new Vue发生了什么',
                    'data-driven/Vue 实例挂载的实现',
                    'data-driven/render',
                    'data-driven/Virtual DOM',
                    'data-driven/createElement',
                    'data-driven/update',
                ]
            },
            {
                title: '组件化',
                collapsable: false,
                children: [
                    'components/组件化',
                    'components/createComponent',
                    'components/patch',
                    'components/合并配置',
                    'components/生命周期',
                    'components/组件注册',
                    'components/异步组件',
                ]
            },
            {
                title: '深入响应式原理',
                collapsable: false,
                children: [
                    'reactive/深入响应式原理',
                    'reactive/响应式对象',
                    'reactive/依赖收集',
                    'reactive/派发更新',
                    'reactive/nextTick',
                    'reactive/检测变化的注意事项',
                    'reactive/计算属性 VS 侦听属性',
                    'reactive/组件更新',
                    'reactive/原理图',
                ]
            },
            {
                title: '编译',
                collapsable: false,
                children: [
                    'compile/编译',
                    'compile/编译入口',
                    'compile/parse',
                    'compile/optimize',
                    'compile/codegen',
                ]
            },
            {
                title: '扩展',
                collapsable: false,
                children: [
                    'extend/扩展',
                    'extend/event',
                    'extend/v-model',
                    'extend/slot',
                    'extend/keep-alive',
                    'extend/transition',
                    'extend/transition-group',
                ]
            },
            {
                title: 'Vue Router',
                collapsable: false,
                children: [
                    'vue-router/Vue-Router',
                    'vue-router/路由注册',
                    'vue-router/VueRouter 对象',
                    'vue-router/matcher',
                    'vue-router/路径切换',
                ]
            },
            {
                title: 'Vuex',
                collapsable: false,
                children: [
                    'vuex/Vuex',
                    'vuex/Vuex 初始化',
                    'vuex/API',
                    'vuex/插件',
                ]
            },
        ]
    }
]

const Zaji = [
    {
        title: '前端杂记',
        collapsable: false,
        children: [
            'provisional headers are shown 知多少',
            '浏览器解析和渲染',
            'markdown-it插件',
            'uppercamelcase插件',
            'json-templater插件',
            'postcss.parse()方法',
            'shell中&&和&的区别',
        ]
    },
]

const JsStudy = [
    {
        title: 'JavaScript深入',
        collapsable: false,
        children: [
            '词法作用域和动态作用域',
            '详解JS原型链与继承',
        ]
    }
]

module.exports = {
    '/VUE学习/elementUI/': ElementUI,
    '/前端杂记/': Zaji,
    '/VUE学习/vue-analysis/': VueAnalysis,
    '/JavaScript深入/': JsStudy,
}