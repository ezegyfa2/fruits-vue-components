<template lang="pug">
    include Template.pug
</template>

<script>
    import ArticlesSmallTextContent from '../../../../dynamic-web-vue-components/src/TextContents/ArticlesSmallTextContent/Component.vue'

    export default {
        mixins: [
            ArticlesSmallTextContent
        ],
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>