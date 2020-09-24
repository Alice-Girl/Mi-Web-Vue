<template>
  <div class="header">
    <div class="nev-header">
      <div class="container">
        Header头部
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.header {
  .nev-header {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #b0b0b0;
    background-color: $color_B;
  }
}
</style>
