<template>
  <div>
    <div class="head">
      <h1>
        <b>{{ data?.title }}</b>
      </h1>
      <router-link :to="'/news/edit/' + data?.slug" class="editButton">
        <Button :type="'edit'" />
      </router-link>
    </div>
    <img
      class="image"
      :src="
        data?.image?.large
          ? data?.image?.large
          : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
      "
      :alt="data?.title"
    />
    <div class="container">
      <p class="description">{{ data?.contentSnippet }}</p>
      <p class="date">{{ data?.isoDate.split("T")[0] }}</p>

      <hr v-if="data?.description" />
      <div class="content" v-html="data?.content"></div>
    </div>
  </div>
</template>

<script>
import Button from "../atoms/Button.vue";

export default {
  name: "NewsDetailsContent",
  props: ["data"],
  components: { Button },
};
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;
}
.image {
  width: 100%;
  margin: 30px 0 10px 0;
}
.container {
  .description {
    margin-bottom: 10px;
  }
  .date {
    color: gray;
    margin-bottom: 20px;
  }
  .content {
    margin-top: 30px;
  }
}
</style>
