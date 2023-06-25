export default {
    install() {
        if (!window.templates) {
            window.templates = {}
        }
        window.templates.fruits_website_layout = require('./Layout/layout').default
        window.templates.fruits_website_navigationBar = require('./Layout/NavigationBar/navigationBar_products').default
        // window.templates.fruits_website_navigationBar = require('./Layout/NavigationBar/navigationBar').default
        window.templates.fruits_website_footer = require('./Layout/footer').default
        window.templates.fruits_website_products = require('./Products/products').default

        window.templates.fruits_website_index = require('./Layout/index').default
        window.templates.fruits_website_products_index = require('./Products/index').default
    }
}
