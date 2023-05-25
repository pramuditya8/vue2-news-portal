<template>
  <div class="container">
    <h1>Featured News</h1>
    <FeaturedNews :news="news" />
    <h1 style="margin-top: 30px">More News</h1>
    <NewsPost
      v-for="(data, index) in news"
      :key="index"
      :data="data"
      :index="index"
    />
  </div>
</template>

<script>
import NewsPost from "@/components/molecules/NewsPost.vue";
import FeaturedNews from "../molecules/FeaturedNews.vue";

export default {
  name: "NewsList",
  props: ["news"],
  components: { NewsPost, FeaturedNews },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
h1 {
  width: 100%;
  margin-bottom: 10px;
}
</style>
