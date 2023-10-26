export default {
    install(Vue) {
        registerVueComponent(
            'fruits-language-button',
            require('./Component.vue').default,
            Vue
        );
    }
}