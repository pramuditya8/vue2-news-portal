<template>
  <div
    v-if="index > 2"
    @click="$router.push('/news/' + data?.slug)"
    class="post"
  >
    <img
      class="image"
      :src="
        data?.image?.small
          ? data?.image?.small
          : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
      "
      :alt="data?.title"
    />
    <div class="container">
      <h4>
        <b>{{ data?.title }}</b>
      </h4>
      <p>{{ data?.contentSnippet }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsPost",
  props: ["data", "index"],
};
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
}
.post {
  width: calc(33.33% - 10px);
  cursor: pointer;
  margin-bottom: 50px;
}

@media screen and (max-width: 768px) {
  .post {
    width: calc(50% - 10px);
    cursor: pointer;
  }
}

@media screen and (max-width: 480px) {
  .post {
    width: calc(100%);
    cursor: pointer;
  }
}

.post:hover {
  opacity: 0.7;
}

.container {
  h4 {
    margin-bottom: 10px;
  }
}
</style>
