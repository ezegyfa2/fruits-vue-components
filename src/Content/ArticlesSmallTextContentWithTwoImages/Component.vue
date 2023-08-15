<template lang="pug">
    include Template.pug
</template>

<script>
    import SmallTextContent from '../../../../text-contents-vue-components/src/SmallTextContent/Component.vue'

    export default {
        mixins: [
            SmallTextContent
        ],
        props: {
            url: {
                type: String
            },
            button_content: {
                type: String,
                default: 'Contact us'
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