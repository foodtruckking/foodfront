<template>
  <div class="wrapper">

    <a class="button"
      @click="onClickLeftButton()">
      {{leftTitle}}
    </a>

    <div class="content">
      {{content}}
    </div>

    <a class="button"
      @click="onClickRightButton()">
      {{rightTitle}}
    </a>

  </div>
</template>

<script>
  export default {
    props: [
      'content',
      'leftTitle',
      'rightTitle',
    ],
    methods: {
      onClickLeftButton() {
        this.$emit('onClickLeftButton')
      },
      onClickRightButton() {
        this.$emit('onClickRightButton')
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '~scss/defines';

  .wrapper {
    height: $header-height;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $color-lightgray;
    padding: 0 8px;
  }

  .button {
    min-width: 40px;
    text-align: center;
  }

  .content {
    font-weight: bold;
  }
</style>
