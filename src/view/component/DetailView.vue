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
        'setShownDetailView',
      ]),
      onClickHeaderLeftButton() {
        this.setShownDetailView(false)
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
