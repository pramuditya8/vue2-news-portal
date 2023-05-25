<template>
  <PreLoader v-if="loading" />
  <MainLayout v-else>
    <NewsList :news="news" />
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/templates/MainLayout.vue";
import { mapGetters } from "vuex";
import PreLoader from "@/components/templates/PreLoader.vue";
import NewsList from "@/components/organisms/NewsList.vue";

export default {
  name: "HomeView",
  components: { MainLayout, PreLoader, NewsList },
  computed: {
    ...mapGetters(["news", "loading"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
