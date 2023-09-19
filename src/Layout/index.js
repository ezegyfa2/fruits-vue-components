export default {
    install(Vue) {
        window.templates.fruits_layout = require('./Template').default
        require('./NavigationBar').default.install(Vue)
        require('./Footer').default.install(Vue)
    }
}