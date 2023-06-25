<template lang="pug">
    include Template.pug
</template>

<script>
    import Footer from './../../../helper-vue-components/src/Footer/Footer/Component';

    export default {
        mixins: [
            Footer
        ],
        props: {
            image_url: {
                type: String
            },
            image_alt: {
                type: String
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
