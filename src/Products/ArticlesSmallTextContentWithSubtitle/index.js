export default {
    install(Vue) {
        require('text-contents-vue-components/SmallTextContent').default.install(Vue)

        registerVueComponent(
            'fruits-articles-small-text-content-with-subtitle',
            require('./Component.vue').default,
            Vue
        )
    }
}