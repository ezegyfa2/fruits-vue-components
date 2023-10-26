<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            language: {
                type: String,
                default: 'RO'
            },
            current_url: {
                type: String,
                default: '/'
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
