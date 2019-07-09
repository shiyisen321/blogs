const {
    mdConf,
    themeConf,
} = require('./config/index.js');

module.exports = {
    title: '博客',
    description: '每一件事都要做到精彩绝伦!',
    displayAllHeaders: true,
    head: [
        ['link', {
            rel: 'shortcut icon',
            href: '/assets/img/shi.jpg'
        }]
    ],
    markdown: mdConf,
    themeConfig: themeConf,
    plugins: [
        // require('./plugins/my-router'),
        [
            '@vuepress/register-components',
            {
                componentsDir: './components'
            }
        ],
        '@vuepress/back-to-top',
        [
            '@vuepress/google-analytics', {
                'ga': 'UA-1234601890-1'
            }
        ],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: '发现页面有新内容',
                    buttonText: '刷新'
                }
            }
        ]
    ]
}