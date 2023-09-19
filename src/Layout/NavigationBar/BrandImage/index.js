export default {
    install(Vue) {
        registerVueComponent(
            'fruits-brand-image',
            require('./Component.vue').default,
            Vue
        );
    }
}