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
            current_language: {
                type: String,
                default: 'EN'
            },
            languages: {
                type: Array,
                default: 'EN'
            },
            products_link: {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
