<template>
    <div id="app">
        <app-navbar/>
        <app-main/>
        <app-products/>
    </div>
</template>

<script>

import AppLibrary from "./components/helper/AppLibrary";

export default {
    name: 'App',
    extends: AppLibrary
}
</script>
