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
                    "content": "--layout.navbar.about_us_text"
                }
            },
            {
                "type": "fruits-navigation-link",
                "data": {
                    "url": "/products",
                    "content": "--layout.navbar.products_text"
                }
            },
            {
                "type": "fruits-language-button",
                "data": {
                    "current_language": "-++current_language",
                    "languages": "-++languages"
                }
            }
        ]
    }
}
