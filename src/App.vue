<!-- 整个应用的根组件 -->
<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容，路由内容通过router下的index.js的配置中找到 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
