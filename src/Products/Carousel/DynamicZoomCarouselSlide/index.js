export default {
    install(Vue) {
        require('helper-vue-components/Carousel/DynamicZoomCarouselSlide').default.install(Vue)

        registerVueComponent(
            'fruits-dynamic-zoom-carousel-slide',
            require('./Component.vue').default,
            Vue
        )
    }
}