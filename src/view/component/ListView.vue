<template>
  <div class="list-view">

    <header-view
      content="list-view"
      leftTitle="back"
      @onClickLeftButton="onClickHeaderLeftButton()"
      rightTitle="filter"
      @onClickRightButton="onClickHeaderRightButton()"
      />

    <!-- testable -->
    <list-item v-for="i in 20"
      :key="`list-item-${i}`" />

  </div>
</template>

<script>
  import HeaderView from 'comp/HeaderView.vue'
  import ListItem   from 'comp/ListItem.vue'

  export default {
    components: {
      HeaderView,
      ListItem,
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
  @import '~scss/defines';

  .list-view {
    height: 100%;
    background-color: white;
    padding-bottom: $list-item-spacing;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
