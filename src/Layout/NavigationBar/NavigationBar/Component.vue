<template lang="pug">
    include Template.pug
</template>

<script>
    import NavigationBar from 'blue-admin-vue-components/NavigationBar/NavigationBar/Component.vue'

    export default {
        mixins: [
            NavigationBar
        ],
        props: {
            brand_section: {
                type: Object
            },
            about_us_text: {
                type: String,
            },
            products_text: {
                type: String,
            },
            language: {
                type: String,
                default: 'RO'
            },
            current_url: {
                type: String,
                default: '/'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
