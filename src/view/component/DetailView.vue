<template>
  <div class="detail-view">

    <header-view
      content="detail-view"
      leftTitle="back"
      @onClickLeftButton="onClickHeaderLeftButton()"
      />

  </div>
</template>

<script>
  import HeaderView from 'comp/HeaderView.vue'

  export default {
    components: {
      HeaderView,
    },
    methods: {
      ...Vuex.mapMutations([
        'setShownDetail',
      ]),
      onClickHeaderLeftButton() {
        this.setShownDetail(false)
      },
    },
  }
</script>

<style scoped lang="scss">
  .detail-view {
    height: 100%;
    background-color: white;
  }
</style>
