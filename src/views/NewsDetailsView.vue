<template>
  <PreLoader v-if="loading" />
  <MainLayout v-else>
    <NewsDetails :data="newsDetails" />
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/templates/MainLayout.vue";
import NewsDetails from "@/components/organisms/NewsDetails.vue";
import { mapGetters, mapActions } from "vuex";
import PreLoader from "@/components/templates/PreLoader.vue";

export default {
  name: "NewsDetailsView",

  computed: {
    ...mapGetters(["newsDetails", "news", "loading"]),
  },
  methods: {
    ...mapActions(["findNewsDetails"]),
  },
  created() {
    this.findNewsDetails(this.$route.params.slug);
  },
  watch: {
    news: {
      handler() {
        this.findNewsDetails(this.$route.params.slug);
      },
    },
  },
  components: { MainLayout, NewsDetails, PreLoader },
};
</script>

<style lang="scss" scoped></style>
