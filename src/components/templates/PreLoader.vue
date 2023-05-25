<template>
  <div>
    <NavBar />
    <div class="preloader">
      <h3>Loading...</h3>
    </div>
  </div>
</template>

<script>
import NavBar from "../organisms/NavBar.vue";

export default {
  name: "PreLoader",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { NavBar },
};
</script>

<style lang="scss" scoped>
.preloader {
  background-color: rgba(0, 0, 0, 0.384);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    color: white;
  }
}
</style>
