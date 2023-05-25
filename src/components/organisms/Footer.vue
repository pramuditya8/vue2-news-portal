<template>
  <div class="footer"><p class="logo">&#169; ABC NEWS</p></div>
</template>

<script>
export default {
  name: "VueFooter",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 10px 400px;
  background-color: black;
  font-size: 14px;
  margin-top: 300px;
  .logo {
    color: white;
  }
}
@media screen and (max-width: 1280px) {
  .footer {
    padding: 10px 150px;
  }
}

@media screen and (max-width: 1080px) {
  .footer {
    padding: 10px 80px;
  }
}

@media screen and (max-width: 768px) {
}
</style>
