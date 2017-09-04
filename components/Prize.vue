<template>
  <section class="prize">
	<div :style="image"></div>
  	<h1 class="title">Win a {{ prize.name }}</h1>
	<redeem :prize="prize" class="redeem"/>
  </section>
</template>

<script>
import Redeem from '~/components/RedeemNav.vue'

export default {
  props: ['prize'],
  components: {
    Redeem
  },
  computed: {
    image () {
      return {
        background: `url(${this.prize.image_url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '12em',
        width: '100%',
        borderRadius: '0.25em'
      }
    }
  }
}
</script>

<style scoped>
.prize{
	text-align: center;
        width: 100%;
	padding-top: 1em;
	padding-bottom: 1em;
}

.title{
	padding-top: 3em;
	padding-bottom: 3em;
}
.redeem{
	padding-left:2em;
	padding-right:2em;
}
</style>
