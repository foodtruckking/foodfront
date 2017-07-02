<template>
  <div id="app">

    <div class="common-header">

      <a class="button"
        @click="onClickLeftMenuButton()">
        left
      </a>

      <div class="content">
        title
      </div>

      <a class="button"
        @click="onClickRightMenuButton()">
        right
      </a>

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
      ...Vuex.mapMutations([
        'setShownSideBar',
      ]),
      onClickLeftMenuButton() {
        
      },
      onClickRightMenuButton() {
        this.setShownSideBar(true)
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
