export default {
    install(Vue) {
        require('../DynamicZoomCarouselSlide').default.install(Vue)

        registerVueComponent(
            'fruits-zoom-carousel-slide',
            require('./Component.vue').default,
            Vue
        )
    }
}