<template>
  <a-layout class="container">
    <Nav></Nav>
    <a-layout>
      <a-layout-header class="headerBtn">
        <Header></Header>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>
        <Footer>
        </Footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.container{
  height: 100%;
}
.headerBtn{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

</style>

<script>
import Nav from "../components/admin/Nav";
import Footer from "../components/admin/Footer";
import Header from "../components/admin/Header";
export default{
  components: {Footer, Nav,Header},

}
</script>