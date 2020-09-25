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
          <a href="javascript:void(0);" class="icon_cort">
            <i class="iconfont icon-icon4"></i>
            <span>购物车</span>
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo"></div>
        <div class="header-nav">
          <ul class="nav_list">
            <li class="nav_item"></li>
            <li class="nav_item"></li>
            <li class="nav_item"></li>
          </ul>
        </div>
        <div class="header-search"></div>
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
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background-color: $color_B;
  .container {
    display: flex;
    flex-direction: row;
    // flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    a {
      margin-right: 18px;
      i {
        font-size: 18px;
        vertical-align: middle;
      }
      span {
        margin-left: 4px;
        vertical-align: top;
      }
      &:hover {
        color: #fff;
      }
    }

    .icon_cort {
      width: 110px;
      height: 40px;
      text-align: center;
      color: #fff;
      background-color: #424242;
      &:hover {
        color: $color_A;
        font-weight: 900;
        background-color: #fff;
      }
    }
  }
  .nav-header {
    height: 100px;
    background-color: red;
  }
}
</style>
