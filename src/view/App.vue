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

    <transition name="side-bar-cover">
      <div v-if="isSideBarShown"
        class="side-bar-cover" />
    </transition>

    <transition name="side-bar-wrapper">
      <div v-if="isSideBarShown" class="side-bar-wrapper">
        <side-bar />
      </div>
    </transition>

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

  .side-bar-cover, .side-bar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .side-bar-cover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .description-wrapper {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: $description-height;
  }

  /* transition */
  .side-bar-cover-enter-active,
  .side-bar-cover-leave-active {
    transition: opacity .3s
  }

  .side-bar-cover-enter,
  .side-bar-cover-leave-to {
    opacity: 0.01;
  }

  .side-bar-wrapper-enter-active,
  .side-bar-wrapper-leave-active {
    transition: transform .3s
  }

  .side-bar-wrapper-enter,
  .side-bar-wrapper-leave-to {
    transform: translateX(100%);
  }
</style>
