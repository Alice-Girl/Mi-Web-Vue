<template>
  <div class="home">
    <mi-header/>
    {{msg}}
    <mi-footer/>
  </div>
</template>

<script>
import MiHeader from './layout/Header/index.vue';
import MiFooter from './layout/Footer/index.vue';

export default {
  name: "Home",
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'mi-header': MiHeader,
    'mi-footer': MiFooter
  }
};
</script>

<style lang="scss">

</style>