<template>
  <div class="content-wrapper">
    <Header></Header>
    <div class="container-fluid px-3 py-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
.content-wrap {
  width: 100%;
}
</style>