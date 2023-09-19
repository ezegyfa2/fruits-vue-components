export default {
	install(Vue) {
		require('blue-admin-vue-components').default.install(Vue)
		require('description-vue-components').default.install(Vue)
		require('helper-vue-components').default.install(Vue)
		require('dynamic-web-vue-components').default.install(Vue);

		require('./Templates/templateRegister').default.install()

		registerVueComponent(
			'fruits-page', 
			require('./LayoutPage/Component.vue').default, 
			Vue,
			'fruits-vue-components/src/LayoutPage/Component.vue'
		);

		registerVueComponent(
			'fruits-navigation-bar',
			require('./NavigationBar/NavigationBar/Component.vue').default,
			Vue,
			'fruits-vue-components/src/NavigationBar/NavigationBar/Component.vue'
		);

		registerVueComponent(
            'fruits-brand-image',
            require('./BrandImage/Component.vue').default,
            Vue,
            'fruits-vue-components/src/BrandImage/Component.vue'
        );

		registerVueComponent(
            'fruits-description-section',
            require('./Content/Description/Component.vue').default,
            Vue,
            'fruits-vue-components/src/Content/Description/Component.vue'
        );

		registerVueComponent(
            'fruits-articles-small-text-content',
            require('./Content/ArticlesSmallTextContent/Component.vue').default,
            Vue,
            'fruits-vue-components/src/Content/ArticlesSmallTextContent/Component.vue'
        );

        registerVueComponent(
            'fruits-articles-small-text-content-with-big-button',
            require('./Content/ArticlesSmallTextContentWithBigButton/Component.vue').default,
            Vue,
            'fruits-vue-components/src/Content/ArticlesSmallTextContentWithBigButton/Component.vue'
        );

		registerVueComponent(
            'fruits-articles-small-text-content-with-two-images',
            require('./Content/ArticlesSmallTextContentWithTwoImages/Component.vue').default,
            Vue,
            'fruits-vue-components/src/Content/ArticlesSmallTextContentWithTwoImages/Component.vue'
        );

        registerVueComponent(
            'fruits-articles-small-text-content-with-subtitle',
            require('./Content/ArticlesSmallTextContentWithSubtitle/Component.vue').default,
            Vue,
            'fruits-vue-components/src/Content/ArticlesSmallTextContentWithSubtitle/Component.vue'
        );

		registerVueComponent(
            'fruits-footer',
            require('./Footer/Component.vue').default,
            Vue,
            'fruits-vue-components/src/Footer/Component.vue'
        );

		registerVueComponent(
            'fruits-button-icon-link',
            require('./ButtonIconLink/Component.vue').default,
            Vue,
            'fruits-vue-components/src/ButtonIconLink/Component.vue'
        );

        registerVueComponent(
            'fruits-card',
            require('./Content/Card/Component.vue').default,
            Vue,
            'fruits-vue-components/src/Content/Card/Component.vue'
        );

        registerVueComponent(
            'fruits-carousel',
            require('./Content/Carousel/Component.vue').default,
            Vue,
            'fruits-vue-components/src/Content/Carousel/Component.vue'
        );
	}
}