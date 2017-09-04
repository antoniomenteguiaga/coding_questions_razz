<template>
  <section class="lightbox">
    <header><h1>Congratulations!</h1></header>
    <p>You redeemed your {{reward.name}}?</p>
    <a href="#">More Prizes</a>
    <button @click="$emit('close')" class="close">&#10060;</button>
  </section>
</template>

<script>
export default {
  props: ['reward']
}
</script>

<style scoped>
.lightbox{
  display: flex;
  flex-direction: column;
  margin:auto;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
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
