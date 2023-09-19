export default {
    install(Vue) {
        registerVueComponent(
            'fruits-card',
            require('./Component.vue').default,
            Vue
        )
    }
}