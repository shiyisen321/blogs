function renderValine(router) {
    // 重新渲染 评论区
    router.afterEach((to, from) => {
        // console.log(router);
        let $page = document.querySelector('.page');
        let vcomments = document.getElementById('vcomments');
        if (!vcomments) {
            vcomments = document.createElement('div');
            vcomments.id = 'vcomments';
            vcomments.style.margin = '1em 4em 0 4em';
        }
        if ($page && !vcomments) {
            $page.appendChild(vcomments);
        } else {
            // 获取不到vuepress的page加载完成时的钩子，只能采用笨方法
            setTimeout(() => {
                $page = document.querySelector('.page');
                if ($page) {
                    $page.appendChild(vcomments);
                    valine();
                }
            }, 500);
        }
        valine();
    });
}

function valine() {
    const Valine = require('valine');
    const leancloudStorage = require('leancloud-storage');
    // require window
    if (typeof window !== 'undefined') {
        window.AV = leancloudStorage;
    }
    // 初始化valine
    new Valine({
        el: '#vcomments',
        appId: 'ouVOID0Df44vS6O5yHbnEqiI-gzGzoHsz',
        appKey: 'xc2q9Ykhkho3V1nUePH50oXN',
        placeholder: 'write here',
        notify: false,
        verify: false
    })
}


export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    try {
        document && renderValine(router);
    } catch (e) {
        console.error(e.message);
    }
}