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

    <!-- description -->
    <transition name="description-wrapper">
      <div v-if="isDescShown"
        class="description-wrapper">

        <list-item @onClickItem="onClickItem()" />

        <a class="footer" @click="onClickItemList()">
          <div>see more items</div>
        </a>

      </div>
    </transition>

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
  import InfoView        from 'comp/InfoView.vue'
  import ListView        from 'comp/ListView.vue'
  import ListItem        from 'comp/ListItem.vue'
  import DetailView      from 'comp/DetailView.vue'

  export default {
    components: {
      HeaderView,
      MapController,
      InfoView,
      ListView,
      ListItem,
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
        'setShownDesc',
        'setShownInfo',
        'setShownList',
        'setShownDetail',
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
      onClickItem() {
        this.setShownDesc(false)
        this.setShownDetail(true)
      },
      onClickItemList() {
        this.setShownDesc(false)
        this.setShownList(true)
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

  $desc-footer-height: 30px;

  #app {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .description-wrapper {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: calc(#{$list-item-height} + #{$desc-footer-height});
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    .footer {
      height: $desc-footer-height;
      display: flex;
      justify-content: center;
      align-items: center;
    }
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

  /* transition */
  .description-wrapper-enter-active,
  .description-wrapper-leave-active {
    transition: transform .3s
  }

  .description-wrapper-enter,
  .description-wrapper-leave-to {
    transform: translateY(100%);
  }

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
