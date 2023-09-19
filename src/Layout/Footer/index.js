export default {
    install(Vue) {
        window.templates.fruits_footer = require('./Template').default
        require('./Footer').default.install(Vue)
        require('./ButtonIconLink').default.install(Vue)
        require('helper-vue-components/IconLinks/WerticallyIconLinks').default.install(Vue)
    }
}