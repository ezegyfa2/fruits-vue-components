export default {
    install(Vue) {
        require('helper-vue-components/Carousel/Carousel').default.install(Vue)
        
        registerVueComponent(
            'fruits-carousel',
            require('./Component.vue').default,
            Vue
        )
    }
}