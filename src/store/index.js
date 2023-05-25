import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    newsDetails: {},
    loading: false,
  },
  getters: {
    news(state) {
      return state.news;
    },
    newsDetails(state) {
      return state.newsDetails;
    },
    loading(state) {
      return state.loading;
    },
  },
  mutations: {
    setNews(state, news) {
      state.news = news;
    },
    setNewsDetails(state, news) {
      state.newsDetails = news;
    },
    setLoading(state, value) {
      state.loading = value;
    },
  },
  actions: {
    fetchAllNews(context) {
      context.commit("setLoading", true);
      axios
        .get("https://berita-indo-api.vercel.app/v1/cnn-news/")
        .then((response) => {
          // console.log(response);
          return response.data.data.map((e) => {
            const uuid = crypto.randomUUID();
            const slug = e.title
              .toLowerCase()
              .replace(/[^\w ]+/g, "")
              .replace(/ +/g, "-");
            return {
              ...e,
              id: uuid,
              slug,
              content: "",
            };
          });
        })
        .then((response) => {
          console.log(response.splice(0, 45));
          context.commit("setNews", response.splice(0, 45));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          context.commit("setLoading", false);
        });
    },
    findNewsDetails(context, slug) {
      const newsDetails = context?.state?.news?.find((e) => e.slug === slug);

      // console.log(newsDetails);
      context.commit("setNewsDetails", newsDetails);
    },
    editNews(context, value) {
      // const news = context?.state?.news?.find((e) => e.id === value.id);
      // let newNews = {}
      console.log(value);
      const newNews = context?.state?.news?.map((e) => {
        if (e.slug === value.slug) {
          if (e.image.large === value.image) {
            return {
              ...e,
              content: value.content,
              title: value.title,
              description: value.description,
            };
          } else {
            return {
              ...e,
              content: value.content,
              title: value.title,
              description: value.description,
              image: {
                small: value.image,
                large: value.image,
              },
            };
          }
        } else {
          return {
            ...e,
          };
        }
      });

      console.log(newNews);
      context.commit("setNews", newNews);
    },
  },
  modules: {},
});
