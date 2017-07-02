<template>
  <div id="app">

    <header-view
      content="home"
      rightTitle="list"
      @onClickRightButton="onClickListButton()"
      />

    <map-controller
      :isDisabled="isListShown || isDetailShown" />

    <div v-if="isDescShown"
      class="description-wrapper">
      <description-view />
    </div>

    <!-- list view -->
    <transition name="content-cover">
      <div v-if="isListShown"
        class="content-cover" />
    </transition>

    <transition name="content-wrapper">
      <div v-if="isListShown" class="content-wrapper">
        <list-view />
      </div>
    </transition>

    <!-- detail view -->
    <transition name="content-cover">
      <div v-if="isDetailShown"
        class="content-cover" />
    </transition>

    <transition name="content-wrapper">
      <div v-if="isDetailShown" class="content-wrapper">
        <detail-view />
      </div>
    </transition>

  </div>
</template>

<script>
  import HeaderView      from 'comp/HeaderView.vue'
  import MapController   from 'comp/MapController.vue'
  import DescriptionView from 'comp/DescriptionView.vue'
  import ListView        from 'comp/ListView.vue'
  import DetailView      from 'comp/DetailView.vue'

  export default {
    components: {
      HeaderView,
      MapController,
      DescriptionView,
      ListView,
      DetailView,
    },
    computed: {
      ...Vuex.mapState({
        isDescShown: s => s.ui.desc === true,
        isListShown: s => s.ui.list === true,
        isDetailShown: s => s.ui.detail === true,
      }),
    },
    mounted() {
      this.attachScrollEventListener()
    },
    methods: {
      ...Vuex.mapMutations([
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
