<template>
  <a class="list-item"
    @click="onClickItem()">

    <div class="thumbnail" />

    <div class="content">

      <div class="title">
        title
      </div>

      <div class="description">
        description
      </div>

    </div>

  </a>
</template>

<script>
  export default {
    methods: {
      onClickItem() {

      },
    },
  }
</script>

<style scoped lang="scss">
  @import '~scss/defines';

  $item-height: 120px;
  $thumbnail-width: 140px;

  .list-item {
    margin-top: $list-item-spacing;
    height: $item-height;
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  .thumbnail {
    width: $thumbnail-width;
    border: 1px solid red; /* testable */
  }

  .content {
    flex-grow: 1;
    padding: 8px;
    display: flex;
    flex-direction: column;
  }
</style>
