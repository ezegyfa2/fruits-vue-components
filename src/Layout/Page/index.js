export default {
    install(Vue) {
        require('helper-vue-components/Pages/Page').default.install(Vue)

        registerVueComponent(
            'fruits-page',
            require('./Component.vue').default,
            Vue
        )
    }
}