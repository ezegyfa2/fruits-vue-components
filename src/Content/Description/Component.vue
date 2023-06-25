<template lang="pug">
    include Template.pug
</template>

<script>
    import Description from '../../../../description-vue-components/src/Description.vue';

    export default {
        mixins: [
            Description
        ],
        computed: {
            itemOrientationClass() {
                //Reversed becouse the left_orientation indicate the image position
                return this.left_orientation ?  "justify-content-end" : "";
            },
            textOrientationClass() {
                //Reversed becouse the left_orientation indicate the image position
                return this.left_orientation ?  "text-lg-right" : "";
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
