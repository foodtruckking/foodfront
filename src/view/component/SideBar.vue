<template>
  <transition name="side-bar">
    <div class="side-bar">

      <div class="common-header">

        <a class="button"
          @click="onClickBackButton()">
          back
        </a>

        <div class="content">
          side-bar
        </div>

        <a class="button"></a>

      </div>

    </div>
  </transition>
</template>

<script>
  export default {
    methods: {
      ...Vuex.mapMutations([
        'setShownSideBar',
      ]),
      onClickBackButton() {
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
