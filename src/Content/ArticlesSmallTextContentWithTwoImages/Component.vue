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
            added_classes: {
                type: Object,
                default () {
                    return{
                        '.title': 'text-uppercase',
                        '.content': 'text-muted',
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style";
</style>