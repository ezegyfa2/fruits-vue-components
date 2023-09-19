export default {
    install(Vue) {
        require('blue-admin-vue-components/NavigationBar/NavigationBar').default.install(Vue)

        registerVueComponent(
            'fruits-navigation-bar',
            require('./Component.vue').default,
            Vue
        );
    }
}