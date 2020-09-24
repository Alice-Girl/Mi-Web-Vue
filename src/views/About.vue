<template>
  <div class="about">
    {{ message }}
  </div>
</template>

<script>
import Products from "../api/user.js";

export default {
  name: "About",
  data() {
    return {
      message: "This is an about page",
    };
  },
  created() {
    Products().then((res) => {
      console.log(res.list);
    });
  },
};
</script>

<style lang="scss"></style>
