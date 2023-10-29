export default {
    install(Vue) {
        registerVueComponent(
            'fruits-carousel-container',
            require('./Component.vue').default,
            Vue
        )
    }
}