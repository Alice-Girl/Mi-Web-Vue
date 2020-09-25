<template>
  <div class="home">
    <mi-header />
    <div class="container">
      <h1>23</h1>
      <h1>23</h1>
      <h1>23</h1>
      <h1>23</h1>
      <h1>23</h1>
      <h1>23</h1>
      <h1>23</h1>
      <h1>23</h1>
      <h1>23</h1>
      <h1>23</h1>
      {{ msg }}
    </div>
    <mi-footer />
  </div>
</template>

<script>
import MiHeader from "./layout/Header/index.vue";
import MiFooter from "./layout/Footer/index.vue";

export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: {
    "mi-header": MiHeader,
    "mi-footer": MiFooter,
  },
};
</script>

<style lang="scss"></style>
