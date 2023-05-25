<template>
  <div class="input">
    <div class="item" v-for="(typeInput, index) in inputType" :key="index">
      <label>{{ typeInput?.label }}</label>
      <input
        v-if="typeInput?.type === 'text'"
        :type="typeInput?.type"
        :name="typeInput?.name"
        v-model="value[typeInput?.name]"
      />
      <ckeditor
        v-if="typeInput?.type === 'ckeditor'"
        :editor="editor"
        v-model="value[typeInput?.name]"
        :config="editorConfig"
      ></ckeditor>
    </div>
    <div class="button-container">
      <div @click.prevent="handleEdit()">
        <Button :type="'save'" />
      </div>
      <div @click="$router.back()">
        <Button :type="'cancel'" />
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Button from "../atoms/Button.vue";
import { mapActions } from "vuex";

export default {
  name: "NewsEditInput",
  props: ["inputType", "newsDetails"],
  components: { Button },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {},
      value: {
        title: "",
        description: "",
        content: "",
        image: "",
        slug: "",
      },
    };
  },
  created() {
    this.value.title = this.newsDetails?.title;
    this.value.description = this.newsDetails?.contentSnippet;
    this.value.content = this.newsDetails?.content;
    this.value.image = this.newsDetails?.image?.large;
    this.value.slug = this.newsDetails?.slug;
  },
  mounted() {},

  methods: {
    ...mapActions(["editNews"]),
    handleEdit() {
      this.editNews(this.value);
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  .item {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    input[type="text"] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
  }
}
.button-container {
  display: flex;
  gap: 10px;
}
</style>
