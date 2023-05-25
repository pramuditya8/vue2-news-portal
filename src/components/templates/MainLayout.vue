<template>
  <div>
    <NavBar />
    <div class="Layout">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../organisms/Footer.vue";
import NavBar from "../organisms/NavBar.vue";

export default {
  name: "MainLayout",
  components: { NavBar, Footer },
};
</script>

<style lang="scss" scoped>
.Layout {
  padding: 48px 400px;
}

@media screen and (max-width: 1280px) {
  .Layout {
    padding: 96px 150px 0 150px;
  }
}

@media screen and (max-width: 1080px) {
  .Layout {
    padding: 96px 80px 0 80px;
  }
}

@media screen and (max-width: 768px) {
  .Layout {
    padding: 96px 30px 0 30px;
  }
}
</style>
