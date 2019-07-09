<template>
    <div id="vcomments"></div>
</template>

<script>
export default {
    name: 'Valine',
    mounted() {
        console.log(11122)
        const Valine = require('valine');
        if (typeof window !== 'undefined') {
            this.window = window;
            window.AV = require('leancloud-storage');
        }
        new Valine({
            el: '#vcomments',
            appId: 'ouVOID0Df44vS6O5yHbnEqiI-gzGzoHsz',
            appKey: 'xc2q9Ykhkho3V1nUePH50oXN',
            placeholder: 'write here'
        });
    }
}
</script>
