<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import BottomNavBar from './components/NavBar/BottomNavBar.vue';
import SideNavBar from './components/NavBar/SideNavBar.vue';
import TopNavBar from './components/NavBar/TopNavBar.vue';
</script>

<template>
  <div class="flex flex-col lg:flex-row">
    <SideNavBar class="sticky top-0"/>
    <div class="static appRight">
      <!-- <TopNavBar class="sticky top-0 z-50" /> -->
      <RouterView class="RouterView"/>
      <Footer />
      <div class="h-[80px] lg:hidden"></div>
      <BottomNavBar class="fixed bottom-0 z-50" />
    </div>
  </div>
</template>

<style scoped>
@import "style.css";

#app{
  max-width: calc(100vw - 200px);
}

.appRight{
  min-width: calc(100vw - 10px);
}

/* .RouterView {
  width: calc(100vw - 200px);
} */

/* template>*{
  width: 100%;
  max-width: 1440px;
  margin: auto;
} */

.maxWidth{
  min-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .appRight{
  min-width: calc(100vw - 110px);
}

}
</style>
