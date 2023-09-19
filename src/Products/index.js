export default {
    install(Vue) {
        window.templates.fruits_products = require('./Template').default
        require('./ArticlesSmallTextContentWithSubtitle').default.install(Vue)
        require('./Card').default.install(Vue)
        require('./Carousel').default.install(Vue)
        require('fruits-vue-components/GlobalComponents/ArticlesSmallTextContentWithBigButton').default.install(Vue)
    }
}