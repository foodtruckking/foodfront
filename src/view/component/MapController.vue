<template>
  <div ref="map-controller"
    class="map-controller disable-scrolling"
    :class="isDisabled ? 'disabled' : ''" />
</template>

<script>
  export default {
    props: [
      'isDisabled',
    ],
    computed: {
      ...Vuex.mapState({
        isDescShown: s => s.ui.desc === true,
      }),
    },
    mounted() {
      window.$map = this
    },
    methods: {
      ...Vuex.mapMutations([
        'setShownDesc',
      ]),
      initMap() {
        const wrapper = this.$refs['map-controller']

        const map = new google.maps.Map(wrapper, {
          center: {lat: 33.396, lng: 126.570},
          zoom: 10,
          disableDefaultUI: true,
        })

        map.addListener('click', (event) => {
          this.setShownDesc(!this.isDescShown)
        })

        window.$map = map
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '~scss/defines';

  .map-controller {
    position: absolute;
    top: $header-height;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .disabled {
    pointer-events: none;
  }
</style>
