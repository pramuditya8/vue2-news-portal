<template>
  <div class="nav-menu">
    <div class="nav-content-mobile">
      <router-link to="/home" class="nav-link" style="text-decoration: none"
        ><h2>ABC NEWS</h2></router-link
      >
      <svg
        @click="showMenu()"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
        class="bi bi-list hamburger"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </div>
    <div class="nav-content" :class="this.isOpen ? 'open-menu' : 'closed-menu'">
      <div>
        <router-link to="/home" class="logo" style="text-decoration: none"
          ><h2>ABC NEWS</h2></router-link
        >
      </div>
      <ul class="nav-items">
        <li>
          <router-link to="/home" class="nav-link">Home</router-link>
        </li>
      </ul>
      <!-- <div class="login-button">Login</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    showMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
$mainColor: black;
$textMainColor: white;
$textMainColorHover: rgb(201, 201, 201);

.nav-menu {
  background-color: $mainColor;
}
.nav-content-mobile {
  display: none;
  .nav-link {
    cursor: pointer;
  }
}
.nav-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 400px;
  align-items: center;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  // li {
  //   padding: 0 10px;
  // }
  li .nav-link {
    color: $textMainColor;
    text-decoration: none;
  }
  li .nav-link:hover {
    color: $textMainColorHover;
  }
}

h2 {
  color: $textMainColor;
}

@media screen and (max-width: 1280px) {
  .nav-content {
    padding: 10px 150px;
  }
}

@media screen and (max-width: 1080px) {
  .nav-content {
    padding: 10px 80px;
  }
}

@media screen and (max-width: 768px) {
  .nav-menu {
    position: absolute;
    width: 100%;
  }
  .nav-content-mobile {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
  }
  .open-menu {
    opacity: 1;
    // height: 150px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
    padding: 0;
  }
  .logo {
    display: none;
  }
  .nav-items {
    flex-direction: column;
    margin: 20px;
  }
}
</style>
