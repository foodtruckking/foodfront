<template>
  <div class="side-bar">

    <header-view
      content="side-bar"
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
        'setShownSideBar',
      ]),
      onClickHeaderLeftButton() {
        this.setShownSideBar(false)
      },
    },
  }
</script>

<style scoped lang="scss">
  .side-bar {
    height: 100%;
    background-color: white;
  }
</style>
