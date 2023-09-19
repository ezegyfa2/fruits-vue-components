export default {
    install(Vue) {
        window.templates.fruits_welcome = require('./Template').default
        require('./ArticlesSmallTextContent').default.install(Vue)
        require('./ArticlesSmallTextContentWithTwoImages').default.install(Vue)
        require('./Description').default.install(Vue)
        require('fruits-vue-components/GlobalComponents/ArticlesSmallTextContentWithBigButton').default.install(Vue)
    }
}