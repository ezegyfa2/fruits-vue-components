export default {
    install() {
        if (!window.templates) {
            window.templates = {}
        }
        window.templates.fruits_website_products = require('./products').default
        window.templates.fruits_website_index = require('./index').default

        window.templates.fruits_website_layout = require('./Layout/layout').default
        window.templates.fruits_website_navigation_bar = require('./Layout/navigationBar').default
        window.templates.fruits_website_footer = require('./Layout/footer').default
    }
}
