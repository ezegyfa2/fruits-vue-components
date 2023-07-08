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
            left_image_url: {
                type: String
            },
            left_image_alt: {
                type: String
            },
            right_image_url: {
                type: String
            },
            right_image_alt: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>