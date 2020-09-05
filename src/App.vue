<template>
    <div id="app">
        <div class="router-view">
            <RouterView />
        </div>
    </div>
</template>

<script>

export default {
    name: 'App'
};
</script>

<style lang="scss" scoped>
.router-view {
    height: 100%;
}
</style>
