<template>
  <div class="list-view">

    <header-view
      content="list-view"
      leftTitle="back"
      @onClickLeftButton="onClickHeaderLeftButton()"
      rightTitle="filter"
      @onClickRightButton="onClickHeaderRightButton()"
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
        'setShownList',
      ]),
      onClickHeaderLeftButton() {
        this.setShownList(false)
      },
      onClickHeaderRightButton() {

      },
    },
  }
</script>

<style scoped lang="scss">
  .list-view {
    height: 100%;
    background-color: white;
  }
</style>
