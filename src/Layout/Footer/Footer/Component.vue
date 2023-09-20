<template lang="pug">
    include Template.pug
</template>

<script>
    import Footer from 'helper-vue-components/Footer/Footer/Component';

    export default {
        mixins: [
            Footer
        ],
        props: {
            url: {
                type: String
            },
            logo_class: {
                type: String
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
