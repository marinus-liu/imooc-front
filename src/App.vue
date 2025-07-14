<template>

    <imooc-header></imooc-header>
    <RouterView></RouterView>
    <imooc-footer></imooc-footer>

</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default{
  name: 'app',
  components: {
    'imooc-header': Header,
    'imooc-footer': Footer
  }
}
</script>
<style lang="scss">
@import "assets/layui/css/layui.css";
@import "assets/layui/css/modules/layer/default/layer.css";
</style>
