export default {
    "type": "fruits-navigation-bar",
    "data": {
        "title": "Fruits",
        "title_url": "/",
        "link_sections": [
            {
                "type": "fruits-navigation-link",
                "data": {
                    "url": "",
                    "content": "--layout.navbar.about_us_text",
                }
            },
            {
                "type": "fruits-navigation-link",
                "data": {
                    "url": "#services",
                    "content": "--layout.navbar.products_text",
                }
            },
            {
                "type": "fruits-language-button",
                "data": {
                    "language": "-++current_language",
                    "current_url": "-++current_url"
                }
            },
        ],
    }
}
