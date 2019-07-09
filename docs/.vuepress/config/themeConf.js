const sidebar = require('./sidebar');

module.exports = {
    // 是否启用所有页面的导航栏
    navbar: true,
    // 会在导航栏中自动生成一个 GitHub 链接，并在每个页面的底部显示「编辑此页面」链接
    repo: 'shiyisen321/Esen.github.io',
    // 可以编辑 GitHub 链接显示的文本
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '更新于',
    // displayAllHeaders: true,
    sidebar,
    nav: [
        {
            text: '首页', link: '/',
        },
        {
            text: 'VUE',
            items: [
                {
                    text: 'elementUI',
                    items: [
                        {text: '源码分析', link: '/element-ui-2019-07-04/'}
                    ]
                }
            ]
        },
        { text: 'External', link: 'https://google.com' }
    ],
}