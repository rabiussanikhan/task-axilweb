<template>
    <div id="app">
        <app-navbar/>
        <a href="https://bestwebcreator.com/shopwise/demo/index-2.html" target="_blank">Demo</a>
    </div>
</template>

<script>

export default {
    name: 'App',
    mounted() {
        this.$nextTick(() => {
            const feather = require('feather-icons');
            feather.replace();
        });
    }
}
</script>
