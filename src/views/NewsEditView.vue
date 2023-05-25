<template>
  <PreLoader v-if="loading" />
  <MainLayout v-else>
    <NewsEditForm :newsDetails="newsDetails" />
    <div id="preloader" style="display: none">
      <div class="loading">
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_remmdtqv.json"
          background="transparent"
          speed="1"
          style="width: 300px; height: 300px"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "@/components/templates/MainLayout.vue";
import NewsEditForm from "@/components/organisms/NewsEditForm.vue";
import { mapGetters, mapActions } from "vuex";
import PreLoader from "@/components/templates/PreLoader.vue";

export default {
  name: "NewsEditView",
  components: { MainLayout, NewsEditForm, PreLoader },
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
};
</script>

<style lang="scss" scoped></style>
