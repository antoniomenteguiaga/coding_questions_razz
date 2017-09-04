<template>
  <section class="prize">
	<div :style="image"></div>
  	<h1 class="title">Win a {{ reward.name }}</h1>
	<redeem :reward="reward" class="redeem"/>
  </section>
</template>

<script>
import Redeem from '~/components/RedeemNav.vue'

export default {
  props: ['reward'],
  components: {
    Redeem
  },
  computed: {
    image () {
      return {
        background: `url(${this.reward.image_url})`,
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
