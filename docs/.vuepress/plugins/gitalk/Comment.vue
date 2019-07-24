<template>
    <div></div>
</template>

<script>
import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css'

let timer = null;

export default {
    data() {
        return {
            commentDomID: 'gitalk'
        }
    },
    mounted() {
        timer = setTimeout(() => {
            const frontmatter = {
                to: {},
                from: {},
                ...this.$frontmatter
            };
            this.clear() && this.needComment(frontmatter) && this.renderComment(frontmatter);
        }, 1000);

        this.$router.afterEach((to, from) => {
            if (to && from && to.path === from.path) {
                return;
            }
            const frontmatter = {
                to,
                from,
                ...this.$frontmatter
            };
            this.clear() && this.needComment(frontmatter) && this.renderComment(frontmatter);
        });
    },
    methods: {
        clear () {
            const last = document.querySelector(`#${this.commentDomID}`)
            if (last) {
                last.remove()
            }
            return true
        },
        needComment(frontmatter) {
            return frontmatter.gittalk !== false;
        },
        renderComment(frontmatter) {
            clearTimeout(timer);

            const parentDOM = document.querySelector(COMMENT_CONTAINER);
            if (!parentDOM) {
                timer = setTimeout(() => this.renderComment(frontmatter), 200);
                return;
            }

            const commentDOM = document.createElement('div');
            commentDOM.id = this.commentDomID;
            parentDOM.appendChild(commentDOM);

            // https://github.com/gitalk/gitalk/issues/102
            let options = JSON.parse(JSON.stringify(COMMENT_OPTIONS));
            options.id = decodeURI(location.pathname);

            const gittalk = new Gitalk(options);
            gittalk.render(this.commentDomID);
        }
    }
};
</script>
<style>
#gitalk {
    max-width: 740px;
    margin: 0 auto;
    padding: 2rem 2.5rem;
}
</style>


