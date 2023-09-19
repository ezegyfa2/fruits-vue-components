export default {
    install(Vue) {
        require('description-vue-components/Description').default.install(Vue)

        registerVueComponent(
            'fruits-description-section',
            require('./Component.vue').default,
            Vue
        )
    }
}