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
                    distractionFreeMode: false,  // Facebook-like distraction free mode
                    labels: ['Gitalk', 'Comment'],
                }
            }
        ]
    ]
}