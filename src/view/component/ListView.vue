<template>
  <div class="list-view">

    <header-view
      content="list-view"
      leftTitle="back"
      @onClickLeftButton="onClickBackButton()"
      rightTitle="filter"
      @onClickRightButton="onClickFilterButton()"
      />

    <!-- testable -->
    <div class="item-wrapper">

      <list-item v-for="i in 20"
        :key="`list-item-${i}`"
        @onClickItem="onClickItem()" />
      
    </div>

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
        'setShownDetail',
      ]),
      onClickBackButton() {
        this.setShownList(false)
      },
      onClickFilterButton() {

      },
      onClickItem() {
        this.setShownDetail(true)
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '~scss/defines';

  .list-view {
    height: 100%;
    background-color: white;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .item-wrapper {
    padding-bottom: $list-item-spacing;

    & > a {
      margin-top: $list-item-spacing;
    }
  }
</style>
