<template>
    <div>
        <h1>app组件</h1>
        <router-link to="/account">account</router-link>
        <router-link to="/goodlist">goodlist</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>

</style>