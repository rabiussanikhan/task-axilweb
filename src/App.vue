<template>
    <div id="app">
        <app-navbar/>
        <app-main/>
    </div>
</template>

<script>

import AppLibrary from "./components/helper/AppLibrary";

export default {
    name: 'App',
    extends: AppLibrary
}
</script>
