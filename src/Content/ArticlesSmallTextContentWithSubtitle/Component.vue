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
            top_image_url: {
                type: String
            },
            top_image_alt: {
                type: String
            },
            bottom_image_url: {
                type: String
            },
            bottom_image_alt: {
                type: String
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>