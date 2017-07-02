<template>
  <div id="app">

    <div class="header">
      <a @click="onClickLeftMenuButton()">left</a>
      <div>title</div>
      <a @click="onClickRightMenuButton()">right</a>
    </div>

    <map-controller />

    <div v-if="isSideBarShown"
      class="side-bar-wrapper">
      <side-bar />
    </div>

    <div v-if="isDescriptionShown"
      class="description-wrapper">
      <description-view />
    </div>

  </div>
</template>

<script>
  import MapController   from 'comp/MapController.vue'
  import SideBar         from 'comp/SideBar.vue'
  import DescriptionView from 'comp/DescriptionView.vue'

  export default {
    components: {
      MapController,
      SideBar,
      DescriptionView,
    },
    computed: {
      ...Vuex.mapState({
        isSideBarShown: s => s.ui.sideBar === true,
        isDescriptionShown: s => s.ui.description === true,
      }),
    },
    methods: {
      onClickLeftMenuButton() {
        
      },
      onClickRightMenuButton() {

      },
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

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $header-height;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $color-lightgray;
  }

  .side-bar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .description-wrapper {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: $description-height;
  }
</style>
