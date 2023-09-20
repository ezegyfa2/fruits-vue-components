<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            url: {
                type: String
            },
            logo_class: {
                type: String
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
