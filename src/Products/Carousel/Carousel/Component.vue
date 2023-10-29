<script>
    import Carousel from 'helper-vue-components/Carousel/Carousel/Component.vue'

    export default {
        mixins: [
            Carousel
        ],
    }
</script>

<style lang="scss">
    // .carousel-inner doesn't work with scoped style
    @import "Style.scss";
</style>
