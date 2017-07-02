<template>
  <div class="header-view">

    <a @click="onClickLeftMenuButton()">left</a>

    <div>title</div>

    <a @click="onClickRightMenuButton()">right</a>

  </div>
</template>

<script>
  export default {
    methods: {
      onClickLeftMenuButton() {
        
      },
      onClickRightMenuButton() {

      },
    },
  }
</script>

<style scoped lang="scss">
  .header-view {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $color-lightgray;
  }
</style>
