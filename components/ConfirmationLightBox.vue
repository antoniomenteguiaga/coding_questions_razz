<template>
  <section class="background">
    <section class="lightbox">
      <header><h1>Are you sure?</h1></header>
      <div :style="image"></div>
      <p>Redeem your {{prize.name}}?</p>
      <ul>
        <li><button @click="$emit('confirm')" class="button">Yes</button></li>
        <li><button @click="$emit('close')" class="button cancel">Cancel</button></li>
      </ul>
      <button @click="$emit('close')" class="close">&#10006;</button>
    </section>
  </section>
</template>

<script>
export default {
  props: ['prize'],
  computed: {
    image () {
      return {
        background: `url(${this.prize.image_url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '12rem',
        width: '12rem',
        borderRadius: '50%',
        margin: 'auto'
      }
    }
  }
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
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 10rem;
  padding-right: 10rem;
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
}
.button{
  width: 7rem;
  margin: 1rem;
}
</style>
