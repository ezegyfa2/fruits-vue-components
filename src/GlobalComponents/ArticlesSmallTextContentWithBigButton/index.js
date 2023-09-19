export default {
    install(Vue) {
        require('dynamic-web-vue-components/TextContents/ArticlesSmallTextContent').default.install(Vue)

        registerVueComponent(
            'fruits-articles-small-text-content-with-big-button',
            require('./Component.vue').default,
            Vue
        )
    }
}