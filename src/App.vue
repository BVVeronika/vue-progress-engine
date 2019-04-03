<template>
  <div id='app'>
    <left-sidebar />
    <router-view />
  </div>
</template>

<style lang='scss'>
  @import './CommonStyles/index.scss';
</style>

<script>
import LeftSidebar from '@/components/LeftSidebar';
export default {
  name: 'App',
  components: { LeftSidebar }
};
</script>
