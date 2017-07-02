<template>
  <div id="app">

    <map-controller />

    <div class="header-wrapper">
      <header-view />
    </div>

  </div>
</template>

<script>
  import HeaderView    from 'comp/HeaderView.vue'
  import MapController from 'comp/MapController.vue'

  export default {
    components: {
      HeaderView,
      MapController,
    },
  }
</script>

<style scoped lang="scss">
  @import '~scss/defines';

  #app {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .header-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $header-height;
  }
</style>
