<template lang="pug">
    include Template.pug
</template>

<script>
    import SmallTextContent from 'text-contents-vue-components/SmallTextContent/Component.vue'

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