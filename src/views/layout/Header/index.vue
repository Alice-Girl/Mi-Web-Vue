<template>
  <div class="header">
    <div class="nev-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:void(0);">小米商城</a>
          <a href="javascript:void(0);">MUI</a>
          <a href="javascript:void(0);">云服务</a>
          <a href="javascript:void(0);">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:void(0);">登录</a>
          <a href="javascript:void(0);">注册</a>
          <a href="javascript:void(0);">购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header"></div>
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
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background-color: $color_B;
  .container {
    width: 1226px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    // flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    a {
      margin-right: 18px;
    }
  }
}
</style>
