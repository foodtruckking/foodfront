<template>
  <div id="app">

    <header-view
      content="home"
      rightTitle="side-bar"
      @onClickRightButton="onClickHeaderRightButton()"
      />

    <map-controller />

    <div v-if="isDescriptionShown"
      class="description-wrapper">
      <description-view />
    </div>

    <transition name="content-cover">
      <div v-if="isSideBarShown"
        class="content-cover" />
    </transition>

    <transition name="content-wrapper">
      <div v-if="isSideBarShown" class="content-wrapper">
        <side-bar />
      </div>
    </transition>

    <transition name="content-cover">
      <div v-if="isDetailViewShown"
        class="content-cover" />
    </transition>

    <transition name="content-wrapper">
      <div v-if="isDetailViewShown" class="content-wrapper">
        <detail-view />
      </div>
    </transition>

  </div>
</template>

<script>
  import HeaderView      from 'comp/HeaderView.vue'
  import MapController   from 'comp/MapController.vue'
  import DescriptionView from 'comp/DescriptionView.vue'
  import SideBar         from 'comp/SideBar.vue'
  import DetailView      from 'comp/DetailView.vue'

  export default {
    components: {
      HeaderView,
      MapController,
      DescriptionView,
      SideBar,
      DetailView,
    },
    computed: {
      ...Vuex.mapState({
        isDescriptionShown: s => s.ui.description === true,
        isSideBarShown: s => s.ui.sideBar === true,
        isDetailViewShown: s => s.ui.detailView === true,
      }),
    },
    methods: {
      ...Vuex.mapMutations([
        'setShownSideBar',
      ]),
      onClickHeaderRightButton() {
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

  .content-cover, .content-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .content-cover {
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
  .content-cover-enter-active,
  .content-cover-leave-active {
    transition: opacity .3s
  }

  .content-cover-enter,
  .content-cover-leave-to {
    opacity: 0.01;
  }

  .content-wrapper-enter-active,
  .content-wrapper-leave-active {
    transition: transform .3s
  }

  .content-wrapper-enter,
  .content-wrapper-leave-to {
    transform: translateX(100%);
  }
</style>
