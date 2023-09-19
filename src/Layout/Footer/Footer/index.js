export default {
    install(Vue) {
        require('helper-vue-components/Footer/Footer').default.install(Vue)

        registerVueComponent(
            'fruits-footer',
            require('./Component.vue').default,
            Vue
        )
    }
}