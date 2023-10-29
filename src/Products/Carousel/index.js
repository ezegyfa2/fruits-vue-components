export default {
    install(Vue) {
        window.templates.fruits_carousel = require('./Template').default
        require('./Container').default.install(Vue)
        require('./Carousel').default.install(Vue)
        require('./CarouselSmallTextContent').default.install(Vue)
        require('./DynamicZoomCarouselSlide').default.install(Vue)
        require('./ZoomCarouselSlide').default.install(Vue)
        require('helper-vue-components/Carousel/CarouselSlide').default.install(Vue)
    }
}