export default {
    "template_type_name": "fruits_layout",
    "params": {
        "navigation_bar_image_url": "/assets/img/logo_small.svg",
        "content_sections": [
            {
                "type": "fruits-carousel"
            },
            {
                "type": "fruits-card",
                "data": {
                    "content_section": {
                        "type": "fruits-articles-small-text-content-with-subtitle",
                        "data": {
                            "title": "--products.card.title",
                            "subtitle": "--products.card.subtitle",
                            "content": "--products.card.content",
                            "top_image_url": "/assets/img/brand_element_01.svg",
                            "top_image_alt": "...",
                            "bottom_image_url": "/assets/img/brand_element_02.svg",
                            "bottom_image_alt": "...",
                            "added_classes": {
                                '.content': ['mb-0'],
                            },
                        },
                    }
                }
            },
            {
                "type": "fruits-articles-small-text-content-with-big-button",
                "data": {
                    "title": "--products.artical_with_big_button.title",
                    "content": "--products.artical_with_big_button.content",
                    "button_content": "--products.artical_with_big_button.button_content",
                    "url": '/',
                    "left_image_url": "/assets/img/gajjak_1.svg",
                    "left_image_alt": "...",
                    "right_image_url": "/assets/img/gajjak_2.svg",
                    "right_image_alt": "...",
                    "added_classes": {
                        '.content': ['mb-0'],
                    },
                },
            }
        ],
    }
}
