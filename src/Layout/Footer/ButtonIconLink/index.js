export default {
    install(Vue) {
        require('helper-vue-components/IconLinks/ButtonIconLink2').default.install(Vue)

        registerVueComponent(
            'fruits-button-icon-link',
            require('./Component.vue').default,
            Vue
        );
    }
}