<template>
  <div>
    <h1>Edit</h1>
    <NewsEditInput :inputType="inputType" :newsDetails="newsDetails" />
  </div>
</template>

<script>
import NewsEditInput from "../molecules/NewsEditInput.vue";

export default {
  name: "NewsEdit",
  components: { NewsEditInput },
  props: ["newsDetails"],
  data() {
    return {
      inputType: [
        { label: "Title", name: "title", type: "text" },
        { label: "Image URL", name: "image", type: "text" },
        { label: "Description", name: "description", type: "text" },
        { label: "Content", name: "content", type: "ckeditor" },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
