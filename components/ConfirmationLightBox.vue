<template>
  <section class="lightbox">
    <header><h1>Are you sure?</h1></header>
    <div :style="image"></div>
    <p>Redeem your {{reward.name}}?</p>
    <ul>
      <li><button @click="$emit('confirm')">Yes</button></li>
      <li><button @click="$emit('close')">Cancel</button></li>
    </ul>
    <button @click="$emit('close')" class="close">&#10060;</button>
  </section>
</template>

<script>
export default {
  props: ['reward'],
  computed: {
    image () {
      return {
        background: `url(${this.reward.image_url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '12em',
        width: '12em',
        borderRadius: '50%'
      }
    }
  }
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
