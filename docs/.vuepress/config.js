const {
    mdConf,
    themeConf,
    locales
} = require('./config/index.js');

module.exports = {
    locales: locales,
    displayAllHeaders: true,
    head: [
        ['link', {
            rel: 'shortcut icon',
            href: '/img/shi.jpg'
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
        ],
        [
            require('./plugins/gitalk/index.js'),
            {
                options: {
                    clientID: 'c38e3ae1369260d33397',
                    clientSecret: 'e0db7b1d2d38e1f5d66b078f41889b8bd10d2425',
                    repo: 'blogs',
                    owner: 'shiyisen321',
                    admin: ['shiyisen321'],
                    distractionFreeMode: false,
                    id: decodeURI(window.location.pathname),
                    labels: ['Gitalk', 'Comment'],
                }
            }
        ]
    ]
}