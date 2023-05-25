<template>
  <div class="container">
    <div class="card" @click="$router.push('/news/' + news[0]?.slug)">
      <img :src="news[0]?.image?.large" alt="Card Image" class="card-image" />
      <div class="card-overlay">
        <h3 class="card-title">{{ news[0]?.title }}</h3>
        <p class="card-description">{{ news[0]?.contentSnippet }}</p>
      </div>
    </div>
    <div class="card-container">
      <div class="card-small" @click="$router.push('/news/' + news[1]?.slug)">
        <img :src="news[1]?.image?.large" alt="Card Image" class="card-image" />
        <div class="card-overlay">
          <h3 class="card-title">{{ news[1]?.title }}</h3>
          <p class="card-description">{{ news[1]?.contentSnippet }}</p>
        </div>
      </div>
      <div class="card-small" @click="$router.push('/news/' + news[2]?.slug)">
        <img :src="news[2]?.image?.large" alt="Card Image" class="card-image" />
        <div class="card-overlay">
          <h3 class="card-title">{{ news[2]?.title }}</h3>
          <p class="card-description">{{ news[2]?.contentSnippet }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedNews",
  props: ["news"],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 10px;
}
.card {
  position: relative;
  width: 60%;
  overflow: hidden;
  cursor: pointer;
}
.card:hover {
  opacity: 0.8;
}
.card-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40%;
}
.card-small {
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
}
.card-small:hover {
  opacity: 0.8;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  color: #fff;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.card:hover .card-overlay {
  opacity: 1;
}

.card-title {
  padding: 0 10px;
}

.card-description {
  padding: 10px;
}

@media screen and (max-width: 640px) {
  .container {
    flex-direction: column;
  }
  .card {
    width: 100%;
    margin-bottom: 20px;
  }
  .card-container {
    width: 100%;
  }
  .card-small {
    margin-bottom: 20px;
  }
  .card-title {
    padding: 8px;
  }
  .card-description {
    display: none;
  }
}
</style>
