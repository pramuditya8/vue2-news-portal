<template>
  <div class="details"><NewsDetailsContent :data="data" /></div>
</template>

<script>
import NewsDetailsContent from "../molecules/NewsDetailsContent.vue";
export default {
  components: { NewsDetailsContent },
  name: "NewsDetails",
  props: ["data"],
};
</script>

<style lang="scss" scoped>
.details {
  width: 100%;
}
</style>
