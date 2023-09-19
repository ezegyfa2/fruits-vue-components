export default {
    install(Vue) {
        registerVueComponent(
            'fruits-carousel',
            require('./Component.vue').default,
            Vue
        )
    }
}