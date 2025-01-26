<template>
  <div>
    <h8k-navbar v-bind:header="title"></h8k-navbar>
    <Blog/>
  </div>
</template>

<script>
import Blog from "./components/Blog";
export default {
  data() {
    return {
      title : "Blog",
    }
  },
  components : {
    Blog
  },
};

</script>
<style lang="scss">
@import '../node_modules/h8k-design/dist/index.css';
</style>