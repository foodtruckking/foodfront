<template>
  <div id="app">

    <header-view
      content="home"
      leftTitle="info"
      @onClickLeftButton="onClickInfoButton()"
      rightTitle="list"
      @onClickRightButton="onClickListButton()"
      />

    <map-controller
      :isDisabled="isListShown || isDetailShown" />

    <div v-if="isDescShown"
      class="description-wrapper">
      <description-view />
    </div>

    <!-- info view -->
    <transition name="content-cover">
      <div v-if="isInfoShown"
        class="content-cover"
        @click="onClickCover()" />
    </transition>

    <transition name="content-wrapper-left">
      <div v-if="isInfoShown"
        class="content-wrapper left">
        <info-view />
      </div>
    </transition>

    <!-- list view -->
    <transition name="content-cover">
      <div v-if="isListShown"
        class="content-cover"
        @click="onClickCover()" />
    </transition>

    <transition name="content-wrapper-right">
      <div v-if="isListShown"
        class="content-wrapper">
        <list-view />
      </div>
    </transition>

    <!-- detail view -->
    <transition name="content-cover">
      <div v-if="isDetailShown"
        class="content-cover"
        @click="onClickCover()" />
    </transition>

    <transition name="content-wrapper-right">
      <div v-if="isDetailShown"
        class="content-wrapper">
        <detail-view />
      </div>
    </transition>

  </div>
</template>

<script>
  import HeaderView      from 'comp/HeaderView.vue'
  import MapController   from 'comp/MapController.vue'
  import DescriptionView from 'comp/DescriptionView.vue'
  import InfoView        from 'comp/InfoView.vue'
  import ListView        from 'comp/ListView.vue'
  import DetailView      from 'comp/DetailView.vue'

  export default {
    components: {
      HeaderView,
      MapController,
      DescriptionView,
      InfoView,
      ListView,
      DetailView,
    },
    computed: {
      ...Vuex.mapState({
        isDescShown: s => s.ui.desc === true,
        isInfoShown: s => s.ui.info === true,
        isListShown: s => s.ui.list === true,
        isDetailShown: s => s.ui.detail === true,
      }),
    },
    mounted() {
      this.attachScrollEventListener()
    },
    methods: {
      ...Vuex.mapMutations([
        'setShownInfo',
        'setShownList',
      ]),
      attachScrollEventListener() {
        document.ontouchmove = (event) => {
          let isTouchAllowed = true
          let target = event.target

          while (target !== null) {
            if (target.classList && target.classList.contains('disable-scrolling') ) {

              isTouchAllowed = false
              break
            }
            target = target.parentNode
          }

          if (!isTouchAllowed) {
            event.preventDefault()
          }
        }
      },
      onClickCover() {
        this.setShownInfo(false)
        this.setShownList(false)
      },
      onClickInfoButton() {
        this.setShownInfo(true)
      },
      onClickListButton() {
        this.setShownList(true)
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
    width: 100%;
    height: 100%;

    &.left {
      width: 80%;
    }
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

  .content-wrapper-left-enter-active,
  .content-wrapper-left-leave-active,
  .content-wrapper-right-enter-active,
  .content-wrapper-right-leave-active {
    transition: transform .3s
  }

  .content-wrapper-left-enter,
  .content-wrapper-left-leave-to {
    transform: translateX(-100%);
  }

  .content-wrapper-right-enter,
  .content-wrapper-right-leave-to {
    transform: translateX(100%);
  }
</style>
