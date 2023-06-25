<template lang="pug">
    include Template.pug
</template>

<script>
    import ArticlesSmallTextContent from '../../../../dynamic-web-vue-components/src/TextContents/ArticlesSmallTextContent/Component.vue'

    export default {
        mixins: [
            ArticlesSmallTextContent
        ],
        props: {
            subtitle: {
                type: String,
                default: ''
            },
            image_url: {
                type: String
            },
            image_alt: {
                type: String
            },
            image2_url: {
                type: String
            },
            image2_alt: {
                type: String
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>