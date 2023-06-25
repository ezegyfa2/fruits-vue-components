export default {
    "type": "fruits-website-page",
    "data": {
        "navigation_bar_section": {
            "template_type_name": "fruits_website_navigationBar"
        },
        "content_sections": [
            {
                "type": "blue-admin-centered-content",
                "data": {
                    "content_sections": [
                        {
                            "type": "blue-admin-success-session-message",
                            "array_data": "success_messages",
                            "merge_to_parent": true,
                            "data": {
                                "content": "-++success_messages"
                            }
                        },
                        {
                            "type": "blue-admin-error-session-message",
                            "array_data": "error_messages",
                            "merge_to_parent": true,
                            "data": {
                                "content": "-++error_messages"
                            }
                        },
                        {
                            "type": "blue-admin-warning-session-message",
                            "array_data": "warning_messages",
                            "merge_to_parent": true,
                            "data": {
                                "content": "-++warning_messages"
                            }
                        },
                        {
                            "type": "blue-admin-info-session-message",
                            "array_data": "info_messages",
                            "merge_to_parent": true,
                            "data": {
                                "content": "-++info_messages"
                            }
                        },
                        {
                            "array_data": "content_sections",
                            "merge_to_parent": true,
                            "direct_paste": true
                        }
                    ]
                }
            }
        ],
        "footer_section": {
            "template_type_name": "fruits_website_footer",
            "params": {
                "icons": [
                    {
                        "url": "",
                        "icon_class": "fab fa-facebook-f"
                    },
                    {
                        "url": "",
                        "icon_class": "fab fa-twitter"
                    },
                    {
                        "url": "",
                        "icon_class": "fas fa-envelope"
                    },
                ],
                "copyright": {
                    "content": "Cím: Siculeni 106, 537295, HR.\nTelefon: 0266 379107\nFax: 0266 316951\nEmail: madefalva@yahoo.com"
                },
                "image_url": "/assets/img/logo_small.svg",
                "image_alt": "...",
            }
        }
    }
}
