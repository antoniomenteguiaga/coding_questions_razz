<template>
  <div>
    <div class="fitScreen">
      <my-header/>
        <nuxt class="nuxt"/>
        <my-footer class="footer"/>
    </div>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import MyHeader from '~/components/Header.vue'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
.fitScreen{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.nuxt{
  flex: 1;
}
</style>
