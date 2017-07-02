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
        this.$emit('onClickItem')
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '~scss/defines';

  $thumbnail-width: 140px;

  .list-item {
    height: $list-item-height;
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
