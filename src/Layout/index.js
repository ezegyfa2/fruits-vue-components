export default {
    install(Vue) {
        window.templates.fruits_layout = require('./Template').default
        require('./Page').default.install(Vue)
        require('./NavigationBar').default.install(Vue)
        require('./Footer').default.install(Vue)
        require('helper-vue-components/Pages/Page').default.install(Vue)
    }
}
