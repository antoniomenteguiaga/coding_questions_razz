<template>
  <section class="background">
    <section class="lightbox">
      <header><h1>Congratulations!</h1></header>
      <p>You redeemed your {{prize.name}}.</p>
      <nuxt-link to="/" class="redeem">
        More Rewards
      </nuxt-link>
      <button @click="$emit('close')" class="close">&#10060;</button>
    </section>
  </section>
</template>

<script>
export default {
  props: ['prize']
}
</script>

<style scoped>
.background{
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
}
.lightbox{
  display: flex;
  flex-direction: column;
  margin:auto;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: white;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 3em;
  padding-right: 3em;
  border-radius: 0.25em;
}
.lightbox>ul{
  display: flex;
  list-style:none;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}
.close{
  position: fixed;
  right: 0;
  top: 0;
  text-decoration: none;
}
</style>
