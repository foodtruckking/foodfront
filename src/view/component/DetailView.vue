<template>
  <div class="detail-view">

    <header-view
      content="detail-view"
      leftTitle="back"
      @onClickLeftButton="onClickBackButton()"
      />

    <div class="thumbnail"></div>

    <div class="title">
      title
    </div>

    <div class="description">
      description
    </div>

    <div ref="map-wrapper" class="map-wrapper" />

    <a class="map-button"
      @click="onClickMapButton()">
      <div>view on the map</div>
    </a>

  </div>
</template>

<script>
  import HeaderView from 'comp/HeaderView.vue'

  export default {
    components: {
      HeaderView,
    },
    mounted() {
      this.initDetailMap()
    },
    methods: {
      ...Vuex.mapMutations([
        'setShownList',
        'setShownDetail',
      ]),
      onClickBackButton() {
        this.setShownDetail(false)
      },
      initDetailMap() {
        const wrapper = this.$refs['map-wrapper']

        new google.maps.Map(wrapper, {
          center: {lat: 33.396, lng: 126.570},
          zoom: 12,
          disableDefaultUI: true,
          gestureHandling: 'none',
        })
      },
      onClickMapButton() {
        this.setShownList(false)
        this.setShownDetail(false)
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '~scss/defines';

  $thumbnail-height: 280px;
  $map-height: 200px;
  $map-button-height: 40px;

  .detail-view {
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .thumbnail {
    height: $thumbnail-height;
    border: 1px solid red; /* testable */
  }

  .title {

  }

  .description {

  }

  .map-wrapper {
    height: $map-height;
    pointer-events: none;
  }

  .map-button {
    height: $map-button-height;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
