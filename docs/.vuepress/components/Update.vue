<template>
    <span class="last-updated">
        <span class="prefix">更新于: </span>
        <span class="time">
            <slot></slot>
        </span>
    </span>
</template>
<script>
export default {
    name: 'Update',
}
</script>
<style scoped>
    .last-updated {
        float: right;
        font-size: 0.9em;
    }
    .last-updated .prefix {
        font-weight: 500;
        color: #4e6e8e;
    }
    .last-updated .time {
        font-weight: 400;
        color: #aaa;
    }
</style>